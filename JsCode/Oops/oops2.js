// OBJECT LITERAL:

let tanvi = {
    firstName : "tanvi",
    lastName  : "patil",
    age       : 20,
    skills    : ["python","javascript","css","html"],
    city      : "pune",
    displayName(){
        console.log(this.firstName + this.lastName)
    }

}
console.log(tanvi)
console.log(tanvi.skills)
tanvi.skills.fill("cypress",0,1)
console.log(tanvi)
tanvi.displayName()

// CLASS:

class PersonA{
    firstName
    lastName
    age
    city
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let priya = new PersonA()
console.log(priya)

priya.firstName = "priya"
priya.lastName = "shelar"
priya.age = 20
priya.city = "nashik"
console.log(priya)
priya.displayName()


// CONSTRUCTURE:

class PersonB{
    constructor(fn,ln,ag,ct){
        this.firstName = fn
        this.lastName  = ln
        this.age       = ag
        this.city      = ct
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let babita = new PersonB("babita","jagtap",26,"SambhajiNagar")
console.log(babita)
babita.displayName()
console.log(babita.age)

// SET-FUNCTION:

class PersonC{
    setFirstName(fn){
        this.FirstName = fn
    }
    setLastName(ln){
        this.LastName = ln
    }
    setAge(ag){
        this.Age = ag
    }
    setCity(ct){
        this.City = ct
    }
    displayName(){
        console.log(this.FirstName + this.LastName)
    }
}
let dipali = new PersonC()
dipali.setFirstName("dipali")
dipali.setLastName("navale")
dipali.setAge(15)
dipali.setCity("ahmadnagar")
console.log(dipali)

dipali.displayName()

dipali.setCity('pune')
console.log(dipali)


// SET-GET:

class PersonD{
    set FirstName(fn){
        this.first_name = fn
    }
    get FirstName(){
        return this.first_name
    }

    set LastName(ln){
        this.last_name = ln
    }
    get LastName(){
        return this.last_name
    }

    set Age(ag){
        this.age = ag
    }
    get Age(){
        return this.age
    }

    set RollNo(rn){
        this.roll_no = rn
    }
    get RollNo(){
        return this.roll_no
    }
    displayName(){
        console.log(this.first_name + this.last_name)
    }
}

let dhanu = new PersonD()
console.log(dhanu)

dhanu.first_name = "dhanashri"
dhanu.last_name = "rahane"
dhanu.age = 10
dhanu.roll_no = 56
console.log(dhanu)
dhanu.displayName()




