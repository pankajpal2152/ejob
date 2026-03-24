"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.addUser = exports.getUsers = void 0;

var _User = _interopRequireDefault(require("../models/User.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// GET
var getUsers = function getUsers(req, res) {
  var users;
  return regeneratorRuntime.async(function getUsers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_User["default"].find());

        case 2:
          users = _context.sent;
          res.json(users);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}; // POST


exports.getUsers = getUsers;

var addUser = function addUser(req, res) {
  var user;
  return regeneratorRuntime.async(function addUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_User["default"].create(req.body));

        case 2:
          user = _context2.sent;
          res.json(user);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // DELETE


exports.addUser = addUser;

var deleteUser = function deleteUser(req, res) {
  return regeneratorRuntime.async(function deleteUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_User["default"].findByIdAndDelete(req.params.id));

        case 2:
          res.json({
            message: "Deleted"
          });

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.dev.js.map
