const mongoose = require('mongoose');
const favoritePostSchema = require('./favorite-post-schema');

const favoritePostModel = mongoose.model('FavoritePostModel', favoritePostSchema);

module.exports = favoritePostModel;