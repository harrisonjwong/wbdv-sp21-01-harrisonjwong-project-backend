const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    unique: true,
    type: String
  },
  password: String,
  displayName: String,
  role: {
    type: String,
    enum: ['user', 'superuser']
  },
  email: String,
  dob: Date
}, {collection: 'user'});

module.exports = userSchema;