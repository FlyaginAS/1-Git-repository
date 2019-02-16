'use strict';
/*

*/

class Rabbit {
    constructor() {
        this.rabbit = document.querySelector('#rabbit');
    }

    hide() {
        let event = new Event('hide');
        if (!rabbit.dispatchEvent(event)) {
            alert('действие отменено обработчиком');
        } else {
            this.rabbit.hidden = true;
        }
        this.rabbit.addEventListener('hide', function (event) {
            if (confirm("Вызвать preventDefault?")) {
                event.preventDefault();
            }
        });

    }
}

setTimeout( new  Rabbit().hide, 2000);
