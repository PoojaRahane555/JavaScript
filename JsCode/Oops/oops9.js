// setting this keyword manually:

// bind,call,apply

let data = {
    firstname: "pooja",
    lastname: "rahane",
    displayName:function(){
        console.log(this.firstname + this.lastname)
    }
}
console.log(data)
console.log(data.firstname)

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

//console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// chinmay.display()

// let amol  = {
//     firstName:"amol",
//     lastName:"rao",
   
// }

// // method borrow
// amol.display = chinmay.display
// amol.display()


// call   ,  bind   and apply
// let display = function(){
//     console.log(this.firstName + this.lastName)
// }
// let ram = {
//     firstName:"ram",
//     lastName:"dani"
// }

// let sham = {
//     firstName:"sham",
//     lastName:"shamra"
// }

// let kajal = {
//     firstName:"kajal",
//     lastName:"dule"
// }

// let k = display.bind(kajal) // this ---> kajal
// // let k = function(){
// //     console.log(kajal.firstName + kajal.lastName)
// // }
// k()

// s = display.bind(sham)
// s()

// r = display.bind(ram)
// r()

// Program 2 call()

// let display = function(greet){
//     console.log(this.firstName + this.lastName)
//     console.log(`${greet}`)
// }
// let ram = {
//     firstName:"ram",
//     lastName:"dani"
// }

// let sham = {
//     firstName:"sham",
//     lastName:"shamra"
// }

// let kajal = {
//     firstName:"kajal",
//     lastName:"dule"
// }

// display.call(kajal,"gm")
// display.call(sham,"ge")
// display.call(ram,"ga")


// apply()


let display = function(arr){
    console.log(this.firstName + this.lastName)
    console.log(`${arr[0]} ${arr[1]},${arr[2]}`)
}
let ram = {
    firstName:"ram",
    lastName:"dani"
}

let sham = {
    firstName:"sham",
    lastName:"shamra"
}

let kajal = {
    firstName:"kajal",
    lastName:"dule"
}

display.call(kajal,["GM","GE","GA"])
display.call(sham,["Hello","HI","BYE"])
display.call(ram,["A","B","C"])