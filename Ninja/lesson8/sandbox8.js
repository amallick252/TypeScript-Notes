// Lesson8- Function
var greet;
greet = function () {
    console.log("this is a function");
};
greet();
// great;
// great="text content"
var newGreet = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
newGreet(1, 3, "abinash"); //pass the optional parameters at the end
//if we dont return & dont exlplicitly mention the return type it will be void type
var minus = function (a, b) {
    console.log(a + b);
    return a - b;
};
var result = minus(20, 7); //TS autometically infers the value as number, when hovered
// result= "Hello There!"// we cant change the result to string
