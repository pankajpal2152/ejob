/*any  */
var str: any = "Hello world";
console.log(str, typeof (str));
str = true; //allowed as str can have any datatype Objects.
console.log(str, typeof (str));

//console.log(str.toUpperCase()); as we can notices JS throws an error because here no type checking is available in any.

var str2: unknown = "Hii world";
console.log(str2, typeof (str2));
str2 = "false";
console.log(str2, typeof (str2));

//Data Checking Capability is there in unknown which improves more security over using any.
if (typeof (str2) == "string")
    console.log(str2.toUpperCase());
else
    console.log("Non String Data found !");


/*
  any means anything can be accepted by JavaScript without any typesafety checking 
  where unknown also do the same but it has capability to check the datatype before proceeding.
  So use of unknown is more recommended over any.
*/