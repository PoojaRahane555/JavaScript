// INHERITANCE:

class Student{
    firstname = "pooja"
    lastname  = "dalavi"
    adharNo = 666555
    displayName(){
        console.log(this.firstname + this.lastname)
    }
}
let pooja = new Student()
console.log(pooja)
console.log(pooja.firstname)
console.log(pooja.lastname)
console.log(pooja.adharNo)
pooja.displayName()

class Teacher{
    firstname = "pooja"
    lastname  = "dalvi"
    adharNo = 666555
    salary = 50000
    displayName(){
        console.log(this.firstname + this.lastname)
    }
    displaySalary(){
        console.log(this.salary)
    }
}
let pooja2 = new Teacher()
console.log(pooja2)

console.log(pooja2.adharNo)
pooja2.displayName()
pooja2.displaySalary()

// program 2:

class Student2{
    firstname = "om"
    lastname  = "rahane"
    adharNo   = 565656
    displayName(){
        console.log(this.firstname + this.lastname)
    }
}
let om = new Student2()
console.log(om)
om.displayName()

class Teacher2 extends Student2{
    salary = 65000
    displaySalary(){
        console.log(this.salary)
    }
}
// let om2 = new Teacher2()
// console.log(om2)
// om2.displayName()
// om2.displaySalary()

// program 3:

class Student3{
    constructor(fn,ln,an){
        this.firstname = fn
        this.lastname  = ln
        this.adharNo = an
    }
    displayName(){
        console.log(this.firstname + this.lastname)
    }
}

class Teacher3 extends Student3{
    salary = 100000
    displaySalary(){
        console.log(this.salary)
    }
}

let sai = new Teacher3("sai","rahane",222333)
console.log(sai)
console.log(sai.firstname)
console.log(sai.lastname)
sai.displayName()
//sai.displaySalary()
console.log(sai.adharNo)
console.log(sai.salary)




