// ternary operator:
// to reduce the code for single input-->>if else

// let m = 10
// let n = 30
// if(m > n){
//     console.log("m is greater")
// }
// else{
//     console.log("n is greater")
// }


let m = 12
let n = 50
// m > n ? console.log("m is greater"):console.log("n is greater")

let num = m > n ? "m is greater" : "n is greater"
console.log(num)


// SWITCH-CASE:
// switch case is used for multiple inputs

// SWITCH CASE WITHOUT BREAK:
// javascript is case sensitive language
// in without break statement where the condition matches it gives all the outputs

let city = "indore"

switch (city) {
    case "nagpur":
        console.log("MH")
    case "indore":
        console.log("MP")
    case "patna":
        console.log("BH")
}

// SWITCH CASE WITH BREAK STATEMENT:
// it gives one output where the condition matches

let city1 = "udaipur"

switch (city1) {
    case "udaipur":
        console.log("RJ")
        break
    case "mumbai":
        console.log("MH")
        break
    case "ranchi":
        console.log("ZR")
        break
    case "ujjain":
        console.log("MP")
        break
    default: {
        console.log("incorrect city name")
    }
}


let city2 = "nagpur"

switch (city2) {
    case "mumbai":
    case "pune":
        console.log("MAHARASHTRA")
        break
    case "bhopal":
    case "indore":
        console.log("MADHYAPRADESH")
        break
    case "jaipur":
    case "udaipur":
        console.log("RAJASTHAN")
        break
    case "varanasi":
    case "lucknow":
        console.log("UTTARPRADESH")
        break
    default: {
        console.log("incorrect city name")
    }
}

// greatest of three number using switch 
let greatest = true
let a1 = 100
let b1 = 5000
let c1 = 500000

switch (greatest) {
    case a1 > b1 && a1 > c1:
        console.log("a1 is greater")
        break
    case b1 > a1 && b1 > c1:
        console.log("b1 is greater")
        break
    default:
        console.log("c1 is greater")
}





