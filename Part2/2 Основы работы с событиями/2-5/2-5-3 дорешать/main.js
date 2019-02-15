'use strict';
/*

*/
let table = document.querySelector('#grid');
let tbody = table.querySelector('tbody');
let rows= [...tbody.querySelectorAll('tr')];
table.addEventListener('click', function (event) {
    // if(event.target.getAttribute('data-type')=='number') {
    //     rows.sort( function (a, b) {
    //         console.log(a.firstElementChild);
    //         return Number(a.firstElementChild.innerHTML)-Number(b.firstElementChild.innerHTML);
    //     })
    //     rows.forEach(function (item) {
    //         tbody.appendChild(item);
    //     });
    //
    // }

    if(event.target.getAttribute('data-type')=='string') {
        rows.sort( function (a, b) {
            console.log(a.lastElementChild);
            return a.lastElementChild.innerHTML > b.lastElementChild.innerHTML;
        })
        rows.forEach(function (item) {
            tbody.appendChild(item);
        });

    }
});