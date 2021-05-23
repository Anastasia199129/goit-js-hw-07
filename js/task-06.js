const inputEl = document.querySelector('#validation-input')
// console.log(inputEl)

inputEl.addEventListener('blur', onInputBlur)
// console.log(inputEl.getAttribute('data-length'))

function onInputBlur(event){
  if(event.currentTarget.value.length !== Number(inputEl.getAttribute('data-length'))){
    inputEl.classList.add('invalid')
    // console.log(event.currentTarget.value.length !== inputEl.getAttribute('data-length'))
    // console.log(event.currentTarget.value.length)
    // console.log(inputEl.getAttribute('data-length'))
   
  } else if(event.currentTarget.value.length === Number(inputEl.getAttribute('data-length'))){
    inputEl.classList.remove('invalid')
    inputEl.classList.add('valid')}

    
    
      // console.log(event.currentTarget.value.length)
}


