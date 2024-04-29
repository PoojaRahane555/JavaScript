// program 1:

let birthYear = [1994,1998,2000,2018,2021]
let age = []

for(let i = 0; i < birthYear.length; i++){
    // console.log(i)
    // console.log(birthYear[i])
    let aa = 2023 - birthYear[i]
    age.push(aa)
}
console.log(age)

// 8) MAP:
// action : used for to performance operation on each element of array
// return : array

let aaa = birthYear.map(function(el,index,arr){
    // console.log(el,index,arr)
    return 2023 - el
})
console.log(aaa)


let number = [10,32,45,97,67,64]
let bbb = number.map(function(el,index,arr){
    // console.log(el,index,arr)
    return el + 5

})
console.log(bbb)

// program 2:

let count = [76,87,35,12,51,29]
let above40 = []

for(let i = 0; i < count.length; i++){
    // console.log(i)
    // console.log(count[i])
    if(count[i] > 40){
        above40.push(count[i])
    }
}
console.log(above40)

// 9) FILTER:
// action : search the element for given condition
// return : array

let bb = count.filter(function(el,index,arr){
    // console.log(el,index,arr)
    return el > 40

})
console.log(bb)


// program 3:

let percentage = [50,30,70,90,80]
let total = 0

for(let i = 0; i < percentage.length; i++){
    // console.log(i)
    // console.log(percentage[i])
    total = total + percentage[i]
}
console.log(total)

// 10) REDUCE:
// action : add the all elements of array 
// return : gives single no.

let cc = percentage.reduce(function(acc,el,index,arr){
    // console.log(el,index,arr)
    return acc + el
},0)
console.log(cc)

// Program 4:
let names = ["pooja","kavita","savita","babita"]

for(let i = 0; i <names.length; i++){
    console.log("hello "+ names[i])
}

// 11)FOREACH:
// action : perform operation with each element of array for given condition
// return : nothing
names.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})

// 12)FIND:
let transaction = [100,234,567,45,300,890]

// action: search first element from left side for given condition
// return: number
let dd = transaction.find(function(el,index,arr){
    return el > 200
})
console.log(dd)

// 13)FINDINDEX:
// action: search the index of first element from left side for given condition
// return : number
let ee = transaction.findIndex(function(el,index,arr){
    return el > 500
})
console.log(ee)

// 14)EVERY:
// action: check every element of array for given condition
// return:  If all elements satisfied for given cond.it gives true else false

let ff = transaction.every(function(el,index,arr){
    return el > 40
})
console.log(ff)

// 15)SOME:
// action: check element of array for given condition
// return: If only one element satisfied for given cond.still it gives true else false

let gg = transaction.some(function(el,index,arr){
    return el < 50
})
console.log(gg)







