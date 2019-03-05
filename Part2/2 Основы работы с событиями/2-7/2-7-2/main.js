'use strict';
/*

*/
let div=document.querySelector('#contents');
div.addEventListener('click',function (event) {
    if(!event.target.closest('a')) return;
    //event.preventDefault();
    if(event.target.closest('a').getAttribute('href')=='http://wikipedia.org') {
       let q= confirm('вы хотите перейти на википедию?');
       if(!q) {
           event.preventDefault();
       }
    } else {
        let q= confirm('вы хотите перейти на w3?');
        if(!q) {
            event.preventDefault();
        }
    }
});