
// ================= WITHOUT SHORTHAND =================

class PersonTraditional {

  private firstName: string;
  private lastName: string;
  private gender: string;
  private sal: number;

  constructor(firstName: string, lastName: string, gender: string, sal: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.sal = sal;
  }

  getPerson() {
    return {
      name: this.firstName + " " + this.lastName,
      gender: this.gender,
      sal: this.sal
    };
  }
}

const p1 = new PersonTraditional("John", "Doe", "Male", 12000);
console.log("Traditional:", p1.getPerson());


// ================= WITH SHORTHAND =================

class PersonShorthand {

  constructor(
    private firstName: string,
    private lastName: string,
    private gender: string,
    private sal: number
  ) {}

  getPerson() {
    return {
      name: this.firstName + " " + this.lastName,
      gender: this.gender,
      sal: this.sal
    };
  }
}

const p2 = new PersonShorthand("Diana", "Smith", "Female", 15000);
console.log("Shorthand:", p2.getPerson());


// ================= GETTER & SETTER =================

class Employee {

  constructor(private name: string, private salary: number) {}

  // Getter
  get getSalary(): number {
    return this.salary;
  }

  // Setter
  set setSalary(newSalary: number) {
    if (newSalary > 0) {
      this.salary = newSalary;
    } else {
      console.log("Invalid Salary!");
    }
  }

  getDetails() {
    return {
      name: this.name,
      salary: this.salary
    };
  }
}

const emp = new Employee("Alex", 20000);

console.log("Before Update:", emp.getDetails());

// Using setter
emp.setSalary = 25000;

console.log("After Update:", emp.getDetails());


// ================= ENCAPSULATION DEMO =================

// ❌ This will give error (private)
// console.log(emp.salary);

// ✔ Access through getter
console.log("Salary via Getter:", emp.getSalary);
