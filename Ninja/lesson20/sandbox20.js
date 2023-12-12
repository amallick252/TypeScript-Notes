// Lesson20- tuples
//Tupels are typed arrays with predefined lenght and types for each index
var arr = ["Abinash", 28, false];
arr[0] = 25;
arr = [28, false, "Abinash"]; //arrays are flexible
console.log(arr);
var tupArr; // defile tuple explicitly
tupArr = ["rinku", 30, true];
tupArr[0] = "Amazing rinku";
// tupArr[0]= 20
// tupArr[1]=true
tupArr.push("Omm");
console.log(tupArr);
var tupArr2; //good practice to make tuples readonly
