'use strict'
let rows= document.querySelectorAll('tr');
for(let i=0; i< rows.length; i++){
	let tds= rows[i].querySelectorAll('td');
	tds[i].style.backgroundColor = 'red';
}