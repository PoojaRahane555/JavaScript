
// ARRAY:
// stores multiple values 
// stores value by index
// always index starts with 0
// length starts with 1
// typeof array is always gives object

let name = ["pooja","aaru","savita","kavita"]

console.log(name)
console.log(typeof name)
console.log(name[2])

// array has property and methods:
// 1) property:
// array has length as a property which returns no.of element present in array and having typeof nember.

console.log(name.length)

for(let i = 0;i < name.length; i++){
    console.log(i)
    console.log(name[i])

}

// array by using forward loop:

let sub = ["english","marathi","hindi","history","algebra"]
console.log(sub)

// forward loop:
for(let i = 0; i < sub.length ; i++){
    // console.log(i)
    console.log(sub[i])
}

// reverse loop:
for(let i = sub.length-1 ; i >=0 ; i--){
    // console.log(i)
    console.log(sub[i])
}
