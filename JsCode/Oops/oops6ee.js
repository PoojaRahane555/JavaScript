// Object Literal:

let aaru = {
    first_name : "Aarvi",
    last_name : "Lokhande",
    age : 3,
    city : "Mumbai",
    display : function(){
        console.log(this.first_name + this.last_name)
    }
}
console.log(aaru)
aaru.display()
console.log(aaru.age)

let kanchan = {
    first_name : "Kanchan",
    last_name : "Khilari",
    age : 25,
    city : "Pune"
}
console.log(kanchan)
console.log(kanchan.age)


// Function Consructor:

function Person(fn,ln,ag,ct){
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.city = ct
    this.display = function(){
        console.log(this.firstName + this.lastName)
    }
}

let dipak = new Person("Dipak","Lokhande",30,"Panvel")
console.log(dipak)
dipak.display()
console.log(dipak.city)

function Vehicle(color,type){
    this.color = color
    this.type = type
    this.display=function(){
        console.log(this.color)
    }
}
let audi = new Vehicle("blue","sedane")
console.log(audi)
audi.display()
console.log(audi.type)

// Example:
class Bank {
    constructor(fullN,bal){
        this.fullName  = fullN
        this.bal = bal
        this.transaction = []
    }

    withDrawl(amt){
        if(this.bal > amt){
            this.bal = this.bal - amt 
            this.transaction.push(-amt)
            return this.bal
        }
        else {
            console.log('Insufficient fund')
        }
    }

    deposit(amt){
        this.bal = this.bal + amt
        this.transaction.push(amt)
        return this.bal
    }

    lastFiveTransaction(){
        return this.transaction.slice(-5)
    }   

}

let chinmayF  = new Bank("chinmay deshpande",10000000)
//chinmayF.withDrawl(10000000000000)
chinmayF.deposit(10000)
chinmayF.deposit(10000)
chinmayF.deposit(10000)
chinmayF.deposit(10000)
chinmayF.deposit(10000)
chinmayF.withDrawl(100)
chinmayF.withDrawl(100)
chinmayF.withDrawl(100)
chinmayF.withDrawl(100)
chinmayF.withDrawl(100)

console.log(chinmayF.lastFiveTransaction())