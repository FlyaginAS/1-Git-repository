'use strict'
let obj, method;

obj = {
    go: function() { alert(this); }
};

obj.go();            // (1) object

(obj.go)();          // (2) object

(method = obj.go)();      // (3) undefined

(obj.go || obj.stop)(); // (4) undefined
// как было сказано в теории "любая операция над результатом операции получения свойства,
// кроме вызова, приводит к потере контекста"