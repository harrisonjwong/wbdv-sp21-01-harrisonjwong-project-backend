const mongoose = require('mongoose');
const userSchema = require('./favorite-post-schema');

const favoritePostModel = mongoose.model('FavoritePostModel', userSchema);

module.exports = favoritePostModel;