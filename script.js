document.addEventListener('DOMContentLoaded', () => { //код js или Дом-дерево будет вызвана когда html полностью загрузиться/

const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const mulBtn = document.querySelector('#mul')
const divBtn = document.querySelector('#div')
const output = document.querySelector( '#output')


function getInputValues(){
  const value1 = parseInt(num1.value) //преврашает строки в число
  const value2 = +num2.value //преврашает строки в число краткая версия

return [value1, value2]
}

function addHandler(){
  const values = getInputValues()

  const result = values[0] + values[1]

  displayResult(result)

}
function subHandler(){
const values = getInputValues()

const result = values [0] - values[1]
displayResult(result)
}

function mulHandler(){
const values = getInputValues()

const result = values [0] * values[1]
displayResult(result)
}

function divHandler(){
const values = getInputValues()

const result = values [0] / values[1]
displayResult(result)
}

function displayResult(result){
 output.closest('.card').style.display = 'block'
 output.innerHTML = `Результат = ${result}`	
 console.trace()//показывает последовательное выполнения функций в консоле
}
addBtn.addEventListener('click', addHandler)
subBtn.addEventListener('click', subHandler)
mulBtn.addEventListener('click', mulHandler)
divBtn.addEventListener('click', divHandler)
})  
//что отвечает сервер нам
// setTimeout(() => { //уст время когда выполненится колбек функция
//   fetch('https://jsonplaceholder.typicode.com/todos/1') // делаем ассихронный запрос
//     .then(response => response.json()) //парсим jsonну
//     .then(json => console.log(json))//выводим на консоле
// }, 5000)

