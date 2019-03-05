'use strict';
/*

*/
let table = document.querySelector('#grid');
let tbody = table.querySelector('tbody');
let rows= [...tbody.querySelectorAll('tr')];
//console.log(rows);
table.addEventListener('click', function (event) {

    if(event.target.getAttribute('data-type')=='string') {
        rows.sort( function (a, b) {
           // console.log(a.lastElementChild);
            if(a.lastElementChild.innerHTML > b.lastElementChild.innerHTML) {
                return 1;
            }
            if(a.lastElementChild.innerHTML < b.lastElementChild.innerHTML) {
                return -1;
            }
            return 0;
        });
        rows.forEach(function (item) {
            tbody.appendChild(item);
        });

    }
    if(event.target.getAttribute('data-type')=='number') {
        rows.sort( function (a, b) {
            // console.log(a.lastElementChild);
            if(+a.firstElementChild.innerHTML > +b.firstElementChild.innerHTML) {
                return 1;
            }
            if(+a.firstElementChild.innerHTML < +b.firstElementChild.innerHTML) {
                return -1;
            }
            return 0;
        });
        rows.forEach(function (item) {
            tbody.appendChild(item);
        });

    }
});