
// 21) FILL:
// action : replace the element 
// rerurn : array

//              0     1    2      3        4        5
let animal = ["dog","cow","ox","buffalo","goat","elephant"]

// array.fill("character",starting index,ending index-excluded)

let aa = animal.fill("cat")
console.log(aa)

let bb = animal.fill("monkey",1,4)
console.log(bb)
console.log(typeof bb)

let cc = animal.fill("hello",4)
console.log(cc)

// 22) splice:
// action : removes the particular element
// return : removed element in array
        //    0  1    2   3   4   5
let score = [12, 23, 34, 56, 78, 90]

console.log(score.splice(5))
console.log(score.splice(3,5))


// 23)SORT:
// action : sort element alphabatically
// return : array

let country = ["India","Pakistan","China","America","Nepal"]
let dd = country.sort()
console.log(dd)


let num = [11,-222,44,55,-66,77]

let aaa = num.filter(function(el,index,arr){
    return el > 0
})

console.log(aaa)

let bbb = num.filter(function(el,index,arr){
    return el < 0
})

console.log(bbb)







