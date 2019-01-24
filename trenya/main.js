'use strict';
/*

*/
let user = {
   f: function () {
       function g() {
           console.log(this);
       }
       g();
   } ,
};
user.f();