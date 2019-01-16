'use strict';
//нужно все через классы, но я решил все тут написать
let one=document.querySelector('.one');
let two =document.querySelector('.two');
let ul = document.querySelector('ul');
let a=document.querySelector('a');
//console.log(one, two, ul);
//сделаем стрелки зелеными
one.style.color= 'green';
two.style.color='green';
//по умолчанию скроем вторую
two.style.display='none';
//привяжем обработчик
a.addEventListener('click', menu);
let count=0;
function menu() {
	count=count +1;
	if(!count%2==0){
        one.style.display='none';
        two.style.display='';
        ul.style.display='block';
	}
	if(count%2==0){
        one.style.display='';
        two.style.display='none';
        ul.style.display='none';
	}

}