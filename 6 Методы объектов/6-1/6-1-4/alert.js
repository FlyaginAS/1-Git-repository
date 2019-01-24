'use strict';

let user = {
    firstName: "Василий",

    export: this
};

alert( user.export.firstName );
//мда снова ошибся- что выведет Василий
//выведет undefinied так как фунуций здсь нет, получается this- глобальный объект, то есть window