import express from "express";
import cors from "cors";
import multer from "multer";
import { users } from "./users.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });

app.post("/api/users", upload.single("profilePic"), (req, res) => {

    const {
        firstName,
        middleName,
        lastName,
        age,
        phone,
        email,
        address,
        state,
        city,
        pinCode,
        password
    } = req.body;

    const user = {
        id: Date.now(),
        firstName,
        middleName,
        lastName,
        age,
        phone,
        email,
        address,
        state,
        city,
        pinCode,
        password,
        profilePic: req.file ? req.file.filename : null
    };

    users.push(user);

    res.json(user);

});

app.get("/api/users", (req, res) => {
    res.json(users);
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server running on port 5000");
});