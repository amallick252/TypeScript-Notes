// Lesson20- tuples
//Tupels are typed arrays with predefined lenght and types for each index

let arr = ["Abinash", 28, false]
arr[0]=25
arr = [28, false, "Abinash"]//arrays are flexible
console.log(arr)

let  tupArr: [string, number, boolean];// defile tuple explicitly
tupArr=["rinku", 30, true]
tupArr[0]= "Amazing rinku"
// tupArr[0]= 20
// tupArr[1]=true
tupArr.push("Omm")
console.log(tupArr)

let  tupArr2: readonly [string, number, boolean];//good practice to make tuples readonly

