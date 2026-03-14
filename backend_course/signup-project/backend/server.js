const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// serve uploaded images
app.use("/uploads", express.static("uploads"));

/* ------------------------
   MULTER CONFIG
------------------------- */

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {

    const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif"
    ];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Only JPG JPEG PNG GIF allowed"), false);
    }

};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

/* ------------------------
   STATIC ARRAY DATABASE
------------------------- */

let users = [];

/* ------------------------
   CREATE USER
------------------------- */

app.post("/api/users", upload.single("profilePic"), (req, res) => {

    const body = req.body;

    const user = {
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
    }

    // remove null/undefined
    users = users.filter(Boolean);

    res.json({
        message: "User saved successfully",
        users: users
    });

});

/* ------------------------
   GET USERS
------------------------- */

app.get("/api/users", (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});