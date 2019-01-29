'use strict';
/*

*/
function printNumbersTimeout() {
    let i=1;
    let id = setTimeout(function  log() {
        if(i<21)  {
            console.log(i++);
            id=setTimeout(log, 100);
        }

    }, 100)
}
printNumbersTimeout();