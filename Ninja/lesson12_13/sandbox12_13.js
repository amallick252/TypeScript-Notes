// Lesson15- Interface
var abinash = {
    name: "Abinash",
    age: 30,
    speak: function (text) {
        console.log("I am, ".concat(text));
    },
    spend: function (amount) {
        console.log(amount);
        return amount;
    }
};
var sonali; //declare a variable of person type, later you can have the variable with the properties which has to match the interface
var greetPerson = function (anyperson) {
    console.log("Hello", abinash.name);
};
greetPerson({ name: "abinash" }); // the object passed needs to match the anyPerson type, mentioned above
