'use strict';


let id=null;
function debounce(f, ms) {
    return function (...args) {
        clearTimeout(id);
        id = setTimeout(f.bind(this, ...args), ms);
    }
}