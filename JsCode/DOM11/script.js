
let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonA = document.querySelector('#addButton')

buttonA.addEventListener('click',function(){
    let text = inputText.value
    let newLi = document.createElement('li')
    newLi.textContent = text
    //CreatButtons('newLi')
    ulList.appendChild(newLi)
    inputText.value = ""
})

function CreatButtons(li){
    let r = document.createElement('button')
    r.textContent = 'Remove'
    r.classList.add('remove')
    li.appendChild(r)

    let u = document.createElement('button')
    u.textContent('Up')
    u.classList.add('up')
    li.appendChild(u)

    let d = document.querySelector('button')
    d.textContent('Down')
    d.classList.add('down')
    li.appendChild(d)
}