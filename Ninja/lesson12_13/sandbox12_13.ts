// Lesson12_13- ts classes, getter, setter and Access modifies(readonly, private, public)

//Classes in TypeScript
class userC{
    name:string;
    email: string;
    password:string;

    constructor(name:string, email:string,password:string){
        this.name= name;
        this.email= email;
        this.password= password;
    }
    get getPassword(){
        console.log( this.password.toUpperCase())
        return this.password.toUpperCase()
    }

    hideEmail(){
        console.log(this.email.replace(".", "*"))
    }
}

const Abinash = new userC("Abinash", "abc@123.com", "hola@amigo")
Abinash.getPassword
Abinash.hideEmail()

// class extends making a child class from class
class Animal{
    name:string;
    constructor(name:string){
        this.name= name
    }
    speak(){
        console.log(`${this.name} can speak`)
    }
}
class dog extends Animal{
    name: string;
    bread:string;
    constructor(name:string, bread:string){
        super(name);
        this.bread= bread;
    }
    sound(){
        console.log(`${this.name} is a ${this.bread}!`)
    }
}
const myDog= new dog('fluffy','chiwawa')
console.log(dog.name)
// console.log(myDog.name)
myDog.speak()
myDog.sound()
// console.log(myDog.bread)

const cat = new Animal("cat")
console.log(cat.name)
console.log(cat.speak())

// Public, private, readonly
class Product{
    public type:string;
    readonly color:string;
    private sku:string;
    constructor(type:string, color:string, sku: string){
        this.type= type,
        this.color= color,
        this.sku= sku
    }

    property(){
        console.log(`the ${this.type} is ${this.color}, with sku: ${this.sku}`)
    }

    get getSku(){
        console.log(`${this.sku}252`)
        return `${this.sku}252`
    }

    set setSku(sku){
        this.sku= `${sku}${this.type}`
        // console.log(this.sku)
    }
}
const furniture= new Product("Chair", "red", "ch123")
const Table= new Product("table", "oak white", "tb123")

// Table.setSku = "tb43"
Table.getSku
console.log(furniture.type)//Public:can be accesses within the class and outside the class
console.log(furniture.color)//readonly can be accessed but cant be modified(even within the class function), once it is set
console.log(furniture.sku)// private can be only accessed within the class, instances and external codes can't access it directly(can be assessed through classes's function though)

furniture.type = "amba"
console.log(`"ftype"`,furniture.type)
furniture.color = "panasa"//readonly
console.log(`"ftype"`,furniture.color)
furniture.sku = "kadali"//private
console.log(`"ftype"`,furniture.sku)

furniture.property()

//short hand style(if access modifies are used)

class ProductWithModifiers{
    constructor(public type:string, readonly color:string, private sku: string){
         // No need to explicitly assign here
    }
}