function creatOrderApi(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("First creating order",)
        },4000)
    })   
}

function proceedToPaymentApi(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Second proceed to payment")
        },3000)
    })
}

function showOrderSummeryApi(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Third showOrder Details")
        },2000)
    })
}

function updateWalletApi(){
    return new Promise(function(resolve,reject){
     setTimeout(function(){
        resolve("Update the wallet")
    },1000)
})
    
}
creatOrderApi()
.then(function(str){
    console.log(str)
    return proceedToPaymentApi()
})
.then(function(str){
    console.log(str)
    return showOrderSummeryApi()
})
.then(function(str){
    console.log(str)
    return updateWalletApi()
})
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log(" I will always execute")
})

// creatOrderApi(function(){
//     proceedToPaymentApi(function(){
//         showOrderSummeryApi(function(){
//             updateWalletApi(function(){
    
//             })
//         })
//     })
// })

// function creatOrderApi2(){
//     setTimeout(function(){
//         console.log("First creating order",)
//         setTimeout(function(){
//             console.log("Second proceed to payment")
//             setTimeout(function(){
//                 console.log("Third showOrder Details")
//                 setTimeout(function(){
//                     console.log("Update the wallet")
//                 },1000)
//             },2000)
//         },3000)
//     },4000)

// }
// creatOrderApi2()