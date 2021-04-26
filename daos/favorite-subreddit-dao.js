const favoriteSubredditModel = require('../models/favorite-subreddit/favorite-subreddit-model');

const addFavoriteSubreddit = (userId, subredditId) => {
  return favoriteSubredditModel.create({userId, subredditId});
}

const removeFavoriteSubreddit = (userId, subredditId) => {
  return favoriteSubredditModel.findOneAndRemove({userId, subredditId});
}

const getFavoriteSubredditsByUser = (userId) => {
  return favoriteSubredditModel.find({userId}).populate('subredditId').exec();
}

const isFavoriteSubreddit = (userId, subredditId) => {
  return favoriteSubredditModel.countDocuments({userId, subredditId})
}

const findAllFavoriteSubreddits = () => {
  return favoriteSubredditModel.find().populate('userId').populate('subredditId').exec();
}

const countFavoriteSubredditsByUser = () => {
  return favoriteSubredditModel.aggregate([
    {'$group' : {_id: '$userId', numFavorites: {$sum: 1}}},
    {'$lookup': {
        from: 'user',
        localField: '_id',
        foreignField: '_id',
        as: 'userInfo'
      }
    },
    {'$project': {
      '_id': 1,
        'numFavorites': 1,
        'user': { '$arrayElemAt': [ '$userInfo', 0 ] }
      }
    }
  ])
}


module.exports = {
  addFavoriteSubreddit,
  removeFavoriteSubreddit,
  getFavoriteSubredditsByUser,
  isFavoriteSubreddit,
  countFavoriteSubredditsByUser,
  findAllFavoriteSubreddits
}