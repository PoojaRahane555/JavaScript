
console.log(2)
console.log(4)
console.log(6)
console.log(8)

//  LOOPS:
// to avoid repetation of code for loop is uded.

// 1) for loop:
for(let i = 0; i <=7; i++){
    console.log(i)
}

// print hello world 5 times:
for(let i = 1; i <=5; i++){
    // console.log(i)
    console.log("hello world")
}

// reverse loop:
for(let i = 5; i >= 0; i--){
    console.log(i)
}


// print table of 3:
for(let i = 3; i <= 30; i = i+3){
    console.log(i)
}

// print reverse table of 4:
for(let i = 40; i >= 4; i = i-4){
    console.log(i)
}


// for loop by using break:
// used for to break loop at specific condition

for(let i = 0; i <= 10; i++){
    // console.log(i)
    if(i == 5){
        break
    }
    console.log(i)
}

for(let i = 0; i <= 10; i++){
    console.log(i)
    if(i == 5){
        break
    }  
}

for(let i = 7; i >= 0; i--){
    // console.log(i)
    if(i == 3){
        break
    }
    console.log(i)
}

for(let i = 7; i >= 0; i--){
    console.log(i)
    if(i == 3){
        break
    }
}

// for loop by using continue:
// used to avoid particular no.


for(let i = 0; i <= 6; i++){
    // console.log(i)
    if(i == 3){
        continue
    }
    console.log(i)
}

console.log("...............................................")

for(let i = 6; i >= 0; i--){
    // console.log(i)
    if(i == 3){
        continue
    }
    console.log(i)
}


