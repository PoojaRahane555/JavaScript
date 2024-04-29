let students = [
    {
        fullName: "poorva vyas",
        city: "ujjain",
        skills: ["angular", "python", "react js", "django"],
        age: 26
    },
    {
        fullName: "chinmay deshpande",
        city: "pune",
        skills: ["cypress", "python", "react js", "js", "selenium"],
        age: 20

    },
    {
        fullName: "amol rao",
        city: "pune",
        skills: ["sql", "python", "js", "MSBI"],
        age: 33
    },
    {
        fullName: "mayuri rao",
        city: "nagpur",
        skills: ["testing", "python", "selenium"],
        age: 34
    }
]

// print fullname of all the students:

students.forEach(function (el) {
    console.log(el.fullName)
})

// print fullname of all the students and no.of skills:

students.forEach(function (el) {
    console.log(el.fullName + " : " + el.skills.length)

})

// print fullname of user with selenium:

let aaa = students.filter(function (el) {
    return el.skills.includes("selenium")
}).forEach(function (el) {
    console.log(el.fullName)
})

// add salesforce skill for every students:

students.forEach(function (el) {
    el.skills.push("salesforce")
})

console.log(students)


//  add working city as a property with value banglore:

students.forEach(function(el){
    el.workingCity = "banglore"
})
console.log(students)

// calculate average age of all the students.

let bbb = students.reduce(function(acc,el){
    return el.age + acc
},0)

console.log(bbb/students.length)

// print fullname of students whose city is pune:

let ccc = students.filter(function(el){
    return el.city == "pune"
}).forEach(function(el){
    console.log(el.fullName)
})

// print name of student starting with a:

let ddd = students.filter(function(el){
    return el.fullName.startsWith("a")
}).forEach(function(el){
    console.log(el.fullName)
})