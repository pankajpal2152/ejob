/*
Difference between Interface and Type in TypeScript
*/

// ================= INTERFACE MERGING =================

// ✔ Interface supports declaration merging

interface Employee {
    empCode: number;
}

interface Employee {
    empDept: string;
    empName: string;
}

const emp1: Employee = {
    empCode: 1001,
    empName: "John",
    empDept: "IT"
};

console.log("Employee1:", emp1);

// ================= TYPE REDECLARATION(NOT ALLOWED) =================
// ❌ This will give error
/*
type Employee={
empCode: number;
}

type Employee2={
name: string;
}
*/

// ================= UNION TYPE =================
// ✔ Only possible using type

type Status = "success" | "error" | "pending"

const message: Status = "success"; // Allowed
console.log("Message Status:", message);

// ================= INTERSECTION TYPE =================

type A = {
    x: number;
}
type B = {
    y: number;
}

type C = A & B; // Intersection of A and B

const value: C = {
    x: 100,
    y: 200
};

console.log("Intersection:", value);

// ================= EXTENDING INTERFACE =================

interface A1 {
    X1: number;
}

interface B1 extends A1 {
    Y1: number;
}

const value2: B1 = {
    X1: 1000,
    Y1: 2000
};

console.log("Extended Interface:", value2);

// ================= TYPE WITH PRIMITIVES =================

// ✔ Type can be used with primitives

type ID = number | string;
let userId: ID;
userId = 101;
console.log("UserID (number):", userId);

userId = "A101";
console.log("UserID (string):", userId);

// ================= INTERFACE LIMITATION =================

// ❌ Interface cannot do this
/*
interface Test = string | number; // ERROR
*/


// ================= SUMMARY OUTPUT =================

console.log("---- SUMMARY ----");
console.log("Interface → merging + object structure");
console.log("Type → unions, intersections, primitives");