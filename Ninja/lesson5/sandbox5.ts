// Lesson5- Explicit types
let charecter5= "abinash";
let age5 = 31;
let isLoggedIn= true;

//string
charecter5= "Rinku";
// charecter5=35;

//number
age5 = 26;
// age5 = "26";
// age5 = "hello";

// Boolean
isLoggedIn= false;
// isLoggedIn= "yes";
// isLoggedIn = 1;

//Array
let arr5: string[]= [];
arr5.push("mouse", "cat")
arr5.push("dog")
// arr5.push(true)
// arr5.push(23)
console.log(arr5)

let numArr5: number[]=[];
numArr5.push(34, 43)
// numArr5.push(true)
// numArr5.push("Rinku")
console.log(numArr5)

// union types
let mixed5: (string|number|boolean)[]=[]
mixed5.push("abinash")
mixed5.push(31)
mixed5.push(true)
console.log(mixed5)

let uid: string|boolean=false
uid= "Abinash"
uid= true
// uid= 32
console.log(uid)

// Objects> if we define an object type, the value we decare must be an object
let obj: object;
obj = {name: "sadhu", age: 32, isPaid: true};
obj =[]//array is an object type
// obj = "cat"


//more specific object delcaration(we can not add or skip any property, it has to follow the specified types)
let obj2:{
    name:string
    age: number
}
obj2={
    name:"Abinash", 
    age: 31,
    // course:"typescript",
}
// obj2={
//     name:"Abinash", 
// }
obj2.name= "rinku"
// obj2.name= 23

