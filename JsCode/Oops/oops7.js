// Polymorphism:
// 1) Overloading :
// same class,same method name ,different signature


class Calculator{
    addition(a,b){
        console.log(a+b)
    }
    addition(a,b,c){
        console.log(a+b+c)
    }
    addition(a,b,c,d){
        console.log(a+b+c+d)
    }
}

let abcd = new Calculator()
abcd.addition(10,20)
abcd.addition(10,20,30)
abcd.addition(10,20,30,40)

class Calculator2{
    additionA(l,m,n,o){
        if(l != undefined && m != undefined && n != undefined && o != undefined){
            console.log(l+m+n+o)
        }
        else if(l != undefined && m != undefined && n != undefined){
            console.log(l+m+n)
        }
        else if(l != undefined && m != undefined){
            console.log(l+m)
        }
    }
    
}
let lmno = new Calculator2()
console.log(lmno)
lmno.additionA(10,20)
lmno.additionA(10,20,30)
lmno.additionA(10,20,30,40)

// 2) Overriding :
// different class, same method , same signature 

class WorlBank{
    save(){
        console.log(" I am save from worldbank")
    }
    loan(){
        console.log(" I am loan from worldbank")
    }
}

let world = new WorlBank()
console.log(world)
world.save()
world.loan()

class SBI extends WorlBank{
    displayBranch(){
        console.log("mumbai branch")
    }
    save(){
        console.log(" I am save from sbi")
    }
    loan(){
        console.log(" I am loan from sbi")
    }
}
let sbi = new SBI()
console.log(sbi)
sbi.displayBranch()
sbi.save()
sbi.loan()

class PNB extends WorlBank{
    displayBranch(){
        console.log(" pune branch")
    }
    save(){
        console.log(" I am save from pnb")
    }
    loan(){
        console.log(" I am loan from pnb")
    }
}
let pnb = new PNB()
console.log(pnb)
pnb.displayBranch()
pnb.save()
pnb.loan()





