let info = {
    // prop : value 
    // key : value
    firstName:"Pooja",
    lastName:"Rahane",
    age:23,
    rollNo:45,
    age:27
}

// object stores the value by index?
// does not store the value by index
console.log(info[0])
// object allowed duplicate values
console.log(info)


// retrive  (dot notation and bracket notation )
let info2 = {
    first_name:"Pooja",
    lastName:"Rahane"
}
console.log(info2.first_name)
console.log(info2['lastName'])

// update (dot notation and bracket notation )
info2.first_name = "Sona"
info2['lastName'] = "Lokhande"
console.log(info2)

// add (dot notation and bracket notation )
info2.city = "Mumbai"
info2['language'] = "hindi"
console.log(info2)

// delete  (dot notation and bracket notation )
delete info2.city
delete info2['lanaguage']

let vehicle = {
    color:"blue",
    type:"sedane"
}

console.log(vehicle.color)
vehicle.color = "white"
vehicle.city = "pune"
delete vehicle.city


console.log(vehicle['type'])
vehicle['type'] = "SUV"
vehicle['regNo'] = 1234
delete vehicle['type']


let numbers = [11,22,33,44,55]
for(let i = 0 ; i < numbers.length ; i++){
    console.log(numbers[i])
}

// dot notation will not work in loop
let animal = {
    color:"red",
    namee:"tiger"
}

for(let x in animal){
    console.log(x)
    console.log(animal[x])
}