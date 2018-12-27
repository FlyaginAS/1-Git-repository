'use strict'
let obj={};
function A() {

    return obj;
}
function B() {
    return obj;
}

var a = new A;
var b = new B;

alert( a == b ); // true
//объекты равны в одном случае- если это олин и тот же объект