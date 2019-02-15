'use strict';
/*

*/
function makeTable() {
    let tableHolder = document.getElementById('table-holder');

    let contents = '<thead><th>Имя</th><th>Фамилия</th><th>Отчество</th><th>Возраст</th></thead>';
    contents += '<tbody>';
    for (let i = 0; i < 100; i++) {
        contents += "<tr><td> ... </td><td>Разные</td><td>Данные</td><td>" + ((i + 50) % 30) + "</td></tr>";
    }
    contents += '</tbody>';

    tableHolder.innerHTML = '<table>' + contents + '</table>';
}
makeTable();
function sort1() {
    let tbody= document.querySelector('tbody');
    let rows= [...tbody.querySelectorAll('tr')];
    //console.log(rows);
    //tbody.innerHTML='';

    rows.sort(function(a, b) {
        return a.lastChild.innerHTML - b.lastChild.innerHTML;
    });
    for(let i=0; i<rows.length; i++) {
        tbody.appendChild(rows[i]);
    }
}
sort1();