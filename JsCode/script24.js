// DESTRUCTURE OR UNPACK:
// program 1:
let flower = ["lotus","rose","jasmine","marigold"]
console.log(flower)
console.log(flower.length)

let x1 = flower[0]
let x2 = flower[1]
let x3 = flower[2]
let x4 = flower[3]

console.log(x1)
console.log(x2)
console.log(x3)
console.log(x4)

// destructure:
let [a1,a2,a3,a4] = flower
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)

// program 2:

let score = [[11,22,33],[44,55,66],[77,88,99]]

let [[b1,b2,b3],[b4,b5,b6],[b7,b8,b9]] = score

console.log(b1)
console.log(b2)
console.log(b3)
console.log(b4)
console.log(b5)
console.log(b6)
console.log(b7)
console.log(b8)
console.log(b9)
 
// program 3:

let info = {
    first_name: "aarvi",
    last_name : "lokhande",
    age       :  2

}
console.log(info)

// by using dot and bracket notation:

let c1 = info.first_name
let c2 = info.last_name
let c3 = info.age

console.log(c1)
console.log(c2)
console.log(c3)

let {first_name:fn,last_name:ln,age:ag} = info
console.log(fn)
console.log(ln)
console.log(ag)


let vehicle = {
    name : "thar",
    color : "black",
    regNo : 5665,
    city : "panvel"

}
console.log(vehicle)

let {name:nm,color:cl,regNo:re,city:ct} = vehicle
console.log(nm)
console.log(cl)
console.log(re)
console.log(ct)


// program 4:

let info2 ={
    first_name : "pooja",
    last_name  : "lokhande",
    parent:{
        fathername : "tukaram",
        mothername : "ranjana"

    }
}
console.log(info2)

let {first_name:fn1,last_name:ln1,parent:{fathername:fn2,mothername:mn2}} = info2
console.log(fn1)
console.log(ln1)
console.log(fn2)
console.log(mn2)

// program 5:

let employe = [

    {
        firstName :"kavita",
        lastName :"rahane"
    },

    {
        firstName :"kalyani",
        lastName : "kadam"
    },

    {
        firstName : "babita",
        lastName  : "jagtap"
    }
]
console.log(employe)

let [{firstName:fn11,lastName:ln11},{firstName:fn22,lastName:ln22},{firstName:fn33,lastName:ln33}] = employe

console.log(fn11)
console.log(ln11)
console.log(fn22)
console.log(ln22)
console.log(fn33)
console.log(ln33)
