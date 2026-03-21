"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PalPrime_1 = require("./PalPrime");
var n = 131; // try 121,131,11,10
var obj = new PalPrime_1.default();
var isPrime = obj.checkPrime(n);
var isPal = obj.checkPal(n);
console.log("Number:", n);
console.log("Is Prime?", isPrime);
console.log("Is Palindrome?", isPal);
if (isPrime && isPal) {
    console.log(n + " is a PalPrime number.");
}
else {
    console.log(n + " is NOT a PalPrime number.");
}
