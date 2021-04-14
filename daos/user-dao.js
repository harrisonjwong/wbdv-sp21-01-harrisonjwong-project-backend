const userModel = require('../models/user/user-model');

const findUserByCredentials = (username, password) => {
  return userModel.findOne({username, password});
}

const createUser = (userBody) => {
  const username = userBody.username;
  const password = userBody.password;
  const displayName = userBody.displayName;
  const role = userBody.role;
  return userModel.create({username, password, displayName, role});
}

const updateUser = (userBody) => {
  return userModel.updateOne({_id: userBody._id}, {$set: userBody});
}

module.exports = {
  findUserByCredentials,
  createUser,
  updateUser
}
