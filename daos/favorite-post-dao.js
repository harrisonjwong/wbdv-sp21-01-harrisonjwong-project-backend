const favoritePostModel = require('../models/favorite-post/favorite-post-model');

const createFavoritePost = (userId, threadId, username, threadTitle) => {
  return favoritePostModel.create({userId, threadId, username, threadTitle});
}

const removeFavoritePost = (userId, threadId) => {
  return favoritePostModel.findOneAndRemove({userId, threadId});
}

const findFavoritePostsByUser = (userId) => {
  return favoritePostModel.find({userId})
}

const findFavoritePostsByUsername = (username) => {
  return favoritePostModel.find({username})
}

const isFavoritePost = (userId, threadId) => {
  return favoritePostModel.countDocuments({userId, threadId});
}

const findAllFavoritePosts = () => {
  return favoritePostModel.find();
}

module.exports = {
  createFavoritePost,
  removeFavoritePost,
  findFavoritePostsByUser,
  findAllFavoritePosts,
  isFavoritePost,
  findFavoritePostsByUsername
}
