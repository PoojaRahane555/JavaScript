
let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonA = document.querySelector('#addElement')

console.log(ulList)
console.log(inputText)
console.log(buttonA)

buttonA.addEventListener('click',function(){
    let text = inputText.value
    let newLi = document.createElement('li')
    newLi.textContent = text
    CreatButtons(newLi)
    ulList.appendChild(newLi)
    inputText.value = ""
})

function CreatButtons(li){
    let r = document.createElement('button')
    r.textContent = "Remove"
    r.classList.add('remove')
    li.appendChild(r)

    let u = document.createElement('button')
    u.textContent = "Up"
    u.classList.add("up")
    li.appendChild(u)

    let d = document.createElement('button')
    d.textContent = "Down"
    d.classList.add('down')
    li.appendChild(d)
}

ulList.addEventListener('click',function(event){
    //console.log(event.target)
    //console.log(event.target.tagName)
    //console.log(event.target.className)

    if(event.target.tagName === "BUTTON"){
        if(event.target.className === 'remove'){
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }
        else if( event.target.className === "up"){
            let li = event.target.parentElement
            let ul = li.parentElement
            let preLi = li.previousElementSibling
            ul.insertBefore(li,preLi)
        }
        else if(event.target.className === "down"){
            let li = event.target.parentElement
            let ul = li.parentElement
            let nextLi = li.nextElementSibling
            ul.insertBefore(nextLi,li)
        }

    }
})