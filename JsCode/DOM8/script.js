//<h1> Maharashtra </h1>
//<button><b> Change-Color </b> </button>
    
let headOne = document.querySelector('h1')
console.log(headOne)

let buttonA = document.querySelector('button')
console.log(buttonA)

buttonA.addEventListener('click',function(){
    headOne.textContent = headOne.textContent.toUpperCase()
    headOne.style.color = "darkblue"
})