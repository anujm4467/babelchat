const { badData, notFound } = require('boom');
const { body, param } = require('express-validator/check');
const config = require('../config');
const { Org, OrgUser, Room } = require('../models');
const { checkValidationResult } = require('../services/errorHandler');

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
          .select('active admin')
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
  param('id')
    .isMongoId(),
  param('image')
    .isIn(['cover', 'logo']),
  checkValidationResult,
  (req, res, next) => {
    const { id, image } = req.params;
    Org
      .findOne({
        _id: id,
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

module.exports.getImage = [
  param('id')
    .isMongoId(),
  param('image')
    .isIn(['cover', 'logo']),
  checkValidationResult,
  (req, res, next) => {
    const { id, image } = req.params;
    Org
      .findOne({
        _id: id,
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

module.exports.getUsers = [
  param('id')
    .isMongoId(),
  checkValidationResult,
  (req, res, next) => {
    const { id: org } = req.params;
    return OrgUser
      .isOrgAdmin({
        user: req.user._id,
        org,
      })
      .then(() => (
        OrgUser
          .find({
            admin: false,
            org,
          })
          .select('active user')
          .populate('user', 'name')
      ))
      .then(users => (
        res.json(users.map(({ active, user }) => ({
          ...user,
          isActive: active || undefined,
        })))
      ))
      .catch(next);
  },
];

module.exports.requestAccess = [
  param('id')
    .isMongoId(),
  checkValidationResult,
  (req, res, next) => {
    const { id: org } = req.params;
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

module.exports.updateImage = [
  param('id')
    .isMongoId(),
  param('image')
    .isIn(['cover', 'logo']),
  checkValidationResult,
  (req, res, next) => {
    const { id: org, image } = req.params;
    if (
      !req.file
      || !req.file.buffer
      || req.file.mimetype.indexOf('image/') !== 0
    ) {
      throw badData();
    }
    return OrgUser
      .isOrgAdmin({
        user: req.user._id,
        org,
      })
      .then(() => (
        Org
          .findById(org)
          .then((org) => {
            if (!org) {
              throw notFound();
            }
            org[image] = req.file.buffer;
            return org
              .save();
          })
      ))
      .then(() => (
        res.status(200).end()
      ))
      .catch(next);
  },
];

module.exports.updateUser = [
  param('org')
    .isMongoId(),
  param('id')
    .isMongoId(),
  body('active')
    .isBoolean()
    .toBoolean(),
  checkValidationResult,
  (req, res, next) => {
    const { active } = req.body;
    const { id, org } = req.params;
    return OrgUser
      .isOrgAdmin({
        user: req.user._id,
        org,
      })
      .then(() => (
        OrgUser
          .findOne({
            org,
            user: id,
          })
          .then((user) => {
            if (!user) {
              throw notFound();
            }
            user.active = active;
            return user
              .save();
          })
      ))
      .then(() => (
        res.status(200).end()
      ))
      .catch(next);
  },
];
