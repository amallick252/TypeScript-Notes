// Lesson16- use interface with class
//Classes 
var Person = /** @class */ (function () {
    function Person(name, age) {
        var _this = this;
        this.format = function () {
            console.log("".concat(_this.name, " is just ").concat(_this.age));
            return "".concat(_this.name, " is just ").concat(_this.age);
        };
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var rinku = new Person("Abinash", 23);
rinku.format();
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.name = name,
            this.age = age;
    }
    Person2.prototype.format = function () {
        console.log("Hey ".concat(this.name, " you are just ").concat(this.age));
        return "Hey ".concat(this.name, " you are just ").concat(this.age);
    };
    return Person2;
}());
var omm = new Person2("Omm", 6);
omm.format();
var king;
var queen;
king = new Person("Raja", 32); //crete new instances of class king
queen = new Person("Rani", 30);
var interArr = []; //make an array of myInterface type of objects
interArr.push(king);
interArr.push(queen);
console.log(interArr);
king.format();
queen.format();
