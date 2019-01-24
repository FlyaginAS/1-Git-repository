'use strict';
/*

*/
function work(a, b) {
    alert( a + b ); // work - произвольная функция
}



let log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (let i = 0; i < log.length; i++) {
    let args = log[i]; // массив из аргументов i-го вызова
    alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}

function makeLogging(f, log) {
    /* ваш код */
    return function wrapper(...rest) {
        log.push(rest);
        return f.apply(this, rest);
    };
}
