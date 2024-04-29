// object:

// program 1:
// aaray stores the value by index

let info1 = ["pooja","lokhande","mumbai",56,25]
console.log(info1)
console.log(info1[0])
console.log(info1[2])

// operation:
// 1)retrive:
console.log(info1[3])

// 2)update:
info1[2] = "pune"
console.log(info1)

// 3)add:
info1.push("hello world")
console.log(info1)

// 4)delete:
info1.pop()
console.log(info1)
info1.splice(3,1)
console.log(info1)

// Program 2: STRING
let str = 'amazing'
console.log(str)

console.log(str[1])
str[0] = "A"
console.log(str)  //can not update the value

// Program 3: OBJECT
// object does not store value by index
// object does not consider duplicate value. it gives last value for duplicate as a updated value

let info2 = {
    firstname : "aarvi",
    lastname  : "lokhande",
    age       :  2,
    city      : "mumbai"
}
console.log(info2)
console.log(info2.age)

// operation:==>> by using dot and bracket notation
// 1)retrive:
console.log(info2.firstname)
console.log(info2['lastname'])

// 2)update:
info2.lastname = "rahane"
console.log(info2)
info2['lastname'] = "RAHANE"
console.log(info2)

// 3)add:
info2.language = "english"
console.log(info2)
info2['language'] = "ENGLISH"
console.log(info2)

// delete:
delete info2.language
console.log(info2)
delete info2['lastname']
console.log(info2)

// object by using loop:
// always use bracket notation for loop

let vehicle = {
    name  : "thar",
    color : "black",
    regNo : 5665, 
    city  : 'pune'
    
}

for(let key in vehicle){
    console.log(key,vehicle[key])
}

