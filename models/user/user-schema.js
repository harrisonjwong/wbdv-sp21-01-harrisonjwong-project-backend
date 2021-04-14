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
  }
}, {collection: 'user'});

module.exports = userSchema;