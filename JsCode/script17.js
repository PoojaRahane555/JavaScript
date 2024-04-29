
// 16) SLICE:
// action : select particular element from the given array
// return : array and when statting point is after ending point at that time it gives blank array
//             0        1      2        3        4       5
let city = ["mumbai","pune","indore","bhopal","nashik","latur"]
//            -6      -5      -4       -3       -2      -1

// array.slice(starting index, ending index)
// ending index is not included
let aaa = city.slice(2)
console.log(aaa)

console.log(city.slice(-3))
console.log(city.slice(0,-3))
console.log(city.slice(4,1))
console.log(city.slice(-2,5))
console.log(city.slice(-1,-5))
console.log(city.slice(1,-1))

// 17)FLAT:
// action : convert two dimentional array into single array
// return : array

let table = [[2,4,6],[8,10,12],[14,16,18]]

console.log(table[1])
console.log(table[2][0])

let bbb = table.flat()
console.log(bbb)

// 18) AT:
// action : search the element for given index wether it is negative index.
// return : 

let color = ["red","pink","yellow",56,"purple","orange",true]
let ccc = color.at(5)
console.log(ccc)
console.log(typeof ccc)

let ddd = color.at(-4)
console.log(ddd)
console.log(typeof ddd)

let eee = color.at(6)
console.log(eee)
console.log(typeof eee)

// 19)CONCAT:
// action : convert two array into single array
// return : array
 let numberA = [10,20,30,40]
 let numberB = [50,60,70,80]

 let fff = numberA.concat(numberB)
 console.log(fff)

// 20)JOIN:
// action : join the element by given character
// return : string

let info = ["pooja",25,"apnacollege@gmail.com"]

let ggg = info.join(" => ")
console.log(ggg)
console.log(typeof ggg)





