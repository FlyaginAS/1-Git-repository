'use strict';
/*

*/
let ul = document.querySelector('.tree');
ul.addEventListener('click', disp);

function disp(event) {
    let li= event.target.closest('li');
    if(li) {
    li.classList.toggle('close');
    }
}