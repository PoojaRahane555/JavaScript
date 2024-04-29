// function getInfo(){
//     setTimeout(function(){
//         console.log("userC")
//         setTimeout(function(){
//             console.log("getI")
//             setTimeout(function(){
//                 console.log("getinfo")
//             },1000)
//         },2000)
//     },3000)
// }
// getInfo()

function userCreated(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created")
        },3000)
    })
}


function userId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get id")
        },2000)
    })
}

function userInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get info")
        },1000)
    })
}
// userCreated()
// userId()
// userInfo()

// userCreated()
// .then(function(str){
//     console.log(str)
//     return userId()
// })
// .then(function(str){
//     console.log(str)
//     return userInfo()
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(){
//     console.log("error")
// })
// .finally(function(){
//     console.log("i will always execute")
// })

async function getUserInformation(){
    let p1 = await userCreated()
    console.log(p1)
    let p2 = await userId()
    console.log(p2)
    let p3 = await userInfo()
    console.log(p3)
}
getUserInformation()