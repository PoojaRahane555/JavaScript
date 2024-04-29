// Encapsulation 
// lexical scope
function addition() {
    let a = 10
    let b = 5
    //console.log(s+t)
    console.log(a + b)
    function additionB() {
        let s = 8
        let t = 3
        console.log(a + b + s + t)
        // console.log(a1+b1)
        function additionC() {
            let a1 = 10
            let b1 = 5
            console.log(a + b + s + t + a1 + b1)
        }
        additionC()
    }
    additionB()
}
addition()

// Program 2
function additionD(x,y){
    console.log(x+y) // 15
    return x + y    
    console.log("hello")
}
let q2 = additionD(12,3)
console.log(q2)

// 1: number as a parameter and number as a return type:

function sub(x, y) {
    return x - y
}
let aa = sub(22, 11)
console.log(aa)
console.log(typeof aa)

// 2: string as a parameter and string as a return type:

function greet(word) {
    return "Happy " + word
}
let bb = greet("Morning")
console.log(bb)
console.log(typeof bb)

// 3: boolean as a parameter and boolean as a return type:

function canDrive(age, vehicleAvail) {
    if (age >= 18 && vehicleAvail) {
        return true
    }
    else {
        return false
    }
}
let cc = canDrive(19, true)
console.log(cc)
console.log(typeof cc)

// 4:array as parameter and array as return type 
let cities = ["pune", "mumbai", "banglore"]

function addCity(lst, ele) {
    lst.push(ele)
    return lst
}
let q4 = addCity(cities, "wardha")
console.log(q4)

// 5: obj as parameter and obj as return type 

let info = {
    firstName: "chinmay",
    lastName: "deshpande"
}
// dot notation and bracket notation 
function addLanguage(obj, lang) {
    obj.language = lang
    return obj
}
let q5 = addLanguage(info, "marathi")
console.log(q5)

// 6: set as parameter and set as return type

// 7: map as parameter and map as return type 

// 8: function as parameter and function as return type

let x1 = 10
console.log(x1)

let add = function (x1, y1) {
    return x1 + y1
}

function addition(fn, x1, y1) {

    // let x1 = 12
    // let y1 = 4
    // let fn = function(x1,y1){
    //return x1+ y1
    //}
    let q7 = fn(x1, y1)
    return q7
}
let q8 = addition(add, 12, 4)
console.log(q8)

// function as return type from another function

// Example:
// let add = function(x,y){
//     return x + y
// }


// let x = 10 
// console.log(x)
// console.log(add) // function expression 
// add(12,4)  // function call

function additionE(x,y){
    return function(){
        console.log(x + y)
    }
}
let q1 = additionE(12,3)
console.log(q1)
// let q1 = function(){
//     console.log(x + y)
// }

q1()

// program  2

let x = 10 
console.log(x)

let sub = function(x,y){
    return x - y 
}

function subtraction(fn ,x,y){
    // let fn = function(x,y){
    //     return x - y 
    // }

    let s = fn(x,y)
    return s
}
let s2 = subtraction(sub,12,4)
console.log(s2)