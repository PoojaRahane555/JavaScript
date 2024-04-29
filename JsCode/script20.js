// STRING:

let firstname  = "POOJA"
let middlename = 'DIPAK'
let lastname   = `LOKHANDE`

console.log(firstname)
console.log(middlename)
console.log(lastname)
console.log(typeof firstname)

// string stores the value by index:
//           
let bird = "parrot"
console.log(bird[0])
console.log(bird[5])
console.log(bird[2])

// LOOP:
// forward loop:
let name = "aarvi"

for(let i = 0; i < name.length; i++){
    // console.log(i)
    console.log(name[i])
}

// reverse loop:

for(let i = name.length-1; i >= 0; i--){
    // console.log(i)
    console.log(name[i])
}

// string:
// string + string ==>> string
// string + number ==>> string
// number + string ==>> string
// number + number ==>> number


let x = 20
let y = "smile"
let z = 10

console.log(x + y)
console.log(x + z)
console.log(x + y + z)
console.log(y + x + z)


// string concatination:

first_name = "aarvi"
last_name = "lokhande"

// my first_name is aarvi and last_name is lokhande

console.log("my first_name is " + first_name + " and last_name is "+ last_name )
console.log(`my first_name is ${first_name} and last_name is ${last_name}`)


// string:

let flower = "jasmine"

// property: ==>>length
console.log(flower.length)

// methods:

// 1) TOUPPERCASE:
// action: convert all the characters into capital letter
// return: string
let color = "purple"

let aa = color.toUpperCase()
console.log(aa)

// 2) TOLOWERCASE:
// action : convert all the characters into small letter
// return: string

let color2 = "PURPLE"

let bb = color2.toLowerCase()
console.log(bb)

// 3) INCLUDES:
// action : check wether given character or substring is present or not
// return : boolean value

let city = "sambhajinagar"

let cc = city.includes("b")
console.log(cc)

let dd = city.includes("S")
console.log(dd)

let ee = city.includes("nag")
console.log(ee)













