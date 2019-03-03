'use strict';
/*

*/
class Animal {
    constructor(name) {
        this.name=name;
    }
    walk(){
        console.log(`i walk ${this.name}`);
    }
}
class Rabbit extends Animal {
    walk() {
        super.walk();
        alert("...and jump!");
    }
}

new Rabbit("Вася").walk();