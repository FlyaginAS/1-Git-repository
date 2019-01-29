'use strict';
/*

*/
debugger;
let f = function(a) {
    console.log(a)
};

// затормозить функцию до одного раза в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)

// когда пройдёт 1000 мс...
// выведет 3, промежуточное значение 2 игнорируется

function throttle(f, ms) {
    let id=null;
    return function (...args) {
        clearTimeout(id);
        if(id==null) {
            id=1;
            f.call(this, ...args);
        } else {
            id = setTimeout(f.bind(this, ...args), ms);
        }
        //id = setTimeout(f.bind(this, ...args), ms);
    }
}