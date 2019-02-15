'use strict';
/*

*/
// let slider = new Slider({
//     elem: document.getElementById('slider')
// });
//
// function Slider(options) {
//     let elem = options.elem;
//     let thumbElem = elem.querySelector('.thumb');
//
//     let sliderCoords, thumbCoords, shiftX, shiftY;
//
//     elem.ondragstart = function() {
//         return false;
//     };
//
//     elem.onmousedown = function(event) {
//         if (event.target.closest('.thumb')) {
//             startDrag(event.clientX, event.clientY);
//             return false; // disable selection start (cursor change)
//         }
//     };
//
//     function startDrag(startClientX, startClientY) {
//         thumbCoords = thumbElem.getBoundingClientRect();
//         shiftX = startClientX - thumbCoords.left;
//         shiftY = startClientY - thumbCoords.top;
//
//         sliderCoords = elem.getBoundingClientRect();
//
//         document.addEventListener('mousemove', onDocumentMouseMove);
//         document.addEventListener('mouseup', onDocumentMouseUp);
//     }
//
//
//
//     function moveTo(clientX) {
//         // вычесть координату родителя, т.к. position: relative
//         let newLeft = clientX - shiftX - sliderCoords.left;
//
//         // курсор ушёл вне слайдера
//         if (newLeft < 0) {
//             newLeft = 0;
//         }
//         let rightEdge = elem.offsetWidth - thumbElem.offsetWidth;
//         if (newLeft > rightEdge) {
//             newLeft = rightEdge;
//         }
//
//         thumbElem.style.left = newLeft + 'px';
//     }
//
//
//     function onDocumentMouseMove(e) {
//         moveTo(e.clientX);
//     }
//
//     function onDocumentMouseUp() {
//         endDrag();
//     }
//
//
//     function endDrag() {
//         document.removeEventListener('mousemove', onDocumentMouseMove);
//         document.removeEventListener('mouseup', onDocumentMouseUp);
//     }
//
// }
////////////////////////////////////////////////////////////////////////
class Slider {
    constructor(options){
        this._elem = options.elem;
        this._thumbElem = this._elem.querySelector('.thumb');

        this._sliderCoords, this._thumbCoords, this._shiftX, this._shiftY;

        this._elem.ondragstart = function() {
            return false;
        };
        let that=this;
        this._elem.onmousedown = function(event) {
            if (event.target.closest('.thumb')) {
                that._startDrag(event.clientX, event.clientY);
                return false; // disable selection start (cursor change)
            }
        };
    }
   _startDrag(startClientX, startClientY) {
       let that=this;
        this._thumbCoords = this._thumbElem.getBoundingClientRect();
       this._shiftX = startClientX - this._thumbCoords.left;
       this._shiftY = startClientY - this._thumbCoords.top;

       this.sliderCoords = this._elem.getBoundingClientRect();

        document.addEventListener('mousemove', that._onDocumentMouseMove);
        document.addEventListener('mouseup', that._onDocumentMouseUp);
    }



    _moveTo(clientX) {
        // вычесть координату родителя, т.к. position: relative
        let newLeft = clientX - this._shiftX - this._sliderCoords.left;

        // курсор ушёл вне слайдера
        if (newLeft < 0) {
            newLeft = 0;
        }
        let rightEdge = this._elem.offsetWidth - this._thumbElem.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        this._thumbElem.style.left = newLeft + 'px';
    }


    _onDocumentMouseMove(e) {
        let that=this;
        that._moveTo(e.clientX);
    }

    _onDocumentMouseUp() {
        let that=this;
        that._endDrag();
    }


    _endDrag() {
        document.removeEventListener('mousemove', this._onDocumentMouseMove);
        document.removeEventListener('mouseup', this._onDocumentMouseUp);
    }
}


let slider = new Slider({
    elem: document.getElementById('slider')
});