'use strict';
/*
Найдите ошибку в прототипном наследовании. К чему она приведёт?
*/
function Animal(name) {
    this.name = name;

    this.walk = function() {            // метод надо объявлять в прототипе, теперь рэббит ходит-метод есть в объекте-он не будет искаться в прототипе
        alert( "ходит " + this.name );
    };

}

function Rabbit(name) {
    Animal.apply(this, arguments);
}
Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.walk = function() {
    alert( "прыгает " + this.name );
};

let rabbit = new Rabbit("Кроль");
rabbit.walk();