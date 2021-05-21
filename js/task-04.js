let counterValue = 0
const buttonDicrementEl = document.querySelector('#counter button[data-action="decrement"]')
// console.log(buttonDicrementEl)
const buttonIncrementEl = document.querySelector('#counter button[data-action="increment"]')
// console.log(buttonIncrementEl)
const spanEl = document.querySelector('#value')
// console.log(value)

buttonDicrementEl.addEventListener('click', onDecrementBtnClick)
buttonIncrementEl.addEventListener('click', onIncrementBtnClick)


function onDecrementBtnClick(event){
    counterValue -=1
    spanEl.textContent = counterValue
    // console.log(event)
}


function onIncrementBtnClick(event){
    counterValue +=1
    spanEl.textContent = counterValue 
}
increment(counterValue)
decrement(counterValue)