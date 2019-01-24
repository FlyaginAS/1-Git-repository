'use strict';
/*

*/
function delay(f, ms) {

    return function(...args) {
        let savedThis = this;
        //var savedArgs = arguments;

        setTimeout(function() {
            f.apply(savedThis, args);
        }, ms);
    };

}
function f(x, y) {
    console.log( `x= ${x}, y = ${y}`);
    console.log(this);
}


let user = {
    fun:  delay(f, 2000),
}
user.fun('Это х','это у');




