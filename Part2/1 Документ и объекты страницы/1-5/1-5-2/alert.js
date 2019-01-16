'use strict'

let  lis= document.querySelectorAll('li'); //получили коллекцию элтов ли

for( let i=0; i<lis.length; i++) {
    let title= lis[i].firstChild.data; // ПОЛУЧИЛИ текст из текстового узла каждого ли
    title=title.trim();  // обрезали пробелы
    console.log(title);
    //количество вложенных ли
    let count = lis[i].querySelectorAll('li').length;
    console.log(count);

}