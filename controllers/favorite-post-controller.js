const favoritePostDao = require('../daos/favorite-post-dao');

module.exports = (app) => {
  const createFavoritePost = (req, res) => {
    const userId = req.body.userId;
    const threadId = req.body.threadId;
    const username = req.body.username;
    const threadTitle = req.body.threadTitle;
    const thumbnail = req.body.thumbnail;
    favoritePostDao.createFavoritePost(userId, threadId, username, threadTitle, thumbnail)
      .then(favoritePost => res.json(favoritePost));
  }

  const removeFavoritePost = (req, res) => {
    const userId = req.body.userId;
    const threadId = req.body.threadId;
    favoritePostDao.removeFavoritePost(userId, threadId)
      .then(oldFavPost => res.json(oldFavPost));
  }

  const findFavoritePostsByUser = (req, res) => {
    const userId = req.params.userId;
    favoritePostDao.findFavoritePostsByUser(userId)
      .then(favposts => res.json(favposts));
  }

  const findFavoritePostsByUsername = (req, res) => {
    const username = req.params.username;
    favoritePostDao.findFavoritePostsByUsername(username)
      .then(favposts => res.json(favposts));
  }

  const isFavoritePost = (req, res) => {
    const userId = req.params.userId;
    const threadId = req.params.threadId;
    favoritePostDao.isFavoritePost(userId, threadId).then(count => {
      if (count <= 0) {
        res.send(false);
      } else {
        res.send(true);
      }
    });
  }

  const findAllFavoritePosts = (req, res) => {
    favoritePostDao.findAllFavoritePosts()
      .then(posts => res.json(posts));
  }

  const countFavoritePosts = (req, res) => {
    favoritePostDao.countFavoritePostsByUser()
      .then(users => res.json(users));
  }

  app.post('/api/favoritepost/create', createFavoritePost);
  app.delete('/api/favoritepost/remove', removeFavoritePost)
  app.get('/api/favoritepost/user/:userId', findFavoritePostsByUser);
  app.get('/api/favoritepost/username/:username', findFavoritePostsByUsername);
  app.get('/api/favoritepost/check/:threadId/:userId', isFavoritePost);
  app.get('/api/favoritepost/all', findAllFavoritePosts);
  app.get('/api/favoritepost/countByUser', countFavoritePosts);
}