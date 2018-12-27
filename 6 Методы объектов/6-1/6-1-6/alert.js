'use strict'

let name = "";

let user = {
    name: "Василий",

    export: function() {
        return {
            value: this
        };
    }

};

alert( user.export().value.name );
// user.export() вернет объект с ключем  value и значением  this
//объект.value вернет значние ключа- это сам объект юзер
// у юзера свойство имя вернет имя- Василий