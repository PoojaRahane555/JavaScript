// ARRAY:

let fruits = ["mango", "apple", "banana", "muskmelon", "grapes"]
console.log(fruits)
console.log(fruits[5])
console.log(fruits[2])
console.log(fruits.length)


for (let i = 0; i < fruits.length; i++) {
    // console.log(i)
    console.log(fruits[i])
}

for (let i = fruits.length - 1; i >= 0; i--) {
    // console.log(i)
    console.log(fruits[i])
}


// METHODS OF ARRAY:

let color = ["red","pink","purple","green","brown","orange"]
console.log(color)
console.log(color.length)


// 1) PUSH:
// action : add the element at the last position of array
// return : new length of array
let aa = color.push("black")
console.log(aa)
console.log(color)


// 2)UNSHIFT:
// action : add the element at the first position of array
// return : new length of array
let bb = color.unshift("white")
console.log(bb)
console.log(color)


// 3)POP:
// action : removes the element from last position
// return : removed element 
let cc = color.pop()
console.log(cc)
console.log(color)


// 4)SHIFT:
// action : removes the element from first position
// return : removed element
let dd = color.shift()
console.log(dd)
console.log(color)


// 5)INCLUDES:
// action : check for the element wether it is present or not
// return : if element is present then returns true else false
let ee = color.includes("blue")
console.log(ee)

let eee = color.includes("orange")
console.log(eee)


// 6)REVERSE:
// action : reverse all the element of array
// return : reversed array
let ff = color.reverse()
console.log(ff)

// 7)INDEXOF:
// action : search index value of the given element
// return : index no.of given element

let age = [10,20,30,40,50]

let gg = age.indexOf(30)
console.log(gg)









