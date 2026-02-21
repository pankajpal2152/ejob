// Import http module
const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {

    // CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight request
    if (req.method === "OPTIONS") {
        res.writeHead(204);
        return res.end();
    }

    // Route: Home
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end("<h1>Hello World</h1>");
    }

    // Route: API users
    if (req.url === "/api/users" && req.method === "GET") {
        const users = [
            { id: 1, name: "John", age: 33, sal: 12000 },
            { id: 2, name: "Diana", age: 31, sal: 14000 }
        ];

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(users));
    }

    // 404
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");

});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});