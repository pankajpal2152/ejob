"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("multer"));

var _userController = require("../controllers/userController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

var fileFilter = function fileFilter(req, file, cb) {
  var allowed = /jpg|jpeg|png|gif/;
  var ext = allowed.test(file.originalname.toLowerCase());

  if (ext) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG, JPEG, PNG, GIF allowed"));
  }
};

var upload = (0, _multer["default"])({
  storage: storage,
  fileFilter: fileFilter
});
router.post("/", upload.single("profilePic"), _userController.createUser);
router.get("/", _userController.getUsers);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=userRoutes.dev.js.map
