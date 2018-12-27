'use strict'
let calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );

function Calculator() {
    this.read= function () {
        this.a= Number(prompt('please input  value1:', ''));
        this.b= Number(prompt('please input value2:', ''));
    }
    this.sum= function () {
        return this.a+this.b;
    }
    this.mul= function () {
        return this.a*this.b;
    }
}
