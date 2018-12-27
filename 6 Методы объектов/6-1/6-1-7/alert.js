'use strict'

let calculator = {
    a: '',
    b: '',
    read: function () {
       this.a= Number(prompt('please input value 1',''));
       this.b= Number(prompt(' please input value 2', ''));
    } ,
     sum: function(){
        return this.a+this.b;
     },
     mul: function () {
         return this.a*this.b;
     }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );