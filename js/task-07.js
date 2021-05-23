const inputEl = document.querySelector('#font-size-control')
console.log(inputEl)
const spanEl = document.querySelector('#text')

inputEl.addEventListener('input', onInputClick)

function onInputClick(event){

    if(inputEl.value > 60 && inputEl.value < 80){
spanEl.style.fontSize = '30px'
}
else if(inputEl.value >= 80 && inputEl.value <= 100) {
    spanEl.style.fontSize = '40px'
}else spanEl.style.fontSize = '16px'

}
console.log(inputEl.value)