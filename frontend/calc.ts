function add(x: number, y: number): number {
    return x + y;
}
console.log("Sum=" + add(12, 23));

var isValidate: boolean = true;
//isValidate = "Hello";//Error as isValidate is a Boolean Typed Object.
console.log(isValidate);

var a: number = 10;
var b: number = 20;
var c = a * b;
console.log(c);
/*FAQ State the difference between any vs unknown datatype */
var s: any = "Hello world";
console.log(s, typeof (s));
s = 10;
console.log(s, typeof (s))
s = true;
console.log(s, typeof (s));
