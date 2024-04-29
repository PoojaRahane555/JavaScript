//<h1> Butterfly </h1>
//<input type="text">
//<button> Change-Color </button>

let headOne = document.querySelector('h1')
console.log(headOne)

let inputText = document.querySelector('input')
console.log(inputText)

let buttonA = document.querySelector('button')
console.log(buttonA)

buttonA.addEventListener('click',function(){
    let colorText = inputText.value
    headOne.style.color = colorText
    inputText.value = ""
})