const inputEl = document.querySelector('#font-size-control')
console.log(inputEl)
const spanEl = document.querySelector('#text')

inputEl.addEventListener('input', onInputClick)

function onInputClick(event){
    console.log(event.target.value)
    spanEl.style.fontSize = `${event.target.value}px`
}
console.log(inputEl.value)