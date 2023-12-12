"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//string
var greetings = "Hey Abinash!"; // we need to declare variables types in ts by> :string
console.log(greetings);
greetings.toLowercase(); // does not exist on type 'string'. Did you mean 'toLowerCase'
var myNum = 52;
myNum.toLowerCase(); //ts indicates that > 'toLowerCase' does not exist on type 'number'
//number
var age = 25;
age.toFixed();
//boolean> dont use :type for obhious things 
var isLoggedIn = false;
//any> lets you avoid type checking || noImplicitAny to avoid assinging any implicitly
var hero; // if you dont mention anything it will have any by default
function getHero() {
    return "Thor"; // if some one changes it to another type it will throw error
}
hero = getHero();
var names = ['luigi', 'mario', 'yoshi']; // we can only push the declared type which is a string
// names.push(5)
// names[0]=4
names[0] = "Hola Amigo";
var numbers = [10, 20, 12, 15]; // we can only push the declared type which is an array
numbers.push(20);
// numbers.push("string")
// numbers[1]= "flufy"
var mixed = ['ken', 4, 'chun-li', 8, 9]; //cant push true to an array of string and number
mixed.push("June");
mixed.push(54);
mixed[0] = 53;
// mixed.push(true)
// objects
var ninja = { name: 'mario', belt: 'black', age: 30 };
ninja.name = "Abinash";
// ninja.belt= 73
ninja.age = 28;
