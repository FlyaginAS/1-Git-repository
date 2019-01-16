'use strict';
/*
*
* Для любого документа сделаем следующее:

var aList1 = document.getElementsByTagName('a');
var aList2 = document.querySelectorAll('a');
Что произойдёт со значениями aList1.length, aList2.length,
если в документе вдруг появится ещё одна ссылка <a href="#">...</a>?*/

//getElementsByTagName – живая коллекция
//querySelector возвращает статичный список узлов