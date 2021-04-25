const favoritePostModel = require('../models/favorite-post/favorite-post-model');

const createFavoritePost = (userId, threadId, username, threadTitle, thumbnail) => {
  return favoritePostModel.create({userId, threadId, username, threadTitle, thumbnail});
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

const countFavoritePostsByUser = () => {
  return favoritePostModel.aggregate([
    {'$group' : {_id: '$username', numFavorites: {$sum: 1}}}
  ]);
}

module.exports = {
  createFavoritePost,
  removeFavoritePost,
  findFavoritePostsByUser,
  findAllFavoritePosts,
  isFavoritePost,
  findFavoritePostsByUsername,
  countFavoritePostsByUser
}
