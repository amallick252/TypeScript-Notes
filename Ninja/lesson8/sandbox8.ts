// Lesson8- Function

let greet: Function;
greet=()=>{
    console.log(`this is a function`)
}
greet();
// great;
// great="text content"

let newGreet= (a:number, b:number, c:number|string= 10)=>{//c? to make it optional(with value undefined) default value 10
    console.log(a+b)
    console.log(c)
}
newGreet(1,3,"abinash")//pass the optional parameters at the end
//if we dont return & dont exlplicitly mention the return type it will be void type

let minus=(a:number, b:number):number=>{
    console.log(a+b)
    return a-b
}
let result = minus(20,7);//TS autometically infers the value as number, when hovered
// result= "Hello There!"// as it infers the value as number, we cant change the result to string



