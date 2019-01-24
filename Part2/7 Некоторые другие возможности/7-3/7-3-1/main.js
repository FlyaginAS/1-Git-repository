'use strict';
/*

*/
function printNumbersInterval() {
    let i=0;
    function log() {
        (i<21) ?  console.log(i++) : clearInterval(id);
    }
    let id = setInterval(log, 100);
}
printNumbersInterval();