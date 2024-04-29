
class Student{
    constructor(fn,ln){
        this.firstname = fn
        this.lastname  = ln
    }
    displayName(){
        console.log(this.firstname + this.lastname)
    }
}

class Teacher extends Student{
    salary = 200000
    displaySalary(){
        console.log(this.salary)
    }
}
let pooja = new Teacher("pooja","lokhande")
console.log(pooja)
console.log(pooja.lastname)
console.log(pooja.salary)
pooja.displayName()
pooja.displaySalary()