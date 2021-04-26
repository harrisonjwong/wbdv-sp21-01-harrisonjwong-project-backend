const favoriteSubredditDao = require('../daos/favorite-subreddit-dao');

module.exports = (app) => {

  const createFavoriteSubreddit = (req, res) => {
    const userId = req.body.userId;
    const subredditId = req.body.subredditId;
    favoriteSubredditDao.addFavoriteSubreddit(userId, subredditId)
      .then(resp => res.json(resp));
  }

  const removeFavoriteSubreddit = (req, res) => {
    const userId = req.body.userId;
    const subredditId = req.body.subredditId;
    favoriteSubredditDao.removeFavoriteSubreddit(userId, subredditId)
      .then(resp => res.json(resp));
  }

  const findFavoriteSubredditsByUser = (req, res) => {
    const userId = req.params.userId;
    favoriteSubredditDao.getFavoriteSubredditsByUser(userId)
      .then(resp => res.json(resp));
  }

  const isFavoriteSubreddit = (req, res) => {
    const userId = req.params.userId;
    const subredditId = req.params.subredditId;
    favoriteSubredditDao.isFavoriteSubreddit(userId, subredditId).then(count => {
      if (count <= 0) {
        res.send(false);
      } else {
        res.send(true);
      }
    });
  }

  const countFavoriteSubreddits = (req, res) => {
    favoriteSubredditDao.countFavoriteSubredditsByUser()
      .then(resp => res.json(resp));
  }

  const findAllFavoriteSubreddits = (req, res) => {
    favoriteSubredditDao.findAllFavoriteSubreddits()
      .then(resp => res.json(resp));
  }

  app.post('/api/favoritesub/create', createFavoriteSubreddit);
  app.delete('/api/favoritesub/remove', removeFavoriteSubreddit)
  app.get('/api/favoritesub/user/:userId', findFavoriteSubredditsByUser);
  // app.get('/api/favoritesub/username/:username', findFavoritePostsByUsername);
  app.get('/api/favoritesub/check/:subredditId/:userId', isFavoriteSubreddit);
  app.get('/api/favoritesub/all', findAllFavoriteSubreddits);
  app.get('/api/favoritesub/countByUser', countFavoriteSubreddits);
}
