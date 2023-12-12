// Lesson6- any type

let age:any = 25;// use of any is not a good practice
age = 43
age= "ten"
age= true

let mixed6: any[]=[];
mixed6.push(23)
mixed6.push("twenty")
mixed6.push(true)
console.log(mixed6)

let person: {name: any, age: any}
person={name: "Abinash", age: 23}
console.log(person)
person={name: 25, age: "Rinku"}
console.log(person)