// variable:

let x = 10
console.log(x)
x = 100
console.log(x)

// constant:
const y = 20
console.log(y)
// y = 23
// console.log(y)

// OPERATOR:
// 1) ARITHMATIC OPERATOR:

let m = 50
let n = 25

console.log(m+n)
console.log(m-n)
console.log(m*n)
console.log(m/n)
console.log(m%n)

// FUNCTION:

function calculator(x1,y1){
    console.log(x1+y1)
    console.log(x1-y1)
    console.log(x1*y1)
    console.log(x1/y1)
    console.log(x1%y1)
}
calculator(10,2)
calculator(23,2)


// TYPES OF FUNCTION:
// 1)function without parameter and without return type:

function addA(){
    console.log(2+2)

}
addA()
addA()
addA()

// 2) function with parameter and without return type:
 
function addB(a,b){
    console.log(a+b)
}
addB(10,3)
addB(2,4)
addB(44,2)


// 3) function with parameter and with return type:

function addC(a,b){
    return a+b
}
q = addC(10,5)
console.log(q)
console.log(q + q)
console.log(q * q)
console.log(q / q)

// typeof:

let name = "POOJA"
console.log(name)
console.log(typeof name)

let num = 13
console.log(num)
console.log(typeof num)

let info = []
console.log(info)
console.log(typeof info)

let info2 = {}
console.log(info2)
console.log(typeof info2)


// 2)COMPARISION OPERATOR:

console.log(3>3)
console.log(4=="4")
console.log(22!=22)
console.log(22!==22)
console.log(22!="22")
console.log(22!=="22")
console.log(44>22)
console.log(22<44)
console.log(44<22)
console.log(0>=0)
console.log(-1!==1)
console.log(22.4>11.5)
console.log("12">=12)
console.log("12"==12)
console.log('12'===12)
console.log("a"==13)
console.log("a"!==13)
console.log('a'=="b")
console.log("a"=="a")


// 3) LOGICAL OPERATOR:

// 1)AND &&

// true  &&  true ---->> true
// true  &&  false --->> false
// false &&  true  --->> false
// false &&  false --->> false

console.log(22==22 && 22 > 11)
console.log(22===22 && 22 !=22 )
console.log(22<=11 && 22=="22")
console.log(22>33 && 33<33)

// 2)OR ||

// true ||  true   --->>> true
// true ||  false  --->>> true
// false||  true   --->>> true
// false|| false   --->>> false

console.log(12=="12"  || 12===12)
console.log(12>=12 || 34!=34)
console.log("34"===34 || 12=="12")
console.log(22>=23 ||  10!==10)

// 3)NOT !

// ! true  -->> false
// ! false -->> true


console.log(!(34==34))
console.log(!(7==="7"))
