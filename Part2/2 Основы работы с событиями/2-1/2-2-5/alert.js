'use strict';
//получим массив кнопок
let buttons= [...document.querySelectorAll('.remove-button')];
buttons.forEach((but)=>{
	but.onclick=function(){
		let el=this.parentNode;
		el.parentNode.removeChild(el);
	}
});