// Single-Inheritance:

class Student {
    constructor(fn, ln, ag) {
        this.firstname = fn
        this.lastname = ln
        this.age = ag
    }
    displayName() {
        console.log(this.firstname + this.lastname)
    }
}

class Teacher extends Student {
    constructor(fn, ln, ag, salary) {
        super(fn, ln, ag)
        this.salary = salary
    }
    displaySalary() {
        console.log(this.salary)
    }
}
let santosh = new Teacher("santosh", 'jadhav', 55, 50000)
console.log(santosh)
console.log(santosh.age)
console.log(santosh.salary)
santosh.displayName()
santosh.displaySalary()

// Multi-level Inheritance:

class Grandfather {
    constructor(fn, ln) {
        this.firstname = fn
        this.lastname = ln
    }
    displayGname() {
        console.log(this.firstname + this.lastname)
    }
}

class Father extends Grandfather {
    constructor(fn, ln, ffn) {
        super(fn, ln)
        this.ffirstname = ffn
    }
    displayFname() {
        console.log(this.ffirstname + this.lastname)
    }
}

class Son extends Father {
    constructor(fn, ln, ffn, sfn) {
        super(fn, ln, ffn)
        this.sfirstname = sfn
    }
    displaySname() {
        console.log(this.sfirstname + this.lastname)
    }
}
let dipak = new Son("radhaji", "lokhande", "pandharinatha", "dipak")
console.log(dipak)
dipak.displayGname()
dipak.displayFname()
dipak.displaySname()


class Mother {
    constructor(fn,ln,ct) {
        this.firstname = fn
        this.lastname = ln
        this.city = ct
    }
    displayMname(){
        console.log(this.firstname + this.lastname)
    }
}

class Son2 extends Mother{
    constructor(fn,ln,ct,sfn){
        super(fn,ln,ct)
        this.sfirstname = sfn
    }
    displaySname(){
        console.log(this.sfirstname + this.lastname)
    }
}

class Daughter extends Mother{
    constructor(fn,ln,ct,dfn){
        super(fn,ln,ct)
        this.dfirstname = dfn
    }
    displayDname(){
        console.log(this.dfirstname + this.lastname)
    }
}

let akshay = new Son2("kanchan","kolhe","pune","akshay")
console.log(akshay)
console.log(akshay.city)
akshay.displayMname()
akshay.displaySname()

let tanvi = new Daughter("kanchan","kolhe","pune","tanvi")
console.log(tanvi)
console.log(tanvi.city)
tanvi.displayMname()
tanvi.displayDname()


