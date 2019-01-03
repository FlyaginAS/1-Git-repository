'use strict'
var foo = {
    toString: function() {
        return 'foo';
    },
    valueOf: function() {
        return 2;
    }
};

alert( foo );       //'foo' алерту нужна строка-приводится к строке
alert( foo + 1 );       //3   операция сложение -оперытору + нужно число
alert( foo + "3" );     //'foo3'  на свмом деле ''23'' понял, разобрал