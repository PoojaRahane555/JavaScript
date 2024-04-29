
function getUserId(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            console.log(response.data)
            return response.data
        })

}
//getUserId(2)

function getSingleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            console.log(response.data)
            return response.data
        })
}
//getSingleUser(2)

function renderHtml(el){
    document.write(`<h1>${el.id}</h1>`)
    document.write(`<h1>${el.email}</h1>`)
    document.write(`<h1>${el.first_name}</h1>`)
    document.write(`<h1>${el.last_name}</h1>`)
    document.write(`<img src=${el.avatar}>`)
    
}

// getUserId(2)
// .then(function(arr){
//     console.log(arr[0].id)
//     return getSingleUser(arr[1].id)
// })
// .then(function(response){
//     console.log(response)
//     renderHtml(response)
// })


async function getUserInfo(pageNumber){

let arr = await getUserId(pageNumber)
let user = await getSingleUser(arr[1].id)
renderHtml(user)

}
getUserInfo(1) 


//getUserId(2)
