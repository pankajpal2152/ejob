"use strict";

var express = require("express");

var cors = require("cors");

var multer = require("multer");

var app = express();
var PORT = 5000;
app.use(cors());
app.use(express.json()); // serve uploaded images

app.use("/uploads", express["static"]("uploads"));
/* ------------------------
   MULTER CONFIG
------------------------- */

var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

var fileFilter = function fileFilter(req, file, cb) {
  var allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG JPEG PNG GIF allowed"), false);
  }
};

var upload = multer({
  storage: storage,
  fileFilter: fileFilter
});
/* ------------------------
   STATIC ARRAY DATABASE
------------------------- */

var users = [];
/* ------------------------
   CREATE USER
------------------------- */

app.post("/api/users", upload.single("profilePic"), function (req, res) {
  var body = req.body;
  var user = {
    firstName: body.firstName,
    middleName: body.middleName,
    lastName: body.lastName,
    age: body.age,
    phone: body.phone,
    email: body.email,
    address: body.address,
    state: body.state,
    city: body.city,
    pinCode: body.pinCode,
    password: body.password,
    profilePic: req.file ? req.file.filename : null
  };

  if (user) {
    users.push(user);
  } // remove null/undefined


  users = users.filter(Boolean);
  res.json({
    message: "User saved successfully",
    users: users
  });
});
/* ------------------------
   GET USERS
------------------------- */

app.get("/api/users", function (req, res) {
  res.json(users);
});
app.listen(PORT, function () {
  console.log("Server running on http://localhost:".concat(PORT));
});
//# sourceMappingURL=server.dev.js.map
