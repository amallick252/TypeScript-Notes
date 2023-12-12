// Lesson5- Explicit types
var charecter5 = "abinash";
var age5 = 31;
var isLoggedIn = true;
//string
charecter5 = "Rinku";
// charecter5=35;
//number
age5 = 26;
// age5 = "26";
// age5 = "hello";
// Boolean
isLoggedIn = false;
// isLoggedIn= "yes";
// isLoggedIn = 1;
//Array
var arr5 = [];
arr5.push("mouse", "cat");
arr5.push("dog");
// arr5.push(true)
// arr5.push(23)
console.log(arr5);
var numArr5 = [];
numArr5.push(34, 43);
// numArr5.push(true)
// numArr5.push("Rinku")
console.log(numArr5);
// union types
var mixed5 = [];
mixed5.push("abinash");
mixed5.push(31);
mixed5.push(true);
console.log(mixed5);
var uid = false;
uid = "Abinash";
uid = true;
// uid= 32
console.log(uid);
// Objects> if we define an object type, the value we decare must be an object
var obj;
obj = { name: "sadhu", age: 32, isPaid: true };
obj = []; //array is an object type
// obj = "cat"
//more specific object delcaration(we can not add or skip any property, it has to follow the specified types)
var obj2;
obj2 = {
    name: "Abinash",
    age: 31,
    // course:"typescript",
};
// obj2={
//     name:"Abinash", 
// }
obj2.name = "rinku";
// obj2.name= 23
