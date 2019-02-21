'use strict';
/*

*/
class Menu {
    constructor(options) {
        this.options=options ;
        let th=this;
    }
    getElem() {
        if (!elem) render();
        return elem;
    }
    render() {
        elem = document.createElement('div');
        elem.className = "menu";

        let titleElem = document.createElement('span');
        elem.appendChild(titleElem);
        titleElem.className = "title";
        titleElem.textContent = this.options.title;

        elem.onmousedown = function() {
            return false;
        };
        elem.onclick = function(event) {
            if (event.target.closest('.title')) {
                this.toggle();
            }
        }

}
    renderItems() {
        let items = options.items || [];
        let list = document.createElement('ul');
        items.forEach(function(item) {
            let li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
        elem.appendChild(list);
    }
     open() {
    if (!elem.querySelector('ul')) {
        renderItems();
    }
    elem.classList.add('open');
};

     close() {
    elem.classList.remove('open');
};

     toggle() {
    if (elem.classList.contains('open')) close();
    else open();
};
//использование
let menu = new Menu({
    title: "Сладости",
    items: [
        "Торт",
        "Пончик",
        "Пирожное",
        "Шоколадка",
        "Мороженое"
    ]
});
let elem = menu.getElem();

// вставить меню в нужное место страницы
document.body.appendChild(elem);
menu.toggle();
console.log(menu.elem);
console.log(menu);
