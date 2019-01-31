'use strict';
/*

*/
let head = {
    glasses: 1
};

let table = {
    pen: 3
};

let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000
};
/***************************************************/
pockets.__proto__=bed;
bed.__proto__=table;
table.__proto__=head;
console.log(pockets.pen, bed.glasses, table.money);
//очевидно быстрее head.glasses
//ошибся
/*В современных браузерах, с точки зрения производительности, нет разницы, брать
свойство из объекта или прототипа. Они запоминают, где было найдено свойство и в
следующий раз при запросе, к примеру, pockets.glasses начнут искать сразу в прототипе (head).*/
