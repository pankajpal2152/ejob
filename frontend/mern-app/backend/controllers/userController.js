import User from "../models/User.js";

// GET
export const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

// POST
export const addUser = async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
};

// DELETE
export const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
};