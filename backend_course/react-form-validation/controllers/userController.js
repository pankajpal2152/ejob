let users = [];

export const createUser = (req, res) => {

    const { firstName, lastName, phone, email, password } = req.body;

    const profilePic = req.file ? req.file.filename : null;

    const newUser = {
        id: Date.now(),
        firstName,
        lastName,
        phone,
        email,
        password,
        profilePic
    };

    users.push(newUser);

    res.json({
        message: "User created successfully",
        user: newUser
    });
};

export const getUsers = (req, res) => {

    res.json(users);

};