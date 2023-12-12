// Lesson18-19- Generics & Enums
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//generics
var addId = function (obj) {
    var uId = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uId: uId });
};
var abinash = addId({ name: "abinash", age: 29 });
console.log(abinash.name); //by default ts doesnot know about other properties except for uId
console.log(abinash.age);
var addId2 = function (obj) {
    var uId = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uId: uId });
};
var rinku = addId2({ name: "rinku", age: 29 });
console.log(rinku.name); //now it knows about the properties rinku object has
var rinku2 = addId2("rinku"); //but if doesnot know wheathet it should be an object or any thing else
var addId3 = function (obj) {
    var uId = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uId: uId });
};
var user1 = {
    name: "Abinash",
    mType: "platinum",
    cartItems: [{ potato: 2 }, { tomato: 3 }]
};
var user2 = {
    name: "Sonali",
    mType: "gold",
    cartItems: { chiku: "1kg", mango: "2kg", apple: "3kg" }
};
// console.log(user1, user2)
// eNums
var memberType;
(function (memberType) {
    memberType[memberType["diamond"] = 0] = "diamond";
    memberType[memberType["gold"] = 1] = "gold";
    memberType[memberType["platinum"] = 2] = "platinum";
    memberType[memberType["silver"] = 3] = "silver";
    memberType[memberType["bronze"] = 4] = "bronze";
})(memberType || (memberType = {}));
var user10 = {
    name: "Abinash",
    mType: memberType.platinum,
    cartItems: [{ potato: 2 }, { tomato: 3 }]
};
var user11 = {
    name: "Sonali",
    mType: memberType.diamond,
    cartItems: { chiku: "1kg", mango: "2kg", apple: "3kg" }
};
console.log(user10, user11);
