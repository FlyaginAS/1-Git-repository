'use strict';
/*

*/
class Menu {
    constructor(options) {
        this.elem = options.elem;
        let th=this;
        this.elem.onmousedown = function() {
            return false;
        };

        this.elem.onclick = function(event) {
            if (event.target.closest('.title')) {
                th.toggle();
            }
        };

    }
    toggle() {
        this.elem.classList.toggle('open');
    }

}
//использование
let menu = new Menu({
    elem: document.getElementById('sweets-menu')
});
menu.toggle();
console.log(menu.elem);
console.log(menu);
