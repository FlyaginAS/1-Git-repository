'use strict';
/*
Какие значения будут выводиться в коде ниже?

var animal = {
  jumps: null
};
var rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;

alert( rabbit.jumps ); // ? (1)

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)

delete animal.jumps;

alert( rabbit.jumps ); // ? (3)
*/
//1-  true
//2- null
//3- undef
