'use strict';
/*

*/
function Hamster() {
    this.food = [];// пустой "живот"
}



Hamster.prototype.found = function(something) {
    this.food.push(something);
};

// Создаём двух хомяков и кормим первого
let speedy = new Hamster();
let lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

alert( speedy.food.length ); // 2
alert( lazy.food.length ); // 2 (!??)
// массив food надо создавать не в прототипе-иначе он общийна всех хомаков а в объекте. Сделаем это!