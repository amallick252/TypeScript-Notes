// Lesson18-19- Generics & Enums

//generics
const addId = (obj:object)=>{
    let uId= Math.floor(Math.random()*100)
    return {...obj,uId}
}
const abinash = addId({name:"abinash",age:29})
console.log(abinash.name)//by default ts doesnot know about other properties except for uId
console.log(abinash.age)

const addId2 = <T>(obj: T)=>{
    let uId= Math.floor(Math.random()*100)
    return {...obj,uId}
}
const rinku = addId2({name:"rinku",age:29})
console.log(rinku.name)//now it knows about the properties rinku object has

const rinku2 = addId2("rinku")//but if doesnot know wheathet it should be an object or any thing else

const addId3 = <T extends object>(obj: T)=>{//now it is expecting object, you can be more specific here eg: <T extends {name:string, age:number}>
    let uId= Math.floor(Math.random()*100)
    return {...obj,uId}
}

//with Interfaces--------------------
interface grosory<T>{// T could be anyType that we want to pass when we want to create an object with this interface
    name:string;
    mType: string;
    cartItems:T;
}

const user1: grosory<object[]>={
    name:"Abinash",
    mType: "platinum",
    cartItems:[{potato:2}, {tomato:3}]
}

const user2: grosory<object> ={
    name:"Sonali",
    mType:"gold",
    cartItems:{chiku:"1kg", mango:"2kg", apple:"3kg"}
}
// console.log(user1, user2)

// eNums

enum memberType {diamond, gold, platinum, silver, bronze}

interface Shopper<T>{
    name:string;
    mType: memberType;
    cartItems:T;
}

const user10: Shopper<object[]>={
    name:"Abinash",
    mType: memberType.platinum,
    cartItems:[{potato:2}, {tomato:3}]
}

const user11: Shopper<object> ={
    name:"Sonali",
    mType:memberType.diamond,
    cartItems:{chiku:"1kg", mango:"2kg", apple:"3kg"}
}
console.log(user10, user11)
