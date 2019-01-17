'use strict';
/*

*/
//получим второй ли
let li2=document.querySelector('ul li:nth-child(2)');
//console.log(li2);
//вставим другие ли в виде строки хтмл
li2.insertAdjacentHTML("afterend", '<li>3</li><li>4</li><li>5</li>');
