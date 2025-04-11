const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  profilePicture: {
    type: String,
    default: 'https://i.pravatar.cc/{size}', // random image from pravatar.cc
  },
  statusMessage: {
    type: [String],
    default: [],
  },
  bio: {
    type: String,
    default: '',
  },
  interest: {
    type: [String],
    default: [],
  },
  diagnoses: {
    type: [String],
    default: [],
  },
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
