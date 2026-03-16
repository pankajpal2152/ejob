const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const host = "localhost";
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

// MYSQL CONNECTION
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "postsdb"
});

con.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL database");
    }
});

// HOME ROUTE
app.get("/", (req, res) => {
    res.send("<h1>Welcome to POST API</h1>");
});

// GET ALL POSTS
app.get("/api/posts/all", (req, res) => {
    const sql = "SELECT * FROM posts";

    con.query(sql, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});