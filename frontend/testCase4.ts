/*
TypeScript Utility Types Demo
*/

type User = {
    id: number;
    name: string;
    gender: string;
};

// ================= PARTIAL =================

// ✔ Makes all properties optional

type UpdatedUser = Partial<User>;
const userObj: UpdatedUser = {
    name:"John"
};

// ================= REQUIRED =================

// ✔ Makes all properties required

type RequiredUser = Required<UpdatedUser>;
const userObj2:RequiredUser={
    id:111,
    name:"Diana",
    gender:"Female"
};

console.log("Required:", userObj2);

// ================= READONLY =================

// ✔ Makes all properties readonly

type ReadonlyUser = Readonly<User>;

const userObj3:ReadonlyUser={
    id:2222,
    name:"Bruce",
    gender:"Male"
};

// ❌ Not allowed (readonly properties)
// userObj3.name = "Clark"; // ERROR

console.log("Readonly:", userObj3);

// ================= PICK =================

// ✔ Picks specified properties

type PickUser = Pick<User, "name">;

const userObj4:PickUser={
    name:"Clark"
};

console.log("Pick:", userObj4);

// ================= OMIT =================

// ✔ Omits specified properties

type OmitUser = Omit<User, "gender">;

const userObj5:OmitUser={
    id:555,
    name:"Diana"
};

console.log("Omit:", userObj5);

// ================= RECORD =================

type UserRole = "admin" | "editor" | "viewer";

const roles:Record<UserRole, string>={
    admin:"Has full access",
    editor:"Can edit content",
    viewer:"Can view content"
}

console.log("Record:", roles);

// ================= EXTRA DEMO =================
// Using Partial for update scenarios
function updateUser(user: User, updates: Partial<User>):User{
    return{...user,...updates};
}

const originalUser:User={
    id:101,
    name:"Alice",
    gender:"Female"
};

const updatedUser=updateUser(originalUser,{name:"Alicia"});
console.log("Updated User:", updatedUser);