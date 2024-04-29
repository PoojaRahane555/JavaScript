//OBJECT:

let info1 = {
    firstname : "pooja",
    lastname  : "rahane",
    age       : 20,
    city      : "yeola"
}

let info2 = {
    firstname : "pooja",
    lastname  : "lokhande",
    age       : 25,
    city      : "mumbai"
}

// how to create object:
// 1) by using class:

class Person{
    firstname;
    lastname;
    age;
    city;
}
let amolC = new Person()

amolC.firstname = "aarvi"
amolC.lastname = "lokhande"
amolC.age = 2
amolC.city = "panvel"
console.log(amolC)

// 2) by using constructor:

class PersonA {
    constructor(fn,ln,rollNo,age){
        this.firstname = fn,
        this.lastname = ln,
        this.rollNo = rollNo
        this.age = age
    }
}
let kanchan = new PersonA("kanchan","khilari",65,22)
let dipak   = new PersonA("dipak","lokhande",56,29)
console.log(kanchan)
console.log(dipak)

kanchan.city = "pune"
dipak.language = "hindi"
console.log(kanchan)
console.log(dipak)