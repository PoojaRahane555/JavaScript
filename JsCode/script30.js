// MAP:
// in object properties are always string but in map properties can be any data type string,number,boolean
// map stores the data in key value pair or property value pair

let information = {
    firstname: "om",
    lastname: "shinde",
    age: 55
}
console.log(information)


let map1 = new Map()
console.log(map1)

let map2 = new Map([
    ["firstname", "advi"], ["city", "panvel"], [true, "baby girl"],[2,"age"]
])
console.log(map2)

// property:
let aaa = map2.size
console.log(aaa)

// methods:
// 1) has : check the given property is present or not

let aa = map2.has(true)
console.log(aa)

let bb = map2.has(1)
console.log(bb)

let cc = map2.has("city")
console.log(cc)

// for values it gives false
let dd = map2.has("advi")   
console.log(dd)


// 2) set:
// add the property with value

let ee = map2.set("nationality","indian")
console.log(ee)

let ff = map2.set(6,"student")
console.log(ff)

// 3) delete:
// delete given property and return true or false 

let gg = map2.delete(6)
console.log(gg)
console.log(map2)

let hh = map2.delete("city")
console.log(hh)
console.log(map2)

//4) clear:
// it cleares all the map and gives undefined ==>> blank/empty map

// let ii = map2.clear()
// console.log(ii)
// console.log(map2)

// 5) foreach:

map2.forEach(function(value,key){
    console.log(key)
})

map2.forEach(function(value,key){
    console.log(value)
})

map2.forEach(function(value,key){
    console.log(value,key)
})

map2.forEach(function(value,key){
    console.log(key,value)
})

// map by using for loop:

let newmap = new Map([[1,"admin"],[2,"manager"],[3,"customer"],[4,"support"]])
console.log(newmap)

for(let key of newmap.keys()){
    console.log(key)
}

for(let val of newmap.values()){
    console.log(val)
}

for(let [key,val] of newmap.entries()){
    console.log(key,val)
}

for(let val of newmap.entries()){
    console.log(val)
}











