'use strict';
/*

*/
function Clock(options) {
    this._template = options.template;
}

Clock.prototype._render = function render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let min = date.getMinutes();
    if (min < 10) min = '0' + min;

    let sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    let output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

    console.log(output);
};

Clock.prototype.stop = function() {
    clearInterval(this._timer);
};

Clock.prototype.start = function() {
    this._render();
    let self = this;
    this._timer = setInterval(function() {
        self._render();
    }, 1000);
};
//***********************************************************my
function ExtendedClock(obj) {
    Clock.call(this, obj);
    this.prec=obj.precision;
}
ExtendedClock.prototype= Object.create(Clock.prototype); // унаследовали методы
ExtendedClock.prototype.start= function () {    // переопредилили метод
    this._render();
    //let self = this;
    this._timer = setInterval(this._render.bind(this), this.prec);
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*let clock = new Clock({
    template: 'h:m:s'
});
clock.start();*/
/////////////////////////
let lowResolutionClock = new ExtendedClock({
    template: 'h:m:s',
    precision: 10000
});

lowResolutionClock.start();