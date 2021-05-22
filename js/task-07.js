const inputEl = document.querySelector('#font-size-control')
console.log(inputEl)
const spanEl = document.querySelector('#text')

inputEl.addEventListener('input', onInputBlur)

function onInputBlur(event){
spanEl.style.fontSize = '30px'
console.log(spanEl)
}
