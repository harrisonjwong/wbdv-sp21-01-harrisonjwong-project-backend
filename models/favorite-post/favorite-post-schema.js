const mongoose = require('mongoose');

const favoritePostSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel'
  },
  username: String,
  threadId: String,
  threadTitle: String
}, {collection: 'favoritePost'});

module.exports = favoritePostSchema;