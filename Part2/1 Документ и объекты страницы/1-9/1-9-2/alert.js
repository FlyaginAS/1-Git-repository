'use strict'
/*Сделайте желтыми внешние ссылки, добавив им класс external.
Все ссылки без href, без протокола и начинающиеся 
с http://internal.com считаются внутренними.*/

//сначала получим все ссылки  внутри списка
//можем выбрать через CSS селектор-вспомним синтаксис
let elements= document.querySelectorAll('ul a[href*=":"]:not([href*="internal"])' );
console.log(elements);
/*
//каждому элементу списка зададим правило CSS-желтый цвет
for(let i=0; i<elements.length; i++) {
	elements[i].style.backgroundColor = 'yellow';
}
*/
/*да, нужно было добавить класс для изменения цвета- забыл */
for(let i=0; i<elements.length; i++) {
	elements[i].classList.add('external');
}
