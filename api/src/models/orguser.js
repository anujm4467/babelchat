const mongoose = require('mongoose');

const OrgUserSchema = new mongoose.Schema({
  active: { type: Boolean, default: false },
  admin: { type: Boolean, default: false },
  org: { type: mongoose.Schema.Types.ObjectId, ref: 'Org' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

OrgUserSchema.index({ user: true, org: true, unique: true });

module.exports = mongoose.model('OrgUser', OrgUserSchema);
