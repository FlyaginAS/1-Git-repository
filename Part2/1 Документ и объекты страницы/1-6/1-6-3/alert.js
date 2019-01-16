'use strict';
function bench(f, times) {
    let d = new Date();
    for (let i = 0; i < times; i++) f();
    return new Date() - d;
}


function runGetList() {
    let results = document.getElementsByTagName('p');
    let len = results.length;
    for (let i = 0; i < len; i++) {
        let elem = results[i];
    }
}

function runQueryList() {
    let results = document.querySelectorAll('p');
    let len = results.length;
    for (let i = 0; i < len; i++) {
        let elem = results[i];
    }
}


function log(msg) {
    alert(msg);
}


log(`getElementsByTagName: ${ bench(runGetList, 10000)}`);
log(`querySelectorAll:   ${bench(runQueryList, 10000)}`);