"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = require("../controllers/userController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/", _userController.getUsers);
router.post("/", _userController.addUser);
router["delete"]("/:id", _userController.deleteUser);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=userRoutes.dev.js.map
