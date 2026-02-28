// Creating Basic WebServer API using Express.
import express from 'express';
import cors from 'cors';

// Static JSON users array
const users = [
    { id: 1, name: "John", languages: ['Bengali', 'Hindi'], address: { state: 'wb', city: 'Kol', pinCode: 712235 } },
    { id: 2, name: "Rohit", languages: ['Hindi', 'Urdu', 'English'], address: { state: 'Punjab', city: 'Amritsar', pinCode: 615545 } },
    { id: 3, name: 'Rahul', languages: ['Hindi', 'Bengali', 'English'], address: { state: 'WB', city: 'Howrah', pinCode: 7122056 } }
];

const host = 'localhost';
const port = 3000;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Express</h1>");
});

app.get("/api/users", (req, res) => {
    res.status(200).json(users);
});

app.get("/api/users/:uid", (req, res) => {
    const userId = req.params.uid;
    const singleUser = users.find(user => user.id == userId);

    if (!singleUser) {
        res.status(404).json({ message: "No user found!" });
    } else {
        res.status(200).json(singleUser);
    }
});

app.get("/api/users/state/:state", (req, res) => {
    const state = req.params.state;
    const newUsers = users.filter(user =>
        user.address.state.toLowerCase().includes(state.toLowerCase())
    );

    if (newUsers.length === 0) {
        res.status(404).json({ message: "No such users found!" });
    } else {
        res.status(200).json(newUsers);
    }
});

app.listen(port, host, () => {
    console.log(`Express server started at http://${host}:${port}`);
});