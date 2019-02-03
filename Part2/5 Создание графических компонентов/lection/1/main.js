'use strict';
/*
function Component(element) {
    this._element=element;
}
Component.prototype.hide = function () {
    this._element.hidden= true;
};
Menu._counter=0;
function Menu(element, title, items) {
    Component.call(this, element);
    Menu._counter++;
    this._element= element;
    this._title=title;
    this._items=items;
    this._render();

    this._element.querySelector('.menu__title')
        .addEventListener('click', ()=>{
            element.classList.toggle('menu--closed')
        });
}
Menu.prototype= Object.create(Component.prototype);
Menu.prototype.constructor= Menu;
Menu.prototype.hide = function(){
   console.log('animation');
   Component.prototype.hide.call(this);
};
Menu.prototype.getCount=function(){
    return Menu._counter;
};
Menu.prototype._render = function (){
    this._element.innerHTML = `
    <span class="menu__title">${this._title}</span>
	<ul class="menu__items-list">
	${this._items.map((item)=>`<li class="menu__item">${item}</li>`).join(' ')}
	</ul>
    `;
};
Menu.prototype.close = function (){
    this._element.classList.add('menu--closed');
};
Menu.prototype.toggle = function (){
    this._element.classList.toggle('menu--closed');
};

let el1 = document.querySelector('#menu1');
let el2 = document.querySelector('#menu2');
let menu1 = new Menu(el1, 'Main Menu', ['User', 'Account']);
let menu2 = new Menu(el2, 'SideBar Menu', ['User', 'Account', 'Orders', 'JavaScript']);
menu1.close();
setTimeout(function (){
    menu2.hide();
}, 3000);
console.log(menu1.getCount());
*/
class Component {
    constructor(element) {
        this._element=element;
    }
    hide() {
        this._element.hidden= true;
    }
}
class Menu  extends  Component{
    constructor(element, title, items){
        super( element);
        if(!Menu._counter) {
            Menu._counter=0;
        }
        Menu._counter++;
        this._title=title;
        this._items=items;
        this._render();
        this._element.querySelector('.menu__title')
            .addEventListener('click', ()=>{
                element.classList.toggle('menu--closed')
            });
    }

    hide(){
        console.log('animation');
        super.hide()        //Component.prototype.hide.call(this);
    }
   getCount(){
        return Menu._counter;
    }
    _render (){
        this._element.innerHTML = `
    <span class="menu__title">${this._title}</span>
	<ul class="menu__items-list">
	${this._items.map((item)=>`<li class="menu__item">${item}</li>`).join(' ')}
	</ul>
    `;
    }
    close (){
        this._element.classList.add('menu--closed');
    }
    toggle (){
        this._element.classList.toggle('menu--closed');
    }
}

let el1 = document.querySelector('#menu1');
let el2 = document.querySelector('#menu2');
let menu1 = new Menu(el1, 'Main Menu', ['User', 'Account']);
let menu2 = new Menu(el2, 'SideBar Menu', ['User', 'Account', 'Orders', 'JavaScript']);
menu1.close();
setTimeout(function (){
    menu2.hide();
}, 3000);
console.log(menu1.getCount());

