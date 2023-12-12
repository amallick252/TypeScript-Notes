function addTwo(num) {
    return num + 2;
    // return "Hello"// if we dont use num, this will also work
}
var myNum = addTwo(5); // we can not pass "xyz" or boolean as the num type is already defined as number
//for functions it is cumpulsury to provide types as typescript can not infer the value automatically
function userData(name, email, isLoggedIn) {
    return "".concat(name, " has a good personality");
}
userData("abinash", "amallick@gmail.com", true);
function user(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    return "".concat(name, " is a paid custommer.");
}
user("abinash", "a@a.com");
//aerrow function
var myGreetings = function (name) {
    // return`Hi ${name}`
    return true;
    // return 35
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
    // return true
});
//void
function consoleError(errmsg) {
    console.log(errmsg);
}
