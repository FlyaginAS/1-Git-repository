'use strict'
//Напишите функцию removeChildren, которая удаляет всех потомков элемента.
function removeChildren(elem) {
  /* ваш код */
  elem.innerHTML='';
}

removeChildren(table); // очищает таблицу
removeChildren(ol); // очищает список
console.log(document.body);