'use strict';
/*

*/
function Menu(state) {
    this._state = state || Menu.STATE_CLOSED;
}

Menu.STATE_OPEN = 1;
Menu.STATE_CLOSED = 0;

Menu.prototype.open = function() {
    this._state = Menu.STATE_OPEN;
};

Menu.prototype.close = function() {
    this._state = Menu.STATE_CLOSED;
};

Menu.prototype._stateAsString = function() {
    switch (this._state) {
        case Menu.STATE_OPEN:
            return 'открыто';

        case Menu.STATE_CLOSED:
            return 'закрыто';
    }
};

Menu.prototype.showState = function() {
    alert(this._stateAsString());
};
///////////////////////////////////////////////////////////////////////
function AnimatingMenu(...args) {
    Menu.apply(this, args);

}
//наследую
AnimatingMenu.prototype= Object.create(Menu.prototype);
AnimatingMenu.prototype.constructor=AnimatingMenu;
AnimatingMenu.prototype.STATE_ANIMATING=2;
AnimatingMenu.prototype.open = function() {
    this._state = this.STATE_ANIMATING;
    let th=this;
    this._timeId = setTimeout(Menu.prototype.open.bind(th), 1000);
};
AnimatingMenu.prototype.close= function () {
    clearTimeout(this._timeId);
    Menu.prototype.close.apply(this);
};
AnimatingMenu.prototype._stateAsString= function () {
    if(this._state==this.STATE_ANIMATING) {
       return 'анимация';
    }   else {
        Menu.prototype._stateAsString.apply(this);
    }
};
// использование..

let menu = new AnimatingMenu();

menu.showState(); // закрыто

menu.open();
menu.showState(); // анимация

setTimeout(function() {
    menu.showState(); // открыто

    menu.close();
    menu.showState(); // закрыто (закрытие без анимации)
}, 1000);