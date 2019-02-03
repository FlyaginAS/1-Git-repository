'use strict';
/*

*/
setInterval(clock,  1000);
function clock(){
    let date= new Date();
    let  h= (date.getHours()< 10) ? `0${date.getHours()}` : `${date.getHours()}`;
    let  m= (date.getMinutes()< 10) ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
    let  s= (date.getSeconds()< 10) ? `0${date.getSeconds()}` : `${date.getSeconds()}`;
    //console.log(`${h}:${m}:${s}`);
    //найдем наши спаны
    innHtml(h,m,s);
}
function innHtml(h,m,s) {
    let htmlH=document.querySelector('.clock__h');
    let htmlM=document.querySelector('.clock__m');
    let htmlS=document.querySelector('.clock__s');
    //вставим в спаны  значения времени
    htmlH.innerHTML=`${h}`;
    htmlM.innerHTML=`${m}`;
    htmlS.innerHTML=`${s}`;
}
////////////////////////////////////////////////////////////////////////////

