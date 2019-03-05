'use strict';

let body = document.body;
body.innerHTML='<ul>немаркированный список<li>1</li></ul>';
let ul = body.querySelector('ul');
ul.firstChild.data='blablalba';
ul.hidden=false;
ul.setAttribute('class', 'menu red');
let attr = [...ul.attributes];
console.log(attr);
console.log(ul.classList);
for(let clas of  ul.classList) {
    console.log(clas);
}