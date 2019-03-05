'use strict';
let body=document.body;
let div=document.createElement('div');

function func(event) {
    if(event.target.getAttribute('data-tooltip') != 'подсказка длиннее, чем элемент') return;
    let target=event.target;
    let coords= target.getBoundingClientRect();
    let left= coords.left + target.offsetWidth ;
    if (left < 0) left = 0;
    let top = coords.top - div.offsetHeight ;
    div.style.left= left + 'px';
    div.style.top = top + 'px';
    document.body.appendChild(div);
    if(target.getAttribute('data-tooltip') == 'подсказка длиннее, чем элемент') {
        div.innerHTML='подсказка длиннее, чем элемент';


    }
    if(target.getAttribute('data-tooltip') == 'HTML<br>подсказка') {

    }
}
body.addEventListener('mouseover', func);
