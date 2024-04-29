// <h2 id="one" class="two" name="three"><u> Country Name </u></h2>
    
let byTagName = document.querySelector('h2')
console.log(byTagName)

let byId = document.querySelector('#one')
console.log(byId)

let byClass = document.querySelector('.two')
console.log(byClass)

let byAttribute = document.querySelector('h2[name=three]')
console.log(byAttribute)


// <p id="four" class="five" name="six"> India: India is my country </p> 

let byTagName2 = document.querySelector('p')
console.log(byTagName2)

let byId2 = document.querySelector('#four')
console.log(byId2)

let byClass2 = document.querySelector('.five')
console.log(byClass2)

let byAttribute2 = document.querySelector('p[name="six"]')
console.log(byAttribute2)
