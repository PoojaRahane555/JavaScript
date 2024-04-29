// Essenatials -- for starting react

// //destruccting of objects and array 

// let name  = ["chinmay","sarika","poorva"]
// let [a11,a12,a13] = names
// console.log(a11)
// console.log(a12)
// console.log(a13)


// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// let {firstName:fn,lastName:ln} = info
// console.logo(fn,ln)

// // Rest and spread operator
// //[11,22,33,44,55] =====> 11,22,33,44,55
// // 11,12,33,44,55  ====>[11,22,33,44,55]

// // function addition(...arr){ // rest
// //     console.log(arr)
// // }
// // addition(123,4,5,56,77)

// // let numbers = [11,22,33,44,55,66,77]
// // function add(x,z,y){
// //     console.log(x+y+z)
// // }
// // add(...numbers)


// // program 3 template literals 

// let fne  = "chinmay"
// let lne  = "deshpadne"
// console.log(`My firstName is ${fne} and my lastName is ${lne}`)


// // program4

// let h = 10 
// let g = 5
// h > g ?console.log("h is greater"):"g is greater"


// // program 5
// function addition(x,y){
//     console.log(x+y)
// }
// addition(12,3)

// let additionw = function (x,y){
//     console.log(x+y)
// }
// addition(12,3)
// let additionwa =  (x,y)=> x+y
// addition(12,3)


// let infoe = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     display:function(){
//         console.log(this.firstName + this.lastName)
//         let display3 = ()=>{
//             // window
//             console.log(this.firstName + this.lastName)
//         }
//         display3()
//     }

// }



// //array map ,  filter , reduce 

// let n = [11,22,33,44]
// let nwarr = n.map(function(el,index,arr){
//     return el + 2
// })

// let nm = [11,22,33,44]
// let nwarfr = nm.filter(function(el,index,arr){
//     return el > 20
// })
// console.log(nm)

// nm = [11,22,33,44]
// let mmm = nm.reduce(function(acc,el,arr,arr){
//     return acc + el
// },0)
// console.log(mmm)



//shorcircuit

let a = 12 != 12 && 4 
console.log(a)

let b = "" || 9 
console.log(b)

// 8 ,9,-7,324,True , {}, [], 2 == 3 , True
// null , 0 , undefined , NaN , 12 > 13 , False , ""

// sort method array 
// immutable array 
// optional parameter

// 7:30 pm