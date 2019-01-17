'use strict';
/*

*/
showNotification({
    top: 10,
    right: 10,
    html: "Привет",
    className: "welcome"
});




function showNotification(options) {
    let div=document.createElement('div');
    div.innerText=options.html;
    div.style.cssText=`margin: ${options.top}px ${options.right}px; float:right; border: 3px solid red; `;
    div.classList.add('welcome');

    let body=document.body;
    body.insertAdjacentElement('afterBegin', div);
    setTimeout(function () {
        div.hidden='true';
    }, 1500);
}