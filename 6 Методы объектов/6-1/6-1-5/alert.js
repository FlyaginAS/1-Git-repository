'use strict'

let name = "";

let user = {
    name: "Василий",

    export: function() {
        return this;
    }

};

alert( user.export().name );
//должно вывести Василий- функция запомнила контекст, возвратит объект юзера