//TypeScript ShortHand Data Member declration
class Person {
   //DataMember
   //private datamember are not accessible outside of the class by objects
   //Data Hide --> encapsulation.
   //if we make it public then we can access within the class as well as outside of the class.
   //we can't inherit private datamember
   //public can be inerited and can be accessed outside of the class.
   //protected can be inherited but not accessible outside of the class.


   //parameterized constructor
   //the function which gets called automatically while creating object of that class.
   constructor(protected firstName: string,
      protected lastName: string,
      protected gender: string,
      protected sal: number) { }



}
class Employee extends Person {
   constructor(private empCode: number, private dept: string, private fname: string, private lname: string, private gen: string, private sal1: number) {
      super(fname, lname, gen, sal1);//super class constructor.
   }

   getEmp() {
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
      }
   }

}


let emp1 = new Employee(101, "HR", "John", "Doe", "Male", 31000);
let emp2 = new Employee(102, "Operations", "Diana", "Doe", "Female", 23000);
let eObj = emp1.getEmp();
let eObj2 = emp2.getEmp();
let allEmp = [eObj, eObj2];
console.log(allEmp);