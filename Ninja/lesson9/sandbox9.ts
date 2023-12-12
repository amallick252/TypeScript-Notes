// Lesson9- type Aliases

let myFunc= (uId:string | number, pass:number)=>{
    console.log(`${uId}'s password is ${pass}`)
}
myFunc("Rinku", 253 )

type user= string| number//using type aliases
let myFunc2= (uId:user, pass:number)=>{
    console.log(`${uId}'s password is ${pass}`)
}
myFunc2("Thanku", 553 )
myFunc2(333333, 553 )

//==============================//

let mainFunc= (userDetails:{uId:user, pass:number})=>{
    console.log(`${userDetails.uId}'s password is ${userDetails.pass}`)
}
const details={uId:"Abinash", pass:35}
mainFunc(details)


type objWithDetails= {uId:user, pass:number}//using type aliases(reduces codes)
let mainFunc2= (userDetails:objWithDetails)=>{
    console.log(`${userDetails.uId}'s password is ${userDetails.pass}`)
}
const details2={uId:"Rinku", pass:25}
mainFunc2(details2)

