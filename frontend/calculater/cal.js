// ================= 1. BASIC CALCULATOR =================
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        return a / b;
    };
    Calculator.prototype.average = function (a, b) {
        return (a + b) / 2;
    };
    Calculator.prototype.integerDivision = function (a, b) {
        return Math.floor(a / b);
    };
    Calculator.prototype.max = function (a, b) {
        return Math.max(a, b);
    };
    Calculator.prototype.min = function (a, b) {
        return Math.min(a, b);
    };
    return Calculator;
}());
var calc = new Calculator();
console.log("Add:", calc.add(10, 5));
console.log("Subtract:", calc.subtract(10, 5));
console.log("Multiply:", calc.multiply(10, 5));
console.log("Divide:", calc.divide(10, 5));
console.log("Average:", calc.average(10, 5));
console.log("Integer Division:", calc.integerDivision(10, 3));
console.log("Max:", calc.max(10, 5));
console.log("Min:", calc.min(10, 5));
// ================= 2. AREA =================
// Rectangle
function areaRectangle(length, width) {
    return length * width;
}
// Circle
function areaCircle(radius) {
    return Math.PI * radius * radius;
}
console.log("Rectangle Area:", areaRectangle(10, 5));
console.log("Circle Area:", areaCircle(7));
// ================= 3. ODD OR EVEN =================
function checkOddEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log("Number is:", checkOddEven(7));
// ================= 4. SWAP VARIABLES =================
// Using third variable
var a = 10;
var b = 20;
var temp = a;
a = b;
b = temp;
console.log("Swap with temp:", a, b);
// Without third variable
var x = 5;
var y = 10;
x = x + y;
y = x - y;
x = x - y;
console.log("Swap without temp:", x, y);
// ================= 5. LEAP YEAR =================
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Is Leap Year 2024:", isLeapYear(2024));
console.log("Is Leap Year 2023:", isLeapYear(2023));
