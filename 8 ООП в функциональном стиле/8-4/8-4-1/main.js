'use strict';
/*
инкапсуляция за счет замыкания
*/
let coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.run(); // ошибка, кофеварка выключена!


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
            setTimeout(onReady, 1000);
        }

    };

}