const subredditModel = require('../models/subreddit/subreddit-model');

const addSubreddit = (name) => {
  return subredditModel.findOneAndUpdate({name}, {name}, {upsert: true, new: true});
}

module.exports = {
  addSubreddit
}