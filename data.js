var users = [
    {
        id: 1,
        name: "John",
        sal: 23000,
        doj: "12-12-2022", // mm-dd-yyyy
        department: "IT",
        skills: ["JavaScript", "React"],
        isActive: true
    },
    {
        id: 2,
        name: "Diana",
        sal: 12000,
        doj: "10-09-2021",
        department: "HR",
        skills: ["Recruitment", "Communication"],
        isActive: false
    },
    {
        id: 3,
        name: "Russel",
        sal: 17000,
        doj: "12-12-2020",
        department: "Finance",
        skills: ["Accounting", "Excel"],
        isActive: true
    },
    {
        id: 4,
        name: "Rahul",
        sal: 11000,
        doj: "09-03-2024",
        department: "IT",
        skills: ["HTML", "CSS", "JavaScript"],
        isActive: true
    },
    {
        id: 5,
        name: "Joe",
        sal: 31000,
        doj: "07-09-2021",
        department: "Management",
        skills: ["Leadership", "Planning"],
        isActive: false
    }
];


//First IT user with salary > 20000

const task1 = users.find(
    u => u.department === "IT" && u.sal > 20000
);
console.log(task1);


//Active users with salary < 15000

const task2 = users.filter(
    u => u.isActive && u.sal < 15000
);
console.log(task2);


//New array with name, department, yearlySalary

const task3 = users.map(u => ({
    name: u.name,
    department: u.department,
    yearlySalary: u.sal * 12
}));
console.log(task3);


//Total salary of IT department

const task4 = users.reduce((total, u) => {
    return u.department === "IT" ? total + u.sal : total;
}, 0);
console.log(task4);


//Names of users with JavaScript skill

const task5 = users
    .filter(u => u.skills.includes("JavaScript"))
    .map(u => u.name);

console.log(task5);



//Highest salary

const task6 = users.reduce((max, u) => {
    return u.sal > max ? u.sal : max;
}, 0);

console.log(task6);


//Users who joined after 2021

const task7 = users.filter(u => {
    const year = new Date(u.doj).getFullYear();
    return year > 2021;
});
console.log(task7);


//Group users count by department

const task8 = users.reduce((obj, u) => {
    obj[u.department] = (obj[u.department] || 0) + 1;
    return obj;
}, {});

console.log(task8);