// ================= WITHOUT SHORTHAND =================
var PersonTraditional = /** @class */ (function () {
    function PersonTraditional(firstName, lastName, gender, sal) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.sal = sal;
    }
    PersonTraditional.prototype.getPerson = function () {
        return {
            name: this.firstName + " " + this.lastName,
            gender: this.gender,
            sal: this.sal
        };
    };
    return PersonTraditional;
}());
var p1 = new PersonTraditional("John", "Doe", "Male", 12000);
console.log("Traditional:", p1.getPerson());
// ================= WITH SHORTHAND =================
var PersonShorthand = /** @class */ (function () {
    function PersonShorthand(firstName, lastName, gender, sal) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.sal = sal;
    }
    PersonShorthand.prototype.getPerson = function () {
        return {
            name: this.firstName + " " + this.lastName,
            gender: this.gender,
            sal: this.sal
        };
    };
    return PersonShorthand;
}());
var p2 = new PersonShorthand("Diana", "Smith", "Female", 15000);
console.log("Shorthand:", p2.getPerson());
// ================= GETTER & SETTER =================
var Employee = /** @class */ (function () {
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Object.defineProperty(Employee.prototype, "getSalary", {
        // Getter
        get: function () {
            return this.salary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "setSalary", {
        // Setter
        set: function (newSalary) {
            if (newSalary > 0) {
                this.salary = newSalary;
            }
            else {
                console.log("Invalid Salary!");
            }
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.getDetails = function () {
        return {
            name: this.name,
            salary: this.salary
        };
    };
    return Employee;
}());
var emp = new Employee("Alex", 20000);
console.log("Before Update:", emp.getDetails());
// Using setter
emp.setSalary = 25000;
console.log("After Update:", emp.getDetails());
// ================= ENCAPSULATION DEMO =================
// ❌ This will give error (private)
// console.log(emp.salary);
// ✔ Access through getter
console.log("Salary via Getter:", emp.getSalary);
