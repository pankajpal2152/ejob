"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _db = _interopRequireDefault(require("./config/db.js"));

var _userRoutes = _interopRequireDefault(require("./routes/userRoutes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
(0, _db["default"])();
app.use("/api/users", _userRoutes["default"]);
app.listen(5000, function () {
  return console.log("Server running on port 5000");
});
//# sourceMappingURL=server.dev.js.map
