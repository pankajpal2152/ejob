const fs = require('fs');

// Asynchronous file reading
fs.readFile("./hello.txt", "utf-8", (error, data) => {
    if (error) throw error;
    else{
        console.log(data);
    }
});
console.log("Hello This code will executes after file is read");