'use strict';
/*
elem.scrollHeight - elem.scrollTop - elem.clientHeight
*/
let field = document.querySelector('#field');
console.log(field);
let coords = field.getBoundingClientRect();
console.log(`${coords.left} + ${coords.top}`);
console.log(`${coords.left + field.clientLeft} + ${coords.top + field.clientTop}`);
console.log(`${coords.right} + ${coords.bottom}`);
console.log(`${coords.right - field.clientLeft} + ${coords.bottom - field.clientTop}`);

