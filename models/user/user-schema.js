const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    unique: true,
    type: String
  },
  password: String,
  displayName: String
}, {collection: 'user'});

module.exports = userSchema;