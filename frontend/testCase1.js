/*
Custom Type Creation in TypeScript
*/
// ================= BASE TYPE =================
var user1 = {
    id: 101,
    name: "Alice",
};
var user2 = {
    id: 102,
    name: "Bob",
    age: 25
};
var user3 = {
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
function printUser(user) {
    console.log("User -> ID: ".concat(user.id, ", Name:").concat(user.name));
}
printUser(user1);
printUser(user2);
var admin1 = {
    id: 201,
    name: "Admin Alice",
    role: "Super Admin",
    age: 30
};
console.log("Admin1:", admin1);
// ================= ARRAY OF USERS =================
var users = [user1, user2, user3];
console.log("All Users:", users);
// ================= LOOP THROUGH USERS =================
users.forEach(function (u) {
    console.log("ID: ".concat(u.id, ", Name: ").concat(u.name));
});
