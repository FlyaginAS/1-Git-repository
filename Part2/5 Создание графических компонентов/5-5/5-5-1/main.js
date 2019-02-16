'use strict';
/*

*/

class User {
    constructor() {
        this.event = new CustomEvent('ho', { detail: 'privet ot Usera'});
    }
    say(){
        document.body.dispatchEvent(this.event);
    }
}
class Inos {
    constructor() {
        document.body.addEventListener('ho', ()=>{
            console.log(event.detail);
        })
    }
}

new Inos();
new  User().say();

