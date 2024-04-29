// <h1 id="one" class="two" name="hp"> Happy Place </h1>
    
let byId = document.querySelector('#one')
console.log(byId)

let byClass = document.querySelector('.two')
console.log(byClass)

let byAttribute = document.querySelector('h1[name="hp"]')
console.log(byAttribute)

let byTagName = document.querySelector('h1')
console.log(byTagName)

console.log(byId.textContent)

byId.addEventListener('click',function(){
    byId.textContent = "Happy Place"
    byId.style.color = "purple"
    byId.style.backgroundColor = "yellow"
    
})