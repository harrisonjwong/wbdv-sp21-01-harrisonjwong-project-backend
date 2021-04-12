const userModel = require('../models/user/user-model');

const findUserByCredentials = (username, password) => {
  return userModel.findOne({username, password});
}

const createUser = (userBody) => {
  const username = userBody.username;
  const password = userBody.password;
  const displayName = userBody.displayName;
  return userModel.create({username, password, displayName});
}

module.exports = {
  findUserByCredentials,
  createUser
}
