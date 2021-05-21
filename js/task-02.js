const ingredients = [ 
    'Картошка' , 
    'Грибы' , 
    'Чеснок' , 
    'Помидоры' , 
    'Зелень' , 
    'Приправы' , 
  ] ;

  const itemPotatoEl = document.createElement('li')
  itemPotatoEl.textContent = ingredients[0]
  // console.log(itemPotatoEl);

  const itemMashroomsEl = document.createElement('li')
  itemMashroomsEl.textContent = ingredients[1]
  // console.log(itemMashroomsEl);

  const itemGarlicEl = document.createElement('li')
  itemGarlicEl.textContent = ingredients[2]
  // console.log(itemGarlicEl);

  const itemTomatoEl = document.createElement('li')
  itemTomatoEl.textContent = ingredients[3]
  // console.log(itemTomatoEl);

  const itemGreensEl = document.createElement('li')
  itemGreensEl.textContent = ingredients[3]
  // console.log(itemGreensEl);

  const itemCondimentsEl = document.createElement('li')
  itemCondimentsEl.textContent = ingredients[4]
  // console.log(itemCondimentsEl);

  const listEl = document.querySelector('#ingredients')
  // console.log(listEl)
  listEl.append(itemPotatoEl, itemMashroomsEl, itemGarlicEl, itemTomatoEl, itemGreensEl, itemCondimentsEl)






 