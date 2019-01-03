'use strict'
/*
* Какая из функций будет вызвана?
* alert(2)
* */
function f() {
    alert(1)
}

var obj = {
    f: function() {
        alert(2)
    }
};

with(obj) {
    f();
}
