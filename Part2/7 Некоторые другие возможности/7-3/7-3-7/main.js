'use strict';
/*

*/
function f(x) {
    alert( x );
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд


/*function delay(f, ms) {
    return function (...args) {
        return setTimeout(f.bind(this, ...args), ms);
    }
}*/
/*function delay(f, ms) {
    return function (...args) {
        return setTimeout(()=>{f.call(this, ...args)}, ms);
    }
}*/
function delay(f, ms) {
    return function (...args) {
        let th= this;
        return setTimeout(function () {
            f.call(th, ...args);
        }, ms);
    }
}





