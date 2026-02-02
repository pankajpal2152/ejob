"use strict";

var users = [{
  id: 1,
  name: "John",
  sal: 23000,
  doj: "12-12-2022",
  // mm-dd-yyyy
  department: "IT",
  skills: ["JavaScript", "React"],
  isActive: true
}, {
  id: 2,
  name: "Diana",
  sal: 12000,
  doj: "10-09-2021",
  department: "HR",
  skills: ["Recruitment", "Communication"],
  isActive: false
}, {
  id: 3,
  name: "Russel",
  sal: 17000,
  doj: "12-12-2020",
  department: "Finance",
  skills: ["Accounting", "Excel"],
  isActive: true
}, {
  id: 4,
  name: "Rahul",
  sal: 11000,
  doj: "09-03-2024",
  department: "IT",
  skills: ["HTML", "CSS", "JavaScript"],
  isActive: true
}, {
  id: 5,
  name: "Joe",
  sal: 31000,
  doj: "07-09-2021",
  department: "Management",
  skills: ["Leadership", "Planning"],
  isActive: false
}]; //First IT user with salary > 20000

var task1 = users.find(function (u) {
  return u.department === "IT" && u.sal > 20000;
});
console.log(task1); //Active users with salary < 15000

var task2 = users.filter(function (u) {
  return u.isActive && u.sal < 15000;
});
console.log(task2); //New array with name, department, yearlySalary

var task3 = users.map(function (u) {
  return {
    name: u.name,
    department: u.department,
    yearlySalary: u.sal * 12
  };
});
console.log(task3); //Total salary of IT department

var task4 = users.reduce(function (total, u) {
  return u.department === "IT" ? total + u.sal : total;
}, 0);
console.log(task4); //Names of users with JavaScript skill

var task5 = users.filter(function (u) {
  return u.skills.includes("JavaScript");
}).map(function (u) {
  return u.name;
});
console.log(task5); //Highest salary

var task6 = users.reduce(function (max, u) {
  return u.sal > max ? u.sal : max;
}, 0);
console.log(task6); //Users who joined after 2021

var task7 = users.filter(function (u) {
  var year = new Date(u.doj).getFullYear();
  return year > 2021;
});
console.log(task7); //Group users count by department

var task8 = users.reduce(function (obj, u) {
  obj[u.department] = (obj[u.department] || 0) + 1;
  return obj;
}, {});
console.log(task8);
//# sourceMappingURL=data.dev.js.map
