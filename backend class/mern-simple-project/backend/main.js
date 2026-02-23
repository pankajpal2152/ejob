const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        languages: ['JavaScript', 'Python'],
        address: { state: "WB", city: "Kolkata", pinCode: 700102 }
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        languages: ['Python', 'Java'],
        address: { state: "MH", city: "Mumbai", pinCode: 400001 }
    },
    {
        id: 3,
        name: 'Rahul',
        languages: ['Hindi', 'Bengali', 'English'],
        address: { state: 'WB', city: 'Howrah', pinCode: 712205 }
    }
];

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the User API</h1>");
});

app.get("/api/users", (req, res) => {
    res.status(200).json(users);
});

app.get("/health", (req, res) => {
    res.json({ status: "OK", uptime: process.uptime() });
});

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});