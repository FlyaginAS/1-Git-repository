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
        this.elem = options.elem;
        this.thumbElem = this.elem.querySelector('.thumb');

        this.sliderCoords, this.thumbCoords, this.shiftX, this.shiftY;

        this.elem.ondragstart = function() {
            return false;
        };
        let that=this;
        this.elem.onmousedown = function(event) {
            if (event.target.closest('.thumb')) {
                that.startDrag(event.clientX, event.clientY);
                return false; // disable selection start (cursor change)
            }
        };
    }
   startDrag(startClientX, startClientY) {
       let that=this;
        this.thumbCoords = this.thumbElem.getBoundingClientRect();
       this.shiftX = startClientX - this.thumbCoords.left;
       this.shiftY = startClientY - this.thumbCoords.top;

       this.sliderCoords = this.elem.getBoundingClientRect();

        document.addEventListener('mousemove', that.onDocumentMouseMove);
        document.addEventListener('mouseup', that.onDocumentMouseUp);
    }



    moveTo(clientX) {
        // вычесть координату родителя, т.к. position: relative
        let newLeft = clientX - this.shiftX - this.sliderCoords.left;

        // курсор ушёл вне слайдера
        if (newLeft < 0) {
            newLeft = 0;
        }
        let rightEdge = this.elem.offsetWidth - this.thumbElem.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        this.thumbElem.style.left = newLeft + 'px';
    }


    onDocumentMouseMove(e) {
        this.moveTo(e.clientX);
    }

    onDocumentMouseUp() {
        this.endDrag();
    }


    endDrag() {
        document.removeEventListener('mousemove', onDocumentMouseMove);
        document.removeEventListener('mouseup', onDocumentMouseUp);
    }
}


let slider = new Slider({
    elem: document.getElementById('slider')
});