const mongoose = require('mongoose');
const favoriteSubredditSchema = require('./favorite-subreddit-schema');

const favoriteSubredditModel = mongoose.model('FavoriteSubredditModel', favoriteSubredditSchema);

module.exports = favoriteSubredditModel;