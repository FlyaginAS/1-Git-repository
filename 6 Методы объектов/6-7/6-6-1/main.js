'use strict';
/*
Что выведет функция?

function f() {
  alert( this );
}

var user = {
  g: f.bind("Hello")
}

user.g();
*/
//Ответ  контекстом станет хеллоу-выведет хеллоу
function f() {
    alert( this );
}

let user = {
    g: f.bind("Hello")
}

user.g();