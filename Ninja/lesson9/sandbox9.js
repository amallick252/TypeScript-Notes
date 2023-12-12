// Lesson9- type Aliases
var myFunc = function (uId, pass) {
    console.log("".concat(uId, "'s password is ").concat(pass));
};
myFunc("Rinku", 253);
var myFunc2 = function (uId, pass) {
    console.log("".concat(uId, "'s password is ").concat(pass));
};
myFunc2("Thanku", 553);
myFunc2(333333, 553);
//==============================//
var mainFunc = function (userDetails) {
    console.log("".concat(userDetails.uId, "'s password is ").concat(userDetails.pass));
};
var details = { uId: "Abinash", pass: 35 };
mainFunc(details);
var mainFunc2 = function (userDetails) {
    console.log("".concat(userDetails.uId, "'s password is ").concat(userDetails.pass));
};
var details2 = { uId: "Rinku", pass: 25 };
mainFunc2(details2);
