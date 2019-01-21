'use strict';
/*

*/
let ul= document.querySelector('ul');
ul.addEventListener('click', func);
let lastClicked=''; //последний кликнутый ли

function func(event) {
   let target = event.target;
   if(target.tagName!='LI') return;//если клик вне ли
    if(event.ctrlKey) {
        toggleSelect(target);
    }
    if(event.shiftKey ) {
        shiftSelect(target);
    } else {
        simpleSelect(target);
    }
    lastClicked=target;
    console.log(`lastClicked==${lastClicked}`);
}
//наши функции
function toggleSelect(li) {
    li.classList.toggle('selected');
}
function shiftSelect(li) {
    let startLi= lastClicked || ul.children[0];
    let realStart, realEnd;
    if(startLi.compareDocumentPosition(li)==4) {
        realStart=startLi;
        realEnd= li;

    } else {
        realStart=li;
        realEnd=startLi;
    }
    console.log(realStart, realEnd); //элементы в реальном порядке следования, надо выделить
    for(let elem=realStart; elem!=realEnd.nextElementSibling; elem=elem.nextElementSibling) {
        elem.classList.add('selected');
    }
}
function simpleSelect(li) {
    deselectAll();
    li.classList.add('selected');
}
function deselectAll() {
    [...ul.querySelectorAll('li')].forEach((li)=>{li.classList.remove('selected')});
}
