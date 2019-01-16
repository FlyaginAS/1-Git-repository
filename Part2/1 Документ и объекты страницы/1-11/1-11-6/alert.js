'use strict';
/*
Напишите интерфейс для создания списка.

    Для каждого пункта:

    Запрашивайте содержимое пункта у пользователя с помощью prompt.
    Создавайте пункт и добавляйте его к UL.
    Процесс прерывается, когда пользователь нажимает ESC или вводит пустую строку.
    Все элементы должны создаваться динамически.

    Если посетитель вводит теги – пусть в списке они показываются как обычный текст.
*/
//создали сам список
let ul = document.createElement('ul');
document.body.appendChild(ul);
while(true) {
    let input = prompt('Введите содержимое li', '');
    if(input==='' || input===null) {
        break;
    }
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input));// чтобы теги как текст
    ul.appendChild(li);
}

