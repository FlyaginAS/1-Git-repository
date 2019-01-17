'use strict';

let button = document.querySelector('input');
button.addEventListener('click', hide);

function hide() {
    this.hidden=true;
}