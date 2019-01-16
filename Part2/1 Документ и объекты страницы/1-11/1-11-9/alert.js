'use strict'
function createCalendar(id, year, month) {
    let elem = document.querySelector('#' + id); //элемент куда будем вставлять календарь
    let mon= month - 1; // месяц в скрипте с нуля
    let d = new Date(year, month);
    let table= '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
    //заполняем  строку пустыми ячейкаи до нашего дня
    for(let i=0; i<getDay(d); i++) {
        table += '<td></td>';
    }
    //заполняем  строку  датами
    while (d.getMonth() == mon) {  //пока мы внутри нашего месяца
        table += '<td>' + d.getDate() + '</td>'; //создали ячейку с датой

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }
    // добить таблицу пустыми ячейками, если нужно
    if (getDay(d) != 0) {
        for (var i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }
    // закрыть таблицу
    table += '</tr></table>';

    // только одно присваивание innerHTML
    elem.innerHTML = table;
}
function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}



createCalendar("calendar", 2012, 9)