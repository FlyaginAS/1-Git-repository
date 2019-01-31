'use strict';
/*
Найдите ошибку в прототипном наследовании. К чему она приведёт?
*/
function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function() {
    alert( "ходит " + this.name );
};

function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype = Animal.prototype; //здесь ошибка общий прототип-теперь animal "прыгает! и ходит: "

Rabbit.prototype.walk = function() {
    alert( "прыгает! и ходит: " + this.name );
};