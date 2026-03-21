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
//TypeScript ShortHand Data Member declration
var Person = /** @class */ (function () {
    //DataMember
    //private datamember are not accessible outside of the class by objects
    //Data Hide --> encapsulation.
    //if we make it public then we can access within the class as well as outside of the class.
    //we can't inherit private datamember
    //public can be inerited and can be accessed outside of the class.
    //protected can be inherited but not accessible outside of the class.
    //parameterized constructor
    //the function which gets called automatically while creating object of that class.
    function Person(firstName, lastName, gender, sal) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.sal = sal;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(empCode, dept, fname, lname, gen, sal1) {
        var _this = _super.call(this, fname, lname, gen, sal1) || this; //super class constructor.
        _this.empCode = empCode;
        _this.dept = dept;
        _this.fname = fname;
        _this.lname = lname;
        _this.gen = gen;
        _this.sal1 = sal1;
        return _this;
    }
    Employee.prototype.getEmp = function () {
        return {
            personalInfo: {
                name: this.firstName + " " + this.lastName,
                gender: this.gen,
                sal: this.sal1,
            },
            empInfo: {
                empCode: this.empCode,
                dept: this.dept
            }
        };
    };
    return Employee;
}(Person));
var emp1 = new Employee(101, "HR", "John", "Doe", "Male", 31000);
var emp2 = new Employee(102, "Operations", "Diana", "Doe", "Female", 23000);
var eObj = emp1.getEmp();
var eObj2 = emp2.getEmp();
var allEmp = [eObj, eObj2];
console.log(allEmp);
