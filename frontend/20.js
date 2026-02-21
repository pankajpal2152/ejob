const employees = [
    { empid: 1001, name: 'John', sal: 12000, doj: '02-12-2021' },
    { empid: 1002, name: 'Diana', sal: 21000, doj: '08-18-2020' },
    { empid: 1003, name: 'Dean', sal: 22000, doj: '12-12-2022' },
    { empid: 1004, name: 'Joe', sal: 14000, doj: '09-09-2020' }
];

//Ascending

const salAsc = [...employees].sort((a, b) => a.sal - b.sal);
console.log("Salary Ascending:", salAsc);

//Descending

const salDesc = [...employees].sort((a, b) => b.sal - a.sal);
console.log("Salary Descending:", salDesc);

//Task 2: Third Highest Salary

const thirdHighest = [...employees]
    .sort((a, b) => b.sal - a.sal)[2];

console.log("Third Highest Salary:", thirdHighest);

//Task 3: Calculate total work experience (in years)

function getExperience(doj) {
    const joinDate = new Date(doj);
    const today = new Date();
    return Math.floor((today - joinDate) / (1000 * 60 * 60 * 24 * 365));
}

const empWithExp = employees.map(emp => ({
    ...emp,
    experience: getExperience(emp.doj)
}));

console.log("Employees with Experience:", empWithExp);

// Task 4: Employees working >= 2 yrs and <= 5 yrs

const exp2to5 = empWithExp.filter(
    emp => emp.experience >= 2 && emp.experience <= 5
);

console.log("Experience between 2 to 5 years:", exp2to5);

// Task 5: Employees NOT working between 2–5 yrs

const not2to5 = empWithExp.filter(
    emp => emp.experience < 2 || emp.experience > 5
);

console.log("Experience NOT between 2 to 5 years:", not2to5);

// Task 6: Employees whose name begins with 'J'

const nameStartsWithJ = employees.filter(
    emp => emp.name.toLowerCase().startsWith('j')
);

console.log("Names starting with J:", nameStartsWithJ);

//Task 7: Total, Average, Min & Max Salary

const salaries = employees.map(emp => emp.sal);

let totalSal = 0;
for (let sal of salaries) {
    totalSal += sal;
}

const avgSal = totalSal / salaries.length;
const minSal = Math.min(...salaries);
const maxSal = Math.max(...salaries);

console.log("Total Salary:", totalSal);
console.log("Average Salary:", avgSal);
console.log("Minimum Salary:", minSal);
console.log("Maximum Salary:", maxSal);