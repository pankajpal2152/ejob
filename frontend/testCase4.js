/*
TypeScript Utility Types Demo
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userObj = {
    name: "John"
};
var userObj2 = {
    id: 111,
    name: "Diana",
    gender: "Female"
};
console.log("Required:", userObj2);
var userObj3 = {
    id: 2222,
    name: "Bruce",
    gender: "Male"
};
// ❌ Not allowed (readonly properties)
// userObj3.name = "Clark"; // ERROR
console.log("Readonly:", userObj3);
var userObj4 = {
    name: "Clark"
};
console.log("Pick:", userObj4);
var userObj5 = {
    id: 555,
    name: "Diana"
};
console.log("Omit:", userObj5);
var roles = {
    admin: "Has full access",
    editor: "Can edit content",
    viewer: "Can view content"
};
console.log("Record:", roles);
// ================= EXTRA DEMO =================
// Using Partial for update scenarios
function updateUser(user, updates) {
    return __assign(__assign({}, user), updates);
}
var originalUser = {
    id: 101,
    name: "Alice",
    gender: "Female"
};
var updatedUser = updateUser(originalUser, { name: "Alicia" });
console.log("Updated User:", updatedUser);
