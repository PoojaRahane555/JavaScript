// LOGICAL OPERATOR:
// AND , OR , NOT

// AND(&&):

// true  && true  --->> true
// true  && false --->> false
// false && true  --->> false
// false && false --->> false

console.log(32>=31 && 44!=="44")
console.log(20=="20" && 34<32)
console.log(12>=10 && 67==76)
console.log("14">=14 && 56==65)

// OR(||):

// true  || true  --->> true
// true  || false --->> true
// false || true  --->> true
// false || false --->> false

console.log(23==23 || 12<=14)
console.log(45!=54 || 99>80)
console.log(78<=65 || 44=="44")
console.log(12!=12 || 20<18)

// NOT(!):

// !true  --->>> false
// !false --->>> true

console.log(!(33!=42))
console.log(!(87<78))


// CONDITIONAL OPERATOR:
// uded for one input and multiple output 

let percentage=80
// if(percentage>30 && percentage<=45){
//       console.log("student passed with minimum marks")
// }
// if(percentage>45 && percentage<=70){
//       console.log("student passed with average marks")
// }
// if(percentage>70 && percentage<=100){
//       console.log("student passed with maximum marks")
// }

percentage=20
   if(percentage>30 && percentage<=45){
          console.log("student passed with minimum marks")
    }
   else if(percentage>45 && percentage<=70){
          console.log("student passed with average marks")
    }
   else if(percentage>70 && percentage<=100){
          console.log("student passed with maximum marks")
    }
   else{
        console.log("student failed")
    }
