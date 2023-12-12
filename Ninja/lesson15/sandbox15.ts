// Lesson15- Interface

interface person{
    name: string,
    age: number,
    speak:(a:string)=>void,
    spend:(b:number)=>number,
}

const abinash:person = {// we can make multiple objects of type person with interface
    name:"Abinash",
    age:30,
    speak: (text:string)=>{
        console.log(`I am, ${text}`)
    },
    spend:(amount:number)=>{
        console.log(amount)
        return amount
    }

}
let sonali:person;//declare a variable of person type, later you can have the variable with the properties which has to match the interface

let greetPerson=(anyperson:person)=>{// we can later pass anyPerson wich matches the person  interface
    console.log("Hello", abinash.name)
}

greetPerson({name:"abinash"})// the object passed needs to match the anyPerson type, mentioned above