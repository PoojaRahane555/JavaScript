// synchronous:
// line by execute so takes more more time

function additionA() {
    console.log("A is executed")
}

function additionB() {
    console.log("B is executed")
}

// additionA()
// additionB()

// setTimeout is used for to make function asynchronous

function additionC() {
    setTimeout(function () {
        console.log('C is called')
    }, 2000)
}

function additionD() {
    console.log("D is called")
}

// additionC()
// additionD()

// Asynchronous:
// it does't stop others execution

function getInfo() {
    setTimeout(function () {
        console.log("user created")
    }, 3000)

    setTimeout(function () {
        console.log("get id")
    }, 2000)

    setTimeout(function () {
        console.log("get user info")
    }, 1000)
}
// getInfo()

// solution => call back hell
// call back hell
// async ==> sync ==> help

function getInfo2() {
    setTimeout(function () {
        console.log("create user")
        setTimeout(function () {
            console.log("get id")
            setTimeout(function () {
                console.log("get info")
            }, 1000)
        }, 2000)
    }, 3000)
}
// getInfo2()

// problem solved but very tightly coupled code ,difficult to maintain so solution is promises.

// program 1:
let pro = new Promise(function(resolve,reject){
    let a = 100
    let b = 100

    if(a == b){
        resolve("hello world...")
    }else{
        reject("bye world...")
    }
})
// consuming the promise
pro.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})

// program 2:
let pro2 = new Promise(function(resolve,reject){
    let a = 10
    let b = 5

    if(a == b){
        resolve([11,22,33,44])
    }
    else{
        reject([-11,-22,-33,-44])
    }
})
// consuming the promise
pro2.then(function(arr){
    console.log(arr[2])
},function(arr){
    console.log(arr[1])
})

// program 3:
let pro3 = new Promise(function(resolve,reject){
    let first_name = "Kanvi"

    if(first_name.startsWith("K")){
        resolve("starts with K")
    }
    else{
        reject("does not starts with K")
    }
})
// consuming the promise
pro3.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("i will always execute")
})

// program 4:

let pro4 = new Promise(function(resolve,reject){
    let a = 5
    let b = 5

    if(a == b){
        resolve("good morning")
    }
    else{
        reject("good night")
    }
})
// consuming the promise
pro4.then(function(str){
    console.log(str)
    return str + " Pooja"
})
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("i will always execute")
})