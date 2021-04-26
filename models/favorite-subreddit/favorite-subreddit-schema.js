const mongoose = require('mongoose');

const favoriteSubredditSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel'
  },
  subredditId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubredditModel'
  }
}, {collection: 'favoriteSubreddit'});

module.exports = favoriteSubredditSchema;