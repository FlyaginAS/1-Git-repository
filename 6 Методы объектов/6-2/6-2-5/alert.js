'use strict'

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
console.log(sum(1)(2) );
console.log(sum(0)(1)(2)(3)(4)(5) );
function sum(a ) {
    let total= a;
    function f(b) {
        total+=b;
        return f;
    }
    f.toString= function () {
        return total;
    }
    return f;
    //не знаю
}

