// ================= 1. BASIC CALCULATOR =================

class Calculator {

  add(a:number,b:number):number{
    return a+b;
  }

  subtract(a:number,b:number):number{
    return a-b;
  }

  multiply(a:number,b:number):number{
    return a*b;
  }

  divide(a:number,b:number):number{
    return a/b;
  }

  average(a:number,b:number):number{
    return (a+b)/2;
  }

  integerDivision(a:number,b:number):number{
    return Math.floor(a/b);
  }

  max(a:number,b:number):number{
    return Math.max(a,b);
  }

  min(a:number,b:number):number{
    return Math.min(a,b);
  }
}

const calc = new Calculator();

console.log("Add:", calc.add(10,5));
console.log("Subtract:", calc.subtract(10,5));
console.log("Multiply:", calc.multiply(10,5));
console.log("Divide:", calc.divide(10,5));
console.log("Average:", calc.average(10,5));
console.log("Integer Division:", calc.integerDivision(10,3));
console.log("Max:", calc.max(10,5));
console.log("Min:", calc.min(10,5));


// ================= 2. AREA =================

// Rectangle
function areaRectangle(length:number,width:number):number{
  return length * width;
}

// Circle
function areaCircle(radius:number):number{
  return Math.PI * radius * radius;
}

console.log("Rectangle Area:", areaRectangle(10,5));
console.log("Circle Area:", areaCircle(7));


// ================= 3. ODD OR EVEN =================

function checkOddEven(num:number):string{
  return num % 2 === 0 ? "Even" : "Odd";
}

console.log("Number is:", checkOddEven(7));


// ================= 4. SWAP VARIABLES =================

// Using third variable
let a:number = 10;
let b:number = 20;

let temp = a;
a = b;
b = temp;

console.log("Swap with temp:", a, b);


// Without third variable
let x:number = 5;
let y:number = 10;

x = x + y;
y = x - y;
x = x - y;

console.log("Swap without temp:", x, y);


// ================= 5. LEAP YEAR =================

function isLeapYear(year:number):boolean{
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log("Is Leap Year 2024:", isLeapYear(2024));
console.log("Is Leap Year 2023:", isLeapYear(2023));