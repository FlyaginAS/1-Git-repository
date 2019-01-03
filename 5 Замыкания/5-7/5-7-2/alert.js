'use strict'
//Что выведет этот код?  3
var a = 1;

var obj = {
    b: 2
};

with(obj) {
    var b;
    alert( a + b );
}