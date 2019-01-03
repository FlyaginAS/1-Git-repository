'use strict'
var table = document.body.children[0];

/* ваш код */
for (let i=0; i<table.children.length; i++){
	let row= table.children[i];
	let td=row.children[i];
    td.style.backgroundColor = 'red';

}//не понимаю почему не работает
// в переменной td DOM-элемент для тега <td>
//td.style.backgroundColor = 'red';