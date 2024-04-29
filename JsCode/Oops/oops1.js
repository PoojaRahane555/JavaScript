// program 1: OBJECT LITERAL:

let yogi = {
    first_name: "Yogi",
    last_name: "Kumar",
    age: 50,
    rollNo: 1
}
//console.log(yogi)

let shradha = {
    first_name: "Shradha",
    last_name: "Dayma",
    age: 30,
    rollNo: 11
}
//console.log(shradha)
// 1 obj => 4 lines => 100 - 400 lines ==>best way template

let aarvi = {
    firstname: "aarvi",
    lastname: "lokhande",
    age: 2,
    city: "mumbai",
    displayName: function () {
        console.log(this.firstname + this.lastname)
    }
}
console.log(aarvi)
console.log(aarvi.age)
aarvi.displayName()

let kanvi = {
    firstname: "kanvi",
    lastname: "lokhande",
    age: 3,
    city: "mumbai",
    displayName: function () {
        console.log(this.firstname + this.lastname)
    }
}
kanvi.displayName()
console.log(kanvi.city)
kanvi.age = 2.5
console.log(kanvi)

// 1)Es6 class:
// user defined datatype

class Person {
    firstname
    lastname
    age
    city
    displayName() {
        console.log(this.firstname + this.lastname)
    }
}
let pooja = new Person()
console.log(pooja)
pooja.firstname = "pooja"
pooja.lastname = "lokhande"
pooja.age = 25
pooja.city = "panvel"
console.log(pooja)
pooja.displayName()

// 
class Person {
    firstName
    lastName
    age
    rollNo
}
let sayali = new Person()
console.log(sayali)

sayali.firstName = "Sayali"
sayali.lastName = "Jogi"
sayali.age = 5
sayali.rollNo = 6
console.log(sayali)

// retrive,add,update,delete : 4 operation can do with dot notation and bracket notation
// retrive:
console.log(sayali.firstName)
console.log(sayali['firstName'])

// add:
sayali.city = "Mumbai"
sayali['language'] = "Hindi"
console.log(sayali)

// update:
sayali.city = "Nagpur"
sayali['language'] = "English"
console.log(sayali)

// delete:
delete sayali.city
delete sayali['language']
console.log(sayali)
// setting the value outside ==> extra lines ==> solution -constructor

// program 2 : CONSTRUCTURE

class Person2 {
    constructor(fn, ln, ag, ct) {
        this.firstname = fn
        this.lastname = ln
        this.age = ag
        this.city = ct
    }
    displayName() {
        console.log(this.firstname + this.lastname)
    }
}
let kanchan = new Person2("kanchan", "khilari", 22, "pune")
console.log(kanchan)
kanchan.displayName()
kanchan.city = "banglore"
console.log(kanchan)

// 3) Set and Get method:

class PersonB {
    setfirstName(fn){
        this.first_name = fn
    }
    getfirstName(){
        console.log(this.first_name)
    }

    setlastName(ln){
        this.last_name = ln
    }
    getlastName(){
        console.log(this.last_name)
    }

    setAge(ag){
        this.age = ag
    }
    getAge(){
        console.log(this.age)
    }

    setRollNo(rn){
        this.rollNo = rn
    }
    getRollNo(){
        console.log(this.rollNo)
    }
}
let aaru = new PersonB()
console.log(aaru)

// setting the value
aaru.setfirstName('aarvi')
aaru.setlastName('lokhande')
aaru.setAge(3)
aaru.setRollNo(5)
console.log(aaru)

// retrive:
aaru.getAge()
aaru.getRollNo()
aaru.getfirstName()
aaru.getlastName()

// 4 set and get (property)

class PersonC{
    set firstName(fn){
        this.first_name = fn
    }
    get firstName(){
        return this.first_name
    }

    set lastName(ln){
        this.last_name = ln
    }
    get lastName(){
        return this.last_name
    }

    set Age(ag){
        this.age = ag
    }
    get Age(){
        return this.age
    }

    set RollNo(rn){
        this.rollNo = rn
    }
    get RollNo(){
        return this.rollNo
    }
}
let rashmi = new PersonC()
console.log(rashmi)

rashmi.firstName = "Rashmi"
rashmi.lastName = "shinde"
rashmi.Age = 55
rashmi.RollNo = 6
console.log(rashmi)





