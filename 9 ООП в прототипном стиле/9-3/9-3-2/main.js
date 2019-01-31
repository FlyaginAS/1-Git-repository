'use strict';
/*

*/
Function.prototype.defer= function (ms) {
    let th=this;
    return function(...args){
        setTimeout(th, ms, ...args);
    };
};

function f(a, b) {
    alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.