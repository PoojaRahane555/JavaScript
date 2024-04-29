// while loop:
// forward while loop:

let i1 = 0
while(i1 <= 6){
    console.log(i1)
    i1++
}

console.log("===============================")
// reverse while loop:

let i2 = 6
while(i2 >= 0){
    console.log(i2--)
    i2--
}

console.log("==============================")

let i3 = 7
while(i3 >= 0){
    console.log(i3)
    i3--
}


console.log("............table of 2............")

let i4 = 2
while(i4 <=20){
    console.log(i4)
    i4 = i4+2
}

let i5 = 5
while(i5<=50){
    console.log(i5)
    i5 = i5 + 5
}

let i6 = 60
while(i6 >= 6){
    console.log(i6)
    i6 = i6-6
}

// by using break statement:
let i7 = 1
while(i7 <= 6){
    if(i7 == 3){
        break
    }
    console.log(i7)
    i7++
}

let i8 = 7
while(i8 >= 0){
    if(i8 == 3){
        break
    }
    console.log(i8)
    i8--
}

// by using continue statement:
let i9 = 1

while(i9 <= 7){
    if(i9 == 4){
        i9++
        continue
    }
    console.log(i9)
    i9++
}

let i10 = 8
while(i10 >= 0){
    if(i10 == 5){
        i10--
        continue
    }
    console.log(i10)
    i10--
}