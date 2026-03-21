/* 
Nested Custom Interfaces in TypeScript
*/

// ================= BASE INTERFACE =================

interface Address {
    state: string;
    city: string;
    pinCode: number;
}

interface skills {
    languages: string[];
    qualifications: string[];
}

interface Person {
    id: number;
    name: string;
    age?: number; // Optional
    readonly gender?: string; // Readonly+optional
    address: Address; // Nested Interface
    skills: skills; // Nested Interface
}

// ================= OBJECT1 =================

const person1: Person = {
    id: 1003,
    name: "Pankaj",
    gender: "Male",
    address: {
        state: "WB",
        city: "Kolkata",
        pinCode: 712235,
    },
    skills: {
        languages: ["English", "Hindi"],
        qualifications: ["B.Tech", "M.Tech"],
    },
};

// ================= OBJECT2 =================

const person2: Person = {
    id: 1004,
    name: "Suman",
    age: 28,
    address: {
        state: "WB",
        city: "Kolkata",
        pinCode: 712235,
    },
    skills: {
        languages: ["English", "Bengali"],
        qualifications: ["B.Sc", "M.Sc"],
    },
};

// ================= DISPLAY =================
console.log("Person1:", person1);
console.log("Person2:", person2);

// ================= ACCESS NESTED DATA =================

console.log("City:", person1.address.city);
console.log("First Language:", person1.skills.languages[0]);

// ================= UPDATE =================
// ✔ Allowed
person1.address.city = "Durgapur";

// ❌ Not allowed (readonly property)
// person1.gender = "MALE"; // ERROR
console.log("Updated Person1:", person1);

// ================= ARRAY OF PERSONS =================

const persons: Person[] = [person1, person2];

console.log("All Persons:", persons);

// ================= LOOP =================
persons.forEach((p) => {
    console.log(`
        ID: ${p.id},
        Name: ${p.name},
        City: ${p.address.city}
        Skills: ${p.skills.languages.join(", ")}
    `);
});

// ================= FUNCTION USING INTERFACE =================
function printPersonDetails(p: Person): void {
    console.log(`
        ---- Person Details ----
        Name: ${p.name}
        State: ${p.address.state}
        City: ${p.address.city}
        Languages: ${p.skills.languages.join(", ")}
    }`);
}

printPersonDetails(person1);
printPersonDetails(person2);