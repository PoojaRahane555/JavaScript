// program 1:

let birthYear = [1990,1995,2000,2004,2021]
let age = []

for(let i = 0; i < birthYear.length; i++){
    // console.log(i)
    // console.log(birthYear[i])
    let aa = 2023 - birthYear[i]
    age.push(aa)
}
console.log(age)


// program 2:

let num = [22,34,66,74,98,81,58]
let above50 = []

for(let i = 0; i < num.length; i++){
    // console.log(i)
    // console.log(num[i])
    if(num[i] > 50){
        above50.push(num[i])
    }
}
console.log(above50)


// program 3:

let score = [20,40,60,80,100]
let total = 0

for(let i = 0; i < score.length; i++){
    // console.log(i)
    // console.log(score[i])
     total = total + score[i]
}
console.log(total)