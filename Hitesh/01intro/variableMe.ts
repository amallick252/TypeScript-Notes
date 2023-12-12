//string
let greetings: string= "Hey Abinash!";// we need to declare variables types in ts by> :string
console.log(greetings); 
greetings.toLowercase()// does not exist on type 'string'. Did you mean 'toLowerCase'

let myNum= 52
myNum.toLowerCase()//ts indicates that > 'toLowerCase' does not exist on type 'number'

//number
let age = 25;
age.toFixed()

//boolean> dont use :type for obhious things 
let isLoggedIn= false;

//any> lets you avoid type checking || noImplicitAny to avoid assinging any implicitly

let hero:string;// if you dont mention anything it will have any by default

function getHero(){
    return "Thor"// if some one changes it to another type it will throw error
}

hero= getHero()

let names = ['luigi', 'mario', 'yoshi'];// we can only push the declared type which is a string
// names.push(5)
// names[0]=4
names[0]="Hola Amigo"

let numbers= [10, 20, 12, 15];// we can only push the declared type which is an array
numbers.push(20)
// numbers.push("string")
// numbers[1]= "flufy"

let mixed= ['ken', 4, 'chun-li', 8, 9];//cant push true to an array of string and number
mixed.push("June")
mixed.push(54)
mixed[0]=53
// mixed.push(true)

// objects
let ninja = {name: 'mario', belt: 'black', age: 30};// once the object is defined it must have the original propertys and type
ninja.name= "Abinash"
// ninja.belt= 73
ninja.age= 28
// ninja.skills = "fighting"

ninja = {name: 'mario', belt: 'black', age: 30
// height:6.1// can not add aditional property
}



export {}