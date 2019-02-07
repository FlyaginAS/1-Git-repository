'use strict';
/*

*/
class Clock {
    constructor(obj){
        this.elem= obj.elem;
        this._timeId=null;
        let that=this;
        this.elem.innerHTML=`
        <span class="clock__h">00</span>:<span class="clock__m">00</span>:<span class="clock__s">00</span>
        <p><button class="but-start">Старт</button><button class="but-stop">Стоп</button><button class="but-alert">Алерт</button></p>
        `;
        this.elem.addEventListener('click', function (event) {
            if(event.target.closest('.but-start')) {
                that.start();
            } else if (event.target.closest('.but-stop')){
                that.stop();
            } else if(event.target.closest('.but-alert')){
                Clock.alert();
            }
        });
    }
    start() {
        let th=this;
        this._timeId = setInterval(this._setClock.bind(th),  1000);
    }
    stop(){
        clearInterval(this._timeId);
    }
    static alert(){
        alert('Время после закрытия должно идти верное без сдвига');
    }
    _setClock() {
        let date= new Date();
        let  h= (date.getHours()< 10) ? `0${date.getHours()}` : `${date.getHours()}`;
        let  m= (date.getMinutes()< 10) ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
        let  s= (date.getSeconds()< 10) ? `0${date.getSeconds()}` : `${date.getSeconds()}`;

        let htmlH=this.elem.querySelector('.clock__h');
        let htmlM=this.elem.querySelector('.clock__m');
        let htmlS=this.elem.querySelector('.clock__s');
        //вставим в спаны  значения времени
        htmlH.innerHTML=`${h}`;
        htmlM.innerHTML=`${m}`;
        htmlS.innerHTML=`${s}`;
}
}

let clock = new Clock({
    elem: document.querySelector('#myClock1')
});

clock.start(); // старт
setTimeout(()=>clock.stop(), 3000); // стоп
