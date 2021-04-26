const mongoose = require('mongoose');
const subredditSchema = require('./subreddit-schema');

const subredditModel = mongoose.model('SubredditModel', subredditSchema);

module.exports = subredditModel;