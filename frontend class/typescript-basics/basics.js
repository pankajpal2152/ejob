var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* =========================
   PRIMITIVE TYPES
========================= */
var isDone = true;
var age = 25;
var message = "TypeScript Rocks";
console.log(isDone, age, message);
/* =========================
   EXPLICIT vs IMPLICIT
========================= */
var firstNameExplicit = "Dylan";
var firstNameImplicit = "Dylan"; // inferred as string
console.log(firstNameExplicit, firstNameImplicit);
/* =========================
   SPECIAL TYPES
========================= */
var v = true;
v = "string";
v = 123;
var u = "hello";
var y = undefined;
var z = null;
/* =========================
   ARRAYS
========================= */
var names = [];
names.push("Dylan");
var readonlyNames = ["Jack"];
/* =========================
   TYPE INFERENCE (ARRAY)
========================= */
var numbers = [1, 2, 3];
numbers.push(4);
var head = numbers[0];
/* =========================
   TUPLES
========================= */
var ourTuple;
ourTuple = [5, false, "Coding God was here"];
var ourReadonlyTuple = [
    5,
    true,
    "The Real Coding God",
];
var graph = [55.2, 41.3];
var x = graph[0], y2 = graph[1];
/* =========================
   OBJECT TYPES
========================= */
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009,
};
var car2 = {
    type: "Toyota",
};
car2.type = "Ford";
/* =========================
   OPTIONAL PROPERTIES
========================= */
var car3 = {
    type: "Toyota",
};
car3.mileage = 2000;
/* =========================
   INDEX SIGNATURE
========================= */
var nameAgeMap = {};
nameAgeMap.Jack = 25;
/* =========================
   ENUMS
========================= */
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
console.log(CardinalDirections.North);
console.log(CardinalDirections.West);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
var DirectionString;
(function (DirectionString) {
    DirectionString["North"] = "North";
    DirectionString["East"] = "East";
    DirectionString["South"] = "South";
    DirectionString["West"] = "West";
})(DirectionString || (DirectionString = {}));
console.log(DirectionString.North);
var myCar = {
    year: 2001,
    type: "Toyota",
    model: "Corolla",
};
var coloredRectangle = {
    height: 20,
    width: 10,
    color: "red",
};
/* =========================
   UNION TYPES
========================= */
function printStatusCode(code) {
    console.log("My status code is ".concat(code));
}
printStatusCode(404);
printStatusCode("404");
/* =========================
   FUNCTIONS
========================= */
function getTime() {
    return new Date().getTime();
}
function printHello() {
    console.log("Hello!");
}
function multiply(a, b) {
    return a * b;
}
function add(a, b, c) {
    return a + b + (c || 0);
}
function addWithRest(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
/* =========================
   CLASSES
========================= */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Jane");
console.log(person.getName());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.toString = function () {
        return "Rectangle[width=".concat(this.width, ", height=").concat(this.height, "]");
    };
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        return _super.call(this, width, width) || this;
    }
    Square.prototype.toString = function () {
        return "Square[width=".concat(this.width, "]");
    };
    return Square;
}(Rectangle));
/* =========================
   ABSTRACT CLASSES
========================= */
var Polygon = /** @class */ (function () {
    function Polygon() {
    }
    Polygon.prototype.toString = function () {
        return "Polygon[area=".concat(this.getArea(), "]");
    };
    return Polygon;
}());
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rect.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rect;
}(Polygon));
var r = new Rect(10, 5);
console.log(r.toString());
