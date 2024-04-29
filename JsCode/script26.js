
let students = [
    {
        firstName:"chinmay",
        lastName:"deshpande",
        skills:["python","javascript","c#"],
        age:33

    },
    {
        firstName:"poorva",
        lastName:"vyas",
        skills:["python","javascript","django"],
        age:33

    },
    {
        firstName:"sarika",
        lastName:"pansare",
        skills:["python","cypress","playwright"],
        age:33
    }

]

students.forEach(function(el,index,arr){
    console.log(el.firstName + el.lastName)
})

for(let i = 0; i < students.length; i++){
    console.log(students[i].firstName + students[i].lastName)
}


