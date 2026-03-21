// ================= PARENT CLASS =================

class Person {

    // protected → accessible in child class
    constructor(
        protected firstName: string,
        protected lastName: string,
        protected gender: string,
        protected sal: number
    ) { }

    // optional method
    getPersonInfo() {
        return {
            name: this.firstName + " " + this.lastName,
            gender: this.gender,
            sal: this.sal
        };
    }
}


// ================= CHILD CLASS =================

class Employee extends Person {

    constructor(
        private empCode: number,
        private dept: string,
        firstName: string,
        lastName: string,
        gender: string,
        sal: number
    ) {
        // call parent constructor
        super(firstName, lastName, gender, sal);
    }

    getEmpDetails() {
        return {
            personalInfo: {
                name: this.firstName + " " + this.lastName,
                gender: this.gender,
                sal: this.sal
            },
            empInfo: {
                empCode: this.empCode,
                dept: this.dept
            }
        };
    }
}


// ================= OBJECT CREATION =================

let emp1 = new Employee(101, "HR", "John", "Doe", "Male", 31000);
let emp2 = new Employee(102, "Operations", "Diana", "Smith", "Female", 23000);
let emp3 = new Employee(103, "IT", "Rahul", "Kumar", "Male", 45000);


// ================= OUTPUT =================

// individual
console.log("Employee 1:", emp1.getEmpDetails());
console.log("Employee 2:", emp2.getEmpDetails());
console.log("Employee 3:", emp3.getEmpDetails());

// array of employees
let allEmployees = [
    emp1.getEmpDetails(),
    emp2.getEmpDetails(),
    emp3.getEmpDetails()
];

console.log("All Employees:", allEmployees);


// ================= EXTRA DEMO =================

// accessing parent method
console.log("Person Info (emp1):", emp1.getPersonInfo());


// ================= NOTE =================
// ❌ Cannot access private directly
// console.log(emp1.empCode); // ERROR

// ❌ Cannot access protected outside class
// console.log(emp1.firstName); // ERROR