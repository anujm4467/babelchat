const { body, param } = require('express-validator/check');
const { isMongoId } = require('validator');
const { Org, OrgUser, Room } = require('../models');
const { checkValidationResult } = require('../services/errorHandler');
const Rooms = require('../services/rooms');

module.exports.create = [
  body('flag')
    .not().isEmpty()
    .isLength({ min: 2, max: 2 }),
  body('name')
    .not().isEmpty()
    .isLength({ min: 1, max: 25 })
    .trim(),
  body('peerLimit')
    .optional()
    .isInt()
    .toInt(),
  body('users')
    .optional()
    .isArray()
    .custom((users) => {
      for (let i = 0; i < users.length; i += 1) {
        if (!isMongoId(users[i])) {
          return false;
        }
      }
      return true;
    }),
  checkValidationResult,
  (req, res, next) => {
    const {
      flag,
      name,
      peerLimit,
      users,
    } = req.body;
    const { org } = req;
    const room = new Room({
      flag,
      name,
      org,
      peerLimit: peerLimit ? Math.min(Math.max(peerLimit, 2), 8) : undefined,
      public: !users,
      users: users || undefined,
    });
    return room
      .save()
      .then(room => (
        res.json({
          flag: room.flag,
          name: room.name,
          peerLimit: room.peerLimit,
          peers: 0,
          slug: room.slug,
        })
      ))
      .catch(next);
  },
];

module.exports.list = (req, res, next) => {
  const { org } = req;
  // Fetch the room list from the db
  return Room
    .find({
      org,
      ...(!req.user.isOrgAdmin ? ({
        $or: [
          { public: true },
          { users: req.user._id },
        ],
      }) : {}),
    })
    .select('-_id flag name peerLimit slug')
    .then(rooms => res.json(
      rooms.map(({ _doc }) => {
        const room = Rooms(`${org}::${_doc.slug}`);
        return {
          ..._doc,
          // Append current peer count
          // from the room service
          peers: room ? room.peers.length : 0,
        };
      })
    ))
    .catch(next);
};

module.exports.join = (peer, req) => {
  // Monitor if the peer closes the connection
  // While we are loading the room
  let hasClosed = false;
  const onClose = () => {
    hasClosed = true;
  };
  peer.once('close', onClose);

  const { org, slug } = req.params;
  // Fetch org
  Org
    .findOne({ slug: org })
    .select('_id')
    .then((org) => {
      if (!org) {
        throw new Error('NOT_FOUND');
      }
      // Access control
      return OrgUser
        .findOne({
          active: true,
          user: peer.user._id,
          org: org._id,
        })
        .then((isOrgUser) => {
          if (!isOrgUser) {
            throw new Error('UNAUTHORIZED');
          }
          // Load the room
          return new Promise((resolve) => {
            // Check if the room is already loaded
            const roomKey = `${org._id}::${slug}`;
            const room = Rooms(roomKey);
            if (room) {
              resolve(room);
              return;
            }
            // Room it's not loaded
            // Fetch it from the db
            resolve(
              Room
                .findOne({ org: org._id, slug })
                .then((room) => {
                  if (!room) {
                    // Room doesn't exists
                    throw new Error('NOT_FOUND');
                  }
                  room.key = roomKey;
                  // Load room
                  return Rooms(room);
                })
            );
          });
        });
    })
    .then((room) => {
      // Check if the room is already full
      if (room.peers.length >= room.db.peerLimit) {
        throw new Error('FULL_ROOM');
      }
      // Check if the peer is still connected
      if (!hasClosed) {
        // Stop monitoring the connection
        peer.off('close', onClose);
        // Delegate the peer connection to the room service
        room.onOpen(peer);
      }
    })
    .catch(err => (
      // Send back error to peer
      peer.send(JSON.stringify({
        type: 'ROOM/ERROR',
        payload: err.message,
      }), () => (
        // Close the connection
        peer.close(1000)
      ))
    ));
};

module.exports.remove = [
  param('slug')
    .not().isEmpty()
    .trim(),
  checkValidationResult,
  (req, res, next) => {
    const { org } = req;
    const { slug } = req.params;
    return Room
      .deleteOne({ org, slug })
      .then(() => {
        Rooms.remove(`${org}::${slug}`);
        res.status(200).end();
      })
      .catch(next);
  },
];
