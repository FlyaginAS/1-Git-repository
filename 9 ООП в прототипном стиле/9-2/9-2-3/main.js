'use strict';
/*

*/
function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function() {
    alert( this.name );
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();     //  "Rabbit" функция вызывается на объекте рэббит-конектс рэббит
Rabbit.prototype.sayHi();      //undef  у объекта Rabbit.prototype нет имени
Object.getPrototypeOf(rabbit).sayHi();      //undef запись аналогична предыдущей
rabbit.__proto__.sayHi();       //undef  запись аналогична предыдущей