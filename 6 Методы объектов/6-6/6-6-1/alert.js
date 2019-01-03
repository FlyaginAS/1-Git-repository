"use strict";
function sumArgs() {
    let f= function (a, b) {
        return a+b;
    }
    let arr= [].slice.call(arguments);
    return arr.reduce(f);
}
alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива