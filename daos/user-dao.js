const userModel = require('../models/user/user-model');

const findUserByCredentials = (username, password) => {
  return userModel.findOne({username, password});
}

const createUser = (userBody) => {
  const username = userBody.username;
  const password = userBody.password;
  const displayName = userBody.displayName;
  const role = userBody.role;
  const email = userBody.email;
  const dob = userBody.dob;
  return userModel.create({username, password, displayName, role, email, dob});
}

const updateUser = (userBody) => {
  return userModel.updateOne({_id: userBody._id}, {$set: userBody});
}

const findUser = (username) => {
  return userModel.findOne({username});
}

module.exports = {
  findUserByCredentials,
  createUser,
  updateUser,
  findUser
}
