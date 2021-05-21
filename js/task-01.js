const MainlistEl = document.querySelector('#Categories');
// console.log(listEl)
const MainlistItemEl = MainlistEl.querySelectorAll('.item');
// console.log(MainlistItemEl)
console.log(`В списке ${MainlistItemEl.length} категории.`);

const itemTitleEl = document.querySelectorAll('.item h2');
console.log(`Категория:${itemTitleEl[0].textContent}`)

const liEl = document.querySelectorAll('.item ul');
const numberAnimalsFirstEl = liEl[0].querySelectorAll('li');
console.log(numberAnimalsFirstEl);
console.log(`Количество элементов: ${numberAnimalsFirstEl.length}`);

console.log(`Категория:${itemTitleEl[1].textContent}`);
console.log('Количество элементов: 0');

console.log(`Категория:${itemTitleEl[2].textContent}`);
const numberAnimalsLastEl = liEl[2].querySelectorAll('li');
console.log(`Количество элементов: ${numberAnimalsLastEl.length}`);

