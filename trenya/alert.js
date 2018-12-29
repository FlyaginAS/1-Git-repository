"use strict";
let person1 = {
    name: 'Igor',
    age: 32,
    info: {
        bonus: 30
    }
}
let person2 = {
    age: 32,
    name: 'Igor',
    info: {
        bonus: 30
    }
}
function deepEqual(value1, value2) {
    if (value1 === value2) {
        return true;
    }
    if (value1 === null || value2 === null) {
        return false;
    }
    if (typeof  value1 !== 'object' || typeof  value2 !== 'object') {
        return false;
    }
    if (Object.keys(value1).length !== Object.keys(value2).length) {
        return false;
    }
    /*return Object.keys(value1).every((key) => {
        return deepEqual(value1[key], value2[key])
    });*/
    //разобрался со стрелочными функциями, переписал код без стрелочной
    //плюс разобрался с рекурсией.
    return Object.keys(value1).every(function(key){
        return deepEqual(value1[key], value2[key])
    });
}

console.log(deepEqual(person1,  person2));
