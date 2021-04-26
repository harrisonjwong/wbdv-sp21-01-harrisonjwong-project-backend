const subredditDao = require('../daos/subreddit-dao');

module.exports = (app) => {
  const createOrFindSubreddit = (req, res) => {
    const name = req.body.name;
    subredditDao.addSubreddit(name).then(response => res.json(response))
  }

  app.post('/api/subreddit/createOrFind', createOrFindSubreddit)
}