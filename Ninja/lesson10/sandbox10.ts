// Lesson10- function signeture

//example-1
let greet:(a:string, b:string)=>void;// actual variable names can be different then the func signeture

greet= (name:string, password:string)=>{
 console.log(`${name} has pass:${password}`)
}

//example-2
let calc:(a:number, b:number, c:string)=>number;//func signeture
calc= (num1:number, num2:number, action:string)=>{
    if(action==="add"){
        console.log(num1+num2)
        return num1+num2
    }else{
        console.log(num1-num2)
        return num1-num2
    }
}
calc(9,7, "add")

//example-3
let logDetails:(user:{name:string, age:number})=>void;
type uName= {name:string, age:number}
logDetails=(tUser:uName)=>{
    console.log(`${tUser.name} is just ${tUser.age}`)
}
const sonali= {name:"sonali",age:28}
logDetails(sonali)