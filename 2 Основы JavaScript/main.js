'use strict';
/*

*/
let user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let arr = JSON.parse(user);
console.log(arr);