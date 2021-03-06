const { badData, notFound } = require('boom');
const { body, param } = require('express-validator/check');
const config = require('../config');
const { Org, OrgUser, Room } = require('../models');
const { checkValidationResult } = require('../services/errorHandler');
const Rooms = require('../services/rooms');

module.exports.create = [
  body('name')
    .not().isEmpty()
    .isLength({ min: 1, max: 25 })
    .trim(),
  checkValidationResult,
  (req, res, next) => {
    // Create organization
    const { name } = req.body;
    const org = new Org({ name });
    org
      .save()
      .then(() => {
        // Add creator to the organization
        const user = new OrgUser({
          active: true,
          admin: true,
          org: org._id,
          user: req.user._id,
        });
        return user
          .save();
      })
      .then(() => (
        // Create default rooms for the organization
        Promise.all(config.defaultRooms.map(({
          flag,
          name,
          peerLimit,
        }) => {
          const room = new Room({
            flag,
            name,
            org: org._id,
            peerLimit,
          });
          return room
            .save();
        }))
      ))
      .then(() => (
        // Return the new org slug to the client
        res.json(org.slug)
      ))
      .catch(next);
  },
];

module.exports.get = [
  param('slug')
    .not().isEmpty()
    .isLowercase()
    .trim(),
  checkValidationResult,
  (req, res, next) => {
    const { slug } = req.params;
    // Fetch Org data from the db
    Org
      .findOne({ slug })
      .select('name')
      .then((org) => {
        if (!org) {
          throw notFound();
        }
        if (!req.user) {
          return org;
        }
        // Fetch user data for this org
        return OrgUser
          .findOne({
            user: req.user._id,
            org: org._id,
          })
          .select('-_id active admin')
          .then((user) => {
            if (!user) {
              return org;
            }
            return {
              ...org._doc,
              isActive: user.active || undefined,
              isAdmin: user.admin || undefined,
              isUser: true,
            };
          });
      })
      .then(org => (
        // Return the org data to the client
        res.json(org)
      ))
      .catch(next);
  },
];

module.exports.getImage = [
  param('org')
    .isMongoId(),
  param('image')
    .isIn(['cover', 'logo']),
  checkValidationResult,
  (req, res, next) => {
    const { org, image } = req.params;
    Org
      .findOne({
        _id: org,
        [image]: { $exists: true },
      })
      .select('updatedAt')
      .then((user) => {
        if (!user) {
          throw notFound();
        }
        const lastModified = user.updatedAt.toUTCString();
        if (req.get('if-modified-since') === lastModified) {
          return res.status(304).end();
        }
        return Org
          .findById(user._id)
          .select(`-_id ${image}`)
          .then(({ [image]: buffer }) => (
            res
              .set('Cache-Control', 'must-revalidate')
              .set('Content-Type', 'image/jpeg')
              .set('Last-Modified', lastModified)
              .send(buffer)
          ));
      })
      .catch(next);
  },
];

module.exports.getUsers = (req, res, next) => {
  const { org } = req;
  return OrgUser
    .find({
      admin: false,
      org,
    })
    .select('-_id active user')
    .populate('user', 'name')
    .then(users => (
      res.json(users.map(({ active, user }) => ({
        ...user._doc,
        isRequest: !active || undefined,
      })))
    ))
    .catch(next);
};

module.exports.remove = (req, res, next) => {
  const { org } = req;
  // Remove org users
  return OrgUser
    .deleteMany({ org })
    .then(() => (
      // Find org rooms
      Room
        .find({ org })
        .select('slug')
        .then(rooms => (
          // Remove them from the room service
          rooms.forEach(({ slug }) => (
            Rooms.remove(`${org}::${slug}`)
          ))
        ))
    ))
    .then(() => (
      // Remove org rooms
      Room
        .deleteMany({ org })
    ))
    .then(() => (
      // Remove org
      Org
        .deleteOne({ _id: org })
    ))
    .then(() => (
      // Success!
      res.status(200).end()
    ))
    .catch(next);
};

module.exports.removeUser = [
  param('user')
    .isMongoId(),
  checkValidationResult,
  (req, res, next) => {
    const { org, user } = req;
    return OrgUser
      .findOne({
        active: true,
        org,
        user,
      })
      .then((isUser) => {
        if (!isUser) {
          throw notFound();
        }
        return OrgUser
          .deleteOne({
            org,
            user,
          });
      })
      .then(() => (
        res.status(200).end()
      ))
      .catch(next);
  },
];

module.exports.resolveAccessRequest = [
  param('user')
    .isMongoId(),
  param('resolution')
    .isIn(['approve', 'decline']),
  checkValidationResult,
  (req, res, next) => {
    const { org } = req;
    const { user, resolution } = req.params;
    return OrgUser
      .findOne({
        active: false,
        org,
        user,
      })
      .then((hasRequested) => {
        if (!hasRequested) {
          throw notFound();
        }
        if (resolution === 'approve') {
          hasRequested.active = true;
          return hasRequested
            .save();
        }
        return OrgUser
          .deleteOne({
            org,
            user,
          });
      })
      .then(() => (
        res.status(200).end()
      ))
      .catch(next);
  },
];

module.exports.requestAccess = [
  param('org')
    .isMongoId(),
  checkValidationResult,
  (req, res, next) => {
    const { org } = req.params;
    return Org
      .findById(org)
      .select('_id')
      .then((org) => {
        if (!org) {
          throw notFound();
        }
        const user = new OrgUser({
          org,
          user: req.user._id,
        });
        return user
          .save();
      })
      .then(() => (
        res.status(200).end()
      ))
      .catch(next);
  },
];

module.exports.update = [
  body('name')
    .not().isEmpty()
    .isLength({ min: 1, max: 25 })
    .trim(),
  checkValidationResult,
  (req, res, next) => {
    const { org } = req;
    const { name } = req.body;
    return Org
      .findById(org)
      .then((org) => {
        if (!org) {
          throw notFound();
        }
        org.name = name;
        return org
          .save();
      })
      .then(org => (
        res.json({
          name: org.name,
        })
      ))
      .catch(next);
  },
];

module.exports.updateImage = [
  param('image')
    .isIn(['cover', 'logo']),
  checkValidationResult,
  (req, res, next) => {
    const { org } = req;
    const { image } = req.params;
    if (
      !req.file
      || !req.file.buffer
      || req.file.mimetype.indexOf('image/') !== 0
    ) {
      throw badData();
    }
    return Org
      .findById(org)
      .then((org) => {
        if (!org) {
          throw notFound();
        }
        org[image] = req.file.buffer;
        return org
          .save();
      })
      .then(() => (
        res.status(200).end()
      ))
      .catch(next);
  },
];
