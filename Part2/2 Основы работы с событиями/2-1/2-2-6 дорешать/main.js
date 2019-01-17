'use strict';
/*

*/
let ul = document.querySelector('ul');
let left=document.querySelector('.container button:nth-child(2) ');
let right = document.querySelector('.container button:nth-child(3) ');
//console.log(ul, left, right);
left.addEventListener('onclick', moveLeft);
right.addEventListener('onclick', moveRight);


function moveLeft() {
    ul.style.transform='translate(-350px)';
}
function moveRight() {
    ul.style.transform='translate(350px)';
}