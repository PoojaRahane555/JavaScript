// <h1> My favourite car </h1>
//<button> Change Color </button>

let byTagName = document.querySelector('h1') 
console.log(byTagName)

let buttonA = document.querySelector('button')
console.log(buttonA)

console.log(byTagName.textContent)

buttonA.addEventListener('click',function(){
    byTagName.style.color = "darkblue"
})
    