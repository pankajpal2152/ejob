/* =========================
   PRIMITIVE TYPES
========================= */
let isDone: boolean = true;
let age: number = 25;
let message: string = "TypeScript Rocks";

console.log(isDone, age, message);

/* =========================
   EXPLICIT vs IMPLICIT
========================= */
let firstNameExplicit: string = "Dylan";
let firstNameImplicit = "Dylan"; // inferred as string

console.log(firstNameExplicit, firstNameImplicit);

/* =========================
   SPECIAL TYPES
========================= */
let v: any = true;
v = "string";
v = 123;

let u: unknown = "hello";

let y: undefined = undefined;
let z: null = null;

/* =========================
   ARRAYS
========================= */
const names: string[] = [];
names.push("Dylan");

const readonlyNames: readonly string[] = ["Jack"];

/* =========================
   TYPE INFERENCE (ARRAY)
========================= */
const numbers = [1, 2, 3];
numbers.push(4);
let head: number = numbers[0];

/* =========================
   TUPLES
========================= */
let ourTuple: [number, boolean, string];
ourTuple = [5, false, "Coding God was here"];

const ourReadonlyTuple: readonly [number, boolean, string] = [
    5,
    true,
    "The Real Coding God",
];

const graph: [number, number] = [55.2, 41.3];
const [x, y2] = graph;

/* =========================
   OBJECT TYPES
========================= */
const car: { type: string; model: string; year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009,
};

const car2 = {
    type: "Toyota",
};
car2.type = "Ford";

/* =========================
   OPTIONAL PROPERTIES
========================= */
const car3: { type: string; mileage?: number } = {
    type: "Toyota",
};
car3.mileage = 2000;

/* =========================
   INDEX SIGNATURE
========================= */
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25;

/* =========================
   ENUMS
========================= */
enum CardinalDirections {
    North = 1,
    East,
    South,
    West,
}

console.log(CardinalDirections.North);
console.log(CardinalDirections.West);

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400,
}

console.log(StatusCodes.NotFound);

enum DirectionString {
    North = "North",
    East = "East",
    South = "South",
    West = "West",
}

console.log(DirectionString.North);

/* =========================
   TYPE ALIASES
========================= */
type CarYear = number;
type CarType = string;
type CarModel = string;

type CarAlias = {
    year: CarYear;
    type: CarType;
    model: CarModel;
};

const myCar: CarAlias = {
    year: 2001,
    type: "Toyota",
    model: "Corolla",
};

/* =========================
   INTERFACES
========================= */
interface RectangleShape {
    height: number;
    width: number;
}

interface ColoredRectangle extends RectangleShape {
    color: string;
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red",
};

/* =========================
   UNION TYPES
========================= */
function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}`);
}

printStatusCode(404);
printStatusCode("404");

/* =========================
   FUNCTIONS
========================= */
function getTime(): number {
    return new Date().getTime();
}

function printHello(): void {
    console.log("Hello!");
}

function multiply(a: number, b: number) {
    return a * b;
}

function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}

function addWithRest(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}

/* =========================
   CLASSES
========================= */
class Person {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person = new Person("Jane");
console.log(person.getName());

/* =========================
   IMPLEMENTS + INHERITANCE
========================= */
interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    public constructor(
        protected readonly width: number,
        protected readonly height: number
    ) { }

    public getArea(): number {
        return this.width * this.height;
    }

    public toString(): string {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}

class Square extends Rectangle {
    public constructor(width: number) {
        super(width, width);
    }

    public override toString(): string {
        return `Square[width=${this.width}]`;
    }
}

/* =========================
   ABSTRACT CLASSES
========================= */
abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
        return `Polygon[area=${this.getArea()}]`;
    }
}

class Rect extends Polygon {
    public constructor(
        protected readonly width: number,
        protected readonly height: number
    ) {
        super();
    }

    public getArea(): number {
        return this.width * this.height;
    }
}

const r = new Rect(10, 5);
console.log(r.toString());
