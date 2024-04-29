
// function getSingleUser(id){
//     return fetch(`https://reqres.in/api/users/${id}`)
//     .then(function(res){
//         return res.json()
//     })
//     .then(function(res){
    
//         return res.data
//     })

// }
// getSingleUser(2)

function getUserinfo(){
    return new promise(function(resolve,reject){
        let a = 10
        let b = 5
        setTimeout(function(){
            reject("bye")
        },1000)
    })
}

// promise.all

async function getAllUsers(){
    try{
        let result = await Promise.all([
            getSingleUser(1),
            getUserinfo(),
            getSingleUser(2),
            getSingleUser(3)
        ])
        console.log(result)


    }
    catch{
        console.log('error occur')
    }
}