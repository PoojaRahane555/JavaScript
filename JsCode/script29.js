// object literal:

let data1 = {
    firstname: "aarvi",
    lastname: "lokhande",
    age: 2,
    city: "mumbai"
}
console.log(data1)


let data2 = {
    firstname: "kanchan",
    lastname: "khilari",
    age: 22,
    city: "pune"
}
console.log(data2)

// in both object properties are same only values changes
// thats why class are used for to create object

// 1) by using class==>> setting outside

class PersonA {
    firstname
    lastname
    age
    city
}
let ram1 = new PersonA()
console.log(ram1)

ram1.firstname = "ram"
ram1.lastname = "dalvi"
ram1.age = 54
ram1.city = "nashik"
console.log(ram1)

// 2) by using constructor:

class PersonB {
    constructor(fn, ln, ag, rollno, lang) {

        this.firstname = fn
        this.lastname = ln
        this.age = ag
        this.rollNo = rollno
        this.language = lang
    }
}
let shyam2 = new PersonB()
console.log(shyam2)

shyam2.firstname = "shyam"
shyam2.lastname = "rahane"
shyam2.age = 20
shyam2.rollNo = 65
shyam2.language = "english"
console.log(shyam2)

// by using function:

class PersonC{
    setFirstName(fn){
        this.FirstName = fn
    }
    setLastName(ln){
        this.Lastname = ln
    }
    setAge(ag){
        this.Age = ag
    }
    setCity(city){
        this.City = city
    }
}
let vinaya3 = new PersonC
console.log(vinaya3)

vinaya3.setFirstName("vinaya")
vinaya3.setLastName("kate")
vinaya3.setAge(28)
vinaya3.setCity("latur")
console.log(vinaya3)
