'use strict';
/*
инкапсуляция за счет замыкания
*/
let user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert( user.getFullName() ); // Петя Иванов





function User() {
    let firstName;
    let surname;
    this.setFirstName = function (first) {
        firstName=first;
    };
    this.setSurname = function (sur) {
        surname=sur;
    };
    this.getFullName= function () {
        return `${firstName} ${surname}`;
    };
}
