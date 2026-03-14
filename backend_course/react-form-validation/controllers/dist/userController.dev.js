"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = exports.createUser = void 0;
var users = [];

var createUser = function createUser(req, res) {
  var _req$body = req.body,
      firstName = _req$body.firstName,
      lastName = _req$body.lastName,
      phone = _req$body.phone,
      email = _req$body.email,
      password = _req$body.password;
  var profilePic = req.file ? req.file.filename : null;
  var newUser = {
    id: Date.now(),
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    email: email,
    password: password,
    profilePic: profilePic
  };
  users.push(newUser);
  res.json({
    message: "User created successfully",
    user: newUser
  });
};

exports.createUser = createUser;

var getUsers = function getUsers(req, res) {
  res.json(users);
};

exports.getUsers = getUsers;
//# sourceMappingURL=userController.dev.js.map
