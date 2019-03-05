'use strict';

// let  lis= document.querySelectorAll('li'); //получили коллекцию элтов ли
// //
// // for( let i=0; i<lis.length; i++) {
// //     let title= lis[i].firstChild.data; // ПОЛУЧИЛИ текст из текстового узла каждого ли
// //     title=title.trim();  // обрезали пробелы
// //     console.log(title);
// //     //количество вложенных ли
// //     let count = lis[i].querySelectorAll('li').length;
// //     console.log(count);
// //
// // }
// let arrLi=[...document.querySelectorAll('li')];
// for(let i =0; i< arrLi.length; i++) {
//     let li = arrLi[i];
//     console.log(`Text= ${li.firstChild.data.trim()} elements=${[...li.querySelectorAll('li')].length}`);
//
// }
let time1= new Date();
for(let i=0; i< 10000; i++) {
    let a = i +35593*132;
}
let time2= new Date();
console.log(time2-time1);