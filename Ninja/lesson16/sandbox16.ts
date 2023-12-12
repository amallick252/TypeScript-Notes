// Lesson16- use interface with class

//Interface
interface myInterface{

    format(): string;
    // format:(name:string, age:number)=>string;
}

//Classes 
class Person implements myInterface{//person must have the varibles and method of myInterface, if it impliments this interface
    name:string; age:number;
    constructor(name:string, age:number){
        this.name= name;
        this.age= age;
    }
    format=()=>{
        console.log(`${this.name} is just ${this.age}`)
        return `${this.name} is just ${this.age}`
    }
}
const rinku = new Person("Abinash", 23)
rinku.format()
// console.log(typeof myInterface)//undefined

interface Buyer{
    format2():string;
}
class Person2 implements myInterface{
    name:string;
    age:number;
    constructor(name:string, age:number){
        this.name=name,
        this.age= age;
    }
    format(): string {
        console.log( `Hey ${this.name} you are just ${this.age}`)
        return `Hey ${this.name} you are just ${this.age}`
    }
}
const omm =new Person2("Omm",6)
omm.format()

let king:myInterface;
let queen:myInterface;

king= new Person("Raja", 32)//crete new instances of class king
queen= new Person("Rani", 30)

let interArr: myInterface[]=[]//make an array of myInterface type of objects
interArr.push(king)
interArr.push(queen)
console.log(interArr)
king.format()
queen.format()
