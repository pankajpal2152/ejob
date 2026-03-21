// ================= PARENT CLASS =================
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // protected → accessible in child class
    function Person(firstName, lastName, gender, sal) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.sal = sal;
    }
    // optional method
    Person.prototype.getPersonInfo = function () {
        return {
            name: this.firstName + " " + this.lastName,
            gender: this.gender,
            sal: this.sal
        };
    };
    return Person;
}());
// ================= CHILD CLASS =================
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(empCode, dept, firstName, lastName, gender, sal) {
        // call parent constructor
        var _this = _super.call(this, firstName, lastName, gender, sal) || this;
        _this.empCode = empCode;
        _this.dept = dept;
        return _this;
    }
    Employee.prototype.getEmpDetails = function () {
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
    };
    return Employee;
}(Person));
// ================= OBJECT CREATION =================
var emp1 = new Employee(101, "HR", "John", "Doe", "Male", 31000);
var emp2 = new Employee(102, "Operations", "Diana", "Smith", "Female", 23000);
var emp3 = new Employee(103, "IT", "Rahul", "Kumar", "Male", 45000);
// ================= OUTPUT =================
// individual
console.log("Employee 1:", emp1.getEmpDetails());
console.log("Employee 2:", emp2.getEmpDetails());
console.log("Employee 3:", emp3.getEmpDetails());
// array of employees
var allEmployees = [
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
