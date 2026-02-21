const fs =require('fs');
console.log("reading file synchronously");
let data =fs.readFileSync("./hello.txt","utf-8");
console.log(data);
console.log("This block will not get executed until the file is read completely");