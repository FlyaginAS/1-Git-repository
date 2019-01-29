'use strict';

function CoffeeMachine(power, capacity) {
    let waterAmount = 0;

    this.waterAmount = function(amount) {
        // вызов без параметра, значит режим геттера, возвращаем свойство
        if (!arguments.length) return waterAmount;

        // иначе режим сеттера
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };

}

let coffeeMachine = new CoffeeMachine(1000, 500);

// пример использования
coffeeMachine.waterAmount(450);
alert( coffeeMachine.waterAmount() ); // 450