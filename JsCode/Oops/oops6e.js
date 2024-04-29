// Inheritance:
// we can access all the property and method from parent to child reference variable
// class Student{
//     firstName = "Aarvi"
//     lastName = "Lokhande"
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher extends Student{
//     salary = 500000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }
// let geeta = new Student()
// console.log(geeta)

// let geeta2 = new Teacher()
// console.log(geeta2)

// console.log(geeta.firstName)
// console.log(geeta.lastName)
// geeta.displayName()

// console.log(geeta2.firstName)
// console.log(geeta2.lastName)
// console.log(geeta2.salary)
// geeta2.displaySalary()

// single level inheritance:

class Student{
    constructor(fn,ln,adharNo){
        this.firstName = fn
        this.lastName = ln
        this.adharNo = adharNo
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class Teacher extends Student{
    constructor(fn,ln,adharNo,salary){
        super(fn,ln,adharNo)
        this.salary = salary
    }
    displaySalary(){
        console.log(this.salary)
    }
}

let santa = new Student("Santosh","Jadhav",1234)
console.log(santa)
console.log(santa.firstName)
console.log(santa.lastName)
console.log(santa.adharNo)
santa.displayName()

let santosh = new Teacher("Santosh","Jadhav",1234,5000000)
console.log(santosh)
console.log(santosh.firstName)
console.log(santosh.lastName)
console.log(santosh.adharNo)
console.log(santosh.salary)
santosh.displayName()
santosh.displaySalary()


// Multi-level Inheritance:

class GrandFather{
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayGname(){
        console.log(this.firstName + this.lastName)
    }
}

class Father extends GrandFather{
    constructor(fn,ln,ffn){
        super(fn,ln)
        this.fname = ffn
    }
    displayFname(){
        console.log(this.fname + this.lastName)
    }  
}

class Son extends Father{
    constructor(fn,ln,ffn,sfn){
        super(fn,ln,ffn)
        this.sname = sfn
    }
    displaySname(){
        console.log(this.sname  + this.lastName)
    }
}

let dipak = new Son("Pandharinatha","Lokhande","Dipak","Aviraj")
console.log(dipak)

dipak.displayGname()
dipak.displayFname()
dipak.displaySname()

console.log(dipak.firstName)
console.log(dipak.lastName)
console.log(dipak.fname)
console.log(dipak.sname)

// Hierarchical Inheritance:

class Mother{
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayMname(){
        console.log(this.firstName + this.lastName)
    }
}


class Son2 extends Mother{
    constructor(fn,ln,sfn){
        super(fn,ln)
        this.sname = sfn
    }
    displaySname(){
        console.log(this.sname + this.lastName)
    }
}
let aviraj = new Son2("Pooja","Lokhande","Aviraj")
console.log(aviraj)

aviraj.displayMname()
aviraj.displaySname()
console.log(aviraj.firstName)
console.log(aviraj.lastName)
console.log(aviraj.sname)

class Daughter extends Mother{
    constructor(fn,ln,dfn){
        super(fn,ln)
        this.dname = dfn
    }
    displayDname(){
        console.log(this.dname + this.lastName)
    }
}
let kanvi = new Daughter("Pooja","Lokhande","Kanvi")
console.log(kanvi)

kanvi.displayMname()
kanvi.displayDname()

console.log(kanvi.firstName)
console.log(kanvi.lastName)
console.log(kanvi.dname)

