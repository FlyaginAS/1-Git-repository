'use strict';
/*

*/
let body = document.body;
let a = document.createElement('a');
a.innerText='Нажми меня';
a.setAttribute('href','#');
a.style.cssText='border-radius: 8px;\n' +
    '    border: 2px groove green;\n' +
    '    display: block;\n' +
    '    height: 30px;\n' +
    '    line-height: 30px;\n' +
    '    width: 100px;\n' +
    '    text-decoration: none;\n' +
    '    text-align: center;\n' +
    '    color: red;\n' +
    '    font-weight: bold;';
body.insertAdjacentElement("afterbegin", a);
