
let headOne = document.querySelector('h1')
console.log(headOne)

let olList = document.querySelector('ol')
console.log(olList)

let inputText = document.querySelector('input')
console.log(inputText)

let buttonA = document.querySelector('button')
console.log(buttonA)

buttonA.addEventListener('click',function(){
    let Text = inputText.value
    let newList = document.createElement('li')
    newList.textContent = Text
    olList.appendChild(newList)
    inputText.value = ""
})
