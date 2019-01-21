'use strict';
let div= document.querySelector('body div:first-child');
console.log(div);
div.addEventListener('click', del);

function del(event) {
    let b=event.target;
    if(b.classList.contains('remove-button')) {
        let divdel=b.closest('.pane');
       // console.log(divdel);
        divdel.remove();
    }
}