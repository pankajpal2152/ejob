/*
Custom Type Creation in TypeScript
*/

// ================= BASE TYPE =================

type User = {
    id: number;
    name: string;
    age?: number; // Optional
    readonly gender?: string; // Readonly+optional
};

// ================= BASE TYPE =================
const user1: User = {
    id: 101,
    name: "Alice",
};

const user2: User = {
    id: 102,
    name: "Bob",
    age: 25
};

const user3: User = {
    id: 103,
    name: "Charlie",
    gender: "Male"
};

// ================= USER OBJECTS =================

console.log("User1:", user1);
console.log("User2:", user2);
console.log("User3:", user3);

// ================= UPDATE =================
// ✔ Allowed (optional property)
user3.age = 33;

// ❌ Not allowed (readonly property)
// user3.gender = "Male"; // ERROR

console.log("Updated User3:", user3);

// ================= FUNCTION USING TYPE =================

function printUser(user: User): void {
    console.log(`User -> ID: ${user.id}, Name:${user.name}`);
}

printUser(user1);
printUser(user2);

// ================= EXTENDED TYPE =================

type Admin = User & {
    role: string;
};

const admin1: Admin = {
    id: 201,
    name: "Admin Alice",
    role: "Super Admin",
    age: 30
};

console.log("Admin1:", admin1);

// ================= ARRAY OF USERS =================

const users: User[] = [user1, user2, user3];

console.log("All Users:", users);

// ================= LOOP THROUGH USERS =================
users.forEach(u);