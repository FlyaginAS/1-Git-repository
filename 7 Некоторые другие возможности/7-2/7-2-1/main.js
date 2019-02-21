'use strict';
/*

*/
let leader = {
    name: "Vasiliy Ivanovich",
    age: 35
};
let str = JSON.stringify(leader);
console.log(str);
console.log(JSON.parse(str));