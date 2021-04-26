const mongoose = require('mongoose');

const subredditSchema = mongoose.Schema({
  name: String
}, {collection: 'subreddit'});

module.exports = subredditSchema;