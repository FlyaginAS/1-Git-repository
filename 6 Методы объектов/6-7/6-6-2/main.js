'use strict';
/*
Что выведет этот код?

function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();
*/ Ответ вася так как второй контекст  петя ставится уже для обертки

function f() {
    alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();