'use strict';
/*

*/
let coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет


function Machine(power) {
    this._enabled = false;

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;
    };
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    let waterAmount = 0;
    let timerId;
    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };

    function onReady() {
        alert('Кофе готово!');
    }

    this.run = function() {

        if(!this._enabled) {
            console.log('error')
        } else{
            timerId = setTimeout(onReady, 1000);
        }
    };
    let oldDisable= this.disable;
    this.disable= function () {
        oldDisable.apply(this);
        clearTimeout(timerId);
    }
}