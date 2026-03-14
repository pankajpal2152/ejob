import express from "express";
import multer from "multer";
import { createUser, getUsers } from "../controllers/userController.js";

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {

    const allowed = /jpg|jpeg|png|gif/;

    const ext = allowed.test(file.originalname.toLowerCase());

    if (ext) {
        cb(null, true);
    } else {
        cb(new Error("Only JPG, JPEG, PNG, GIF allowed"));
    }
};

const upload = multer({ storage, fileFilter });

router.post("/", upload.single("profilePic"), createUser);

router.get("/", getUsers);

export default router;