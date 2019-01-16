'use strict'
/*
* Напишите функцию insertAfter(elem, refElem), которая добавит elem после узла refElem.
* */
let elem = document.createElement('div');
elem.innerHTML = '<b>Новый элемент</b>';

function insertAfter(elem, refElem) {
  /* ваш код */
    //если после refElem есть элемент, вставим перед ним
    if(refElem. nextSibling){
      refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    }
    //иначе добавляем после элемента refElem
    refElem.parentNode.appendChild(elem);
}

let body = document.body;

// вставить elem после первого элемента
insertAfter(elem, body.firstChild); // <--- должно работать

// вставить elem за последним элементом
insertAfter(elem, body.lastChild); // <--- должно работать
console.log(document.body);