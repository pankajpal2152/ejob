"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _multer = _interopRequireDefault(require("multer"));

var _users = require("./users.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use("/uploads", _express["default"]["static"]("uploads"));

var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

var upload = (0, _multer["default"])({
  storage: storage
});
app.post("/api/users", upload.single("profilePic"), function (req, res) {
  var _req$body = req.body,
      firstName = _req$body.firstName,
      middleName = _req$body.middleName,
      lastName = _req$body.lastName,
      age = _req$body.age,
      phone = _req$body.phone,
      email = _req$body.email,
      address = _req$body.address,
      state = _req$body.state,
      city = _req$body.city,
      pinCode = _req$body.pinCode,
      password = _req$body.password;
  var user = {
    id: Date.now(),
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    age: age,
    phone: phone,
    email: email,
    address: address,
    state: state,
    city: city,
    pinCode: pinCode,
    password: password,
    profilePic: req.file ? req.file.filename : null
  };

  _users.users.push(user);

  res.json(user);
});
app.get("/api/users", function (req, res) {
  res.json(_users.users);
});
var PORT = 5000;
app.listen(PORT, function () {
  console.log("Server running on port 5000");
});
//# sourceMappingURL=server.dev.js.map
