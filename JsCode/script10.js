
// logical operator:

// 1)AND &&:
// true  &&  true    ==>>true
// true  &&  false   ==>>false
// false &&  true    ==>>false
// false &&  false   ==>>false

console.log(22 == "22" && 22 !== "22")
console.log(11 < 6 && 43 !== "43")
console.log(68 <= 56 && 34 !== "34")
console.log(15 > 51 && 67 == 76)

// 2) OR ||:
// true  ||  true    ==>>true
// true  ||  false   ==>>true
// false ||  true    ==>>true
// false ||  false   ==>>true

console.log(56 == "56" || 65 == "65")
console.log(55 < 65 || 55 > 65)
console.log(66 === "66" || 66 == "66")
console.log(56 !== 56 || 56 > 65)

// 3) NOT ! :
// !true  ==>> false
// !false ==>> true

console.log(!(78 == "78"))
console.log(!(54 <= 45))

// conditional statement:

let ticketcount = -5
// if(ticketcount > 0 && ticketcount <= 5){
//     console.log("you got 10% discount")
// }
// if(ticketcount > 5 && ticketcount <= 10){
//     console.log("you got 20% discount")
// }
// if(ticketcount > 10){
//     console.log("you got 30% discount")
// }

if(ticketcount > 0 && ticketcount <= 5){
    console.log("10 % discount")
}
else if(ticketcount > 5 && ticketcount <= 10){
    console.log("20 % discount")
}
else if(ticketcount > 10){
    console.log("30 % discount")
}
else{
    console.log("please enter correct input")
}


let marks = 50

// if(marks > 90){
//     console.log("passed with grade A")
// }
// if(marks > 50){
//     console.log("passed with grade B")
// }
// if(marks > 30){
//     console.log("passed with grade C")
// }

if(marks > 90){
    console.log("grade A")
}
else if(marks > 50){
    console.log("grade B")
}
else if(marks > 30){
    console.log(" grade C")
}
else{
    console.log("please enter correct input")
}

