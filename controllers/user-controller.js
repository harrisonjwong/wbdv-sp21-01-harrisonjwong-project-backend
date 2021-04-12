const userDao = require('../daos/user-dao');

module.exports = (app) => {
  const login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    userDao.findUserByCredentials(username, password)
      .then(user => {
        if (user) {
          req.session['currentUser'] = user;
          res.send(user);
        } else {
          res.sendStatus(403);
        }
      });
  }

  const register = (req, res) => {
    const newUser = req.body;
    userDao.createUser(newUser)
      .then(actualUser => {
        req.session['currentUser'] = actualUser;
        res.json(actualUser);
      })
      .catch(() => {
        res.status(400).send('Invalid username, might be duplicated');
      });
  }

  const profile = (req, res) => {
    const currentUser = req.session['currentUser'];
    if (currentUser) {
      res.json(currentUser);
    } else {
      res.sendStatus(204);
    }
  }

  const logout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  }

  app.post('/api/login', login);
  app.post('/api/register', register);
  app.post('/api/logout', logout);
  app.get('/api/profile', profile);
}