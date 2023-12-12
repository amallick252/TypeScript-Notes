function addTwo(num:number):number{
    return num + 2
    // return "Hello"// if we dont use num, this will also work
}

const myNum = addTwo(5)// we can not pass "xyz" or boolean as the num type is already defined as number

//for functions it is cumpulsury to provide types as typescript can not infer the value automatically

function userData(name:string, email:string, isLoggedIn:boolean){
    return `${name} has a good personality`
}
userData("abinash", "amallick@gmail.com", true)

function user(name:string, email:string, isPaid:boolean= true){// passing default value for isPaid
    return`${name} is a paid custommer.`
}
user("abinash", "a@a.com")

//aerrow function
let myGreetings=(name:string):boolean =>{// this ensures that what ever is being returned is a boolean
    // return`Hi ${name}`
    return true
    // return 35
}



const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

heros.map((hero):string => {
 return `hero is ${hero}`
// return true
})

//void
function consoleError(errmsg:string):void{
    console.log(errmsg);
}

//never
function handleError(errMsg: string): never{
    throw new Error(errMsg);
}