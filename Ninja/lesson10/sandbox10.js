// Lesson10- function signeture
//example-1
var greet; // actual variable names can be different then the func signeture
greet = function (name, password) {
    console.log("".concat(name, " has pass:").concat(password));
};
//example-2
var calc; //func signeture
calc = function (num1, num2, action) {
    if (action === "add") {
        console.log(num1 + num2);
        return num1 + num2;
    }
    else {
        console.log(num1 - num2);
        return num1 - num2;
    }
};
calc(9, 7, "add");
//example-3
var logDetails;
logDetails = function (tUser) {
    console.log("".concat(tUser.name, " is just ").concat(tUser.age));
};
var sonali = { name: "sonali", age: 28 };
logDetails(sonali);
