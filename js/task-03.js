const  images  =  [ 
    { 
      url :
         'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' , 
         alt: 'White and Black Long Fur Cat',
        } , 
    { 
      url :
         ' https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 ' , 
         alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
        } , 
    { 
      url :
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' , 
        alt: 'Group of Horses Running',
      } , 
  ] ;
 const itemCatEl = document.createElement('li')  
 const itemFishEl = document.createElement('li') 
 const itemHorsesEl = document.createElement('li')   

 const linkCatEl = document.createElement('img')
 const linkFishEl = document.createElement('img') 
 const linkHorsesEl = document.createElement('img')
 


 itemCatEl.insertAdjacentHTML('afterbegin', `<img class="img" src="${images[0].url}" alt="${images[0].alt}">`)
 itemFishEl.insertAdjacentHTML('beforeend', `<img class="img" src="${images[1].url}" alt="${images[1].alt}">`)
 itemHorsesEl.insertAdjacentHTML('beforeend', `<img class="img" src="${images[2].url}" alt="${images[2].alt}">`)


 const listEl = document.querySelector('#gallery')
listEl.append(itemCatEl, itemFishEl, itemHorsesEl)
console.log(listEl)
 





 

