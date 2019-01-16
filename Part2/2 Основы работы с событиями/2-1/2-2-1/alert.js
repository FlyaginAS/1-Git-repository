'use strict';
let input = document.querySelector('input');
let div = document.querySelector('div');
//console.log(input, div);
input.addEventListener('click', myHide);



function myHide() {
    div.style.display='none';
}
