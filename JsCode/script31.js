// map:

let data1 = new Map([[1, "student"], [2, "teacher"], [3, "voice principal"], [4, "head of department"]])
console.log(data1)

// property:
let aa = data1.size
console.log(aa)

// methods:
// 1)has:
let bb = data1.has(3)
console.log(bb)

// 2)set:
let cc = data1.set(5, "administrative")
console.log(cc)

// 3)get:
let dd = data1.get(2)
console.log(dd)

let ee = data1.get(5)
console.log(ee)

// 4)delete:

let ff = data1.delete(4)
console.log(ff)

// 5)clear:

// data1.clear()
// console.log(data1)

// 6)foreach:
data1.forEach(function (val, key) {
    console.log(val, key)
})

// by using loop:
for(let key of data1.keys()){
    console.log(key)
}

for(let val of data1.values()){
    console.log(val)
}

for(let [key,val] of data1.entries()){
    console.log(key,val)
}


// SET:
// set does not allow duplicate value
let unique = new Set()
console.log(unique)

unique.add(10)
unique.add(20)
unique.add(30)
unique.add(40)
console.log(unique)


// property:
let number = new Set([101,102,103,104,105])
console.log(number)

let a1 = number.size
console.log(a1)

// methods:
// 1)has:
let a2 = number.has(103)
console.log(a2)

// 2)add:
let a3 = number.add(106)
console.log(a3)

// 3)delete:
let a4 = number.delete(106)
console.log(a4)
console.log(number)

// 4)clear:
number.clear()
console.log(number)



 



