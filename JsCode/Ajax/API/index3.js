// promise combinator:

function fetchUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            console.log(response)
            return response.json()
        })
}
fetchUser(3)

function getUsers2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let a = 10
            let b = 1
            if (a == b) {
                resolve('helloworld')
            }
            else {
                reject('byebye')
            }
        }, 10)
    })
}
//getUsers2()


// promise.all:

// it gives response only when all the promise resolve
// if single response comes in reject status then it gets short circuit and does not give respose

// Promise.all([
//     fetchUser(1),
//     fetchUser(2),
//     fetchUser(3),
//     // getUsers2()

// ])
// .then(function(response){
//     console.log(response)
// })


// Promise.allSettled
// if response comes in any status resolve and reject it gives all the response

// Promise.allSettled([
//     fetchUser(1),
//     fetchUser(2),
//     getUsers2()
// ])
// .then(function(response){
//     console.log(response)
// })

// // Promise.race()
// any response comes first wether it is resolve status or reject status gives only first response

// Promise.race([

//     fetchUser(2),
//     getUsers2()
// ])
// .then(function(response){
//     console.log(response)
// })


// Promise.any()
// it gives response as only resolve status comes first
// reject status does not consider

Promise.any([
    getUsers2(),
    fetchUser(1),
    fetchUser(2),
    fetchUser(3)
    
])
    .then(function (response) {
        console.log(response)
    })




























