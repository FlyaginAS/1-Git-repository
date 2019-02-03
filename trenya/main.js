'use strict';
class User {
    constructor(name, surname){
        this.name=name;
        this.surname=surname;
    }
    say(){
        console.log(`My name is ${this.name}`);
    }
    get fullName (){
        return `${this.name} ${this.surname}`;
    }
    set fullName(full) {
        [this.name, this.surname]=full.split(' ');
    }

}
let admin= new User('Vasya');
admin.say();
console.log(admin.fullName);
admin.fullName='Cat Catter';
console.log(admin.fullName);
class Rabbit extends User {
    constructor() {
       super();
    }
    say(){
        super.say();
        console.log('its rabbit');
    }
}
let reb= new Rabbit('rab', 'rabber');
reb.say();

