"use strict";

var express = require("express");

var cors = require("cors");

var mysql = require("mysql");

var host = "localhost";
var port = 3000;
var app = express();
app.use(cors());
app.use(express.json()); // MYSQL CONNECTION

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "postsdb"
});
con.connect(function (err) {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database");
  }
}); // HOME ROUTE

app.get("/", function (req, res) {
  res.send("<h1>Welcome to POST API</h1>");
}); // GET ALL POSTS

app.get("/api/posts/all", function (req, res) {
  var sql = "SELECT * FROM posts";
  con.query(sql, function (err, result) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(result);
    }
  });
});
app.listen(port, function () {
  console.log("Server running at http://localhost:".concat(port));
});
//# sourceMappingURL=main.dev.js.map
