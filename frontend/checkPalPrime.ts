import PalPrime from "./PalPrime";
let n=131; // try 121,131,11,10
let obj = new PalPrime();
let isPrime = obj.checkPrime(n);
let isPal = obj.checkPal(n);

console.log("Number:", n);
console.log("Is Prime?", isPrime);
console.log("Is Palindrome?", isPal);

if (isPrime && isPal) {
    console.log(n + " is a PalPrime number.");
} else {
    console.log(n + " is NOT a PalPrime number.");
}