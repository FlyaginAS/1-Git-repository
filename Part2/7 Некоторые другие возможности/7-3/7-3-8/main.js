'use strict';
/*

*/
debugger;

function debounce(f, ms) {
    let id;
    return function (...args) {
        clearTimeout(id);
        id = setTimeout(f.bind(this, ...args), ms);
    }
}
function f(x) {
    console.log( x );
}

let g = debounce(f, 1000);

g(1); // вызов отложен на 1000 мс
g(2); // предыдущий отложенный вызов игнорируется, текущий (2) откладывается на 1000 мс

// через 1 секунду будет выполнен вызовg(2)

setTimeout( function() { g(3) }, 1100); // через 1100 мс отложим вызов еще на 1000 мс
setTimeout( function() { g(4) }, 1200); // игнорируем вызов (3)