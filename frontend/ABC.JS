var numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 1010];
let firstOdd = numbers.find((x) => (x % 2 != 0));
console.log(firstOdd);

var firstEven = numbers.find((x) => (x % 2 == 0));
console.log(firstEven);

let allOdds = numbers.filter((x) => (x % 2 != 0));
console.log(allOdds);

let allEvens = numbers.filter((x) => (x % 2 == 0));
console.log(allEvens);

let newArr = numbers.map((x) => (x * 2));
console.log(...newArr);

var users = [
    { id: 1, name: "Alice", sal: 23000 },
    { id: 2, name: "Bob", sal: 12000 },
    { id: 3, name: "Charlie", sal: 17000 },
    { id: 1, name: "John", sal: 23000 },
    { id: 2, name: "Diana", sal: 12000 },
    { id: 3, name: "Russel", sal: 17000 }
]

let myUser = users.filter((user) => (user.sal > 15000 && user.sal < 25000));
console.log(myUser);

let myUser2 = users.filter((user) => !(user.sal > 15000 && user.sal < 20000));
console.log(myUser2);

let myUser3 = users.filter((user) => (user.name.startsWith('D') || user.name.startsWith('R')));
console.log(myUser3);

let myUser4 = users.filter((user) => (user.name.endsWith('e') || user.name.endsWith('t')));
console.log(myUser4);

let myUser5 = users.filter((user) => (user.name.toLowerCase().includes('a')));
console.log(myUser5);             