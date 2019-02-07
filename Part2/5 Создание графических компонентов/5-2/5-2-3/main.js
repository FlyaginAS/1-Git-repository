'use strict';
/*

*/
// let ul = document.querySelector('ul');
//
// let lastClickedLi = null;
//
// // --- обработчики ---
//
// ul.onclick = function(event) {
//     let target = event.target;
//
//     // возможно, клик был внутри списка UL, но вне элементов LI
//     if (target.tagName != "LI") return;
//
//     // для Mac проверяем Cmd, т.к. Ctrl + click там контекстное меню
//     if (event.metaKey || event.ctrlKey) {
//         toggleSelect(target);
//     } else if (event.shiftKey) {
//         selectFromLast(target);
//     } else {
//         selectSingle(target);
//     }
//
//     lastClickedLi = target;
// }
//
// ul.onmousedown = function() {
//     return false;
// };
//
// // --- функции для выделения ---
//
// function toggleSelect(li) {
//     li.classList.toggle('selected');
// }
//
// function selectFromLast(target) {
//     let startElem = lastClickedLi || ul.children[0];
//
//     let isLastClickedBefore = startElem.compareDocumentPosition(target) & 4;
//
//     if (isLastClickedBefore) {
//         for (let elem = startElem; elem != target; elem = elem.nextElementSibling) {
//             elem.classList.add('selected');
//         }
//     } else {
//         for (let elem = startElem; elem != target; elem = elem.previousElementSibling) {
//             elem.classList.add('selected');
//         }
//     }
//     elem.classList.add('selected');
// }
//
//
//
//
// function deselectAll() {
//     for (let i = 0; i < ul.children.length; i++) {
//         ul.children[i].classList.remove('selected');
//     }
// }
//
// function selectSingle(li) {
//     deselectAll();
//     li.classList.add('selected');
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class ListSelect {
    constructor(obj){
        this._ul=obj.elem;
        let that=this;
        this._ul.insertAdjacentHTML('afterEnd', '<button>Get sel li</button>');
        //let button = document.querySelector('button');
        //console.log(button);
        document.body.addEventListener('click', (event)=>{
            if (event.target.closest('button')) {
                that.getSelected();
            }
        });
        this._lastClickedLi = null;
        this._ul.onclick = function(event) {
            let target = event.target;

            // возможно, клик был внутри списка UL, но вне элементов LI
            if (target.tagName != "LI") return;

            // для Mac проверяем Cmd, т.к. Ctrl + click там контекстное меню
            if (event.metaKey || event.ctrlKey) {
                that._toggleSelect(target);
            } else if (event.shiftKey) {
                that._selectFromLast(target);
            } else {
                that._selectSingle(target);
            }

            that._lastClickedLi = target;
        };

        this._ul.onmousedown = function() {
            return false;
        };
    };
    getSelected(){
        let arr=[...document.querySelectorAll('.selected')];
        arr= arr.map((item)=>{
            return item.innerHTML;
        });
        console.log(arr.join(', '));
    }

    _toggleSelect(li) {
        li.classList.toggle('selected');
    }

    _selectFromLast(target) {
        let startElem = this._lastClickedLi || this._ul.children[0];

        let isLastClickedBefore = startElem.compareDocumentPosition(target) & 4;

        if (isLastClickedBefore) {
            for (let elem = startElem; elem != target; elem = elem.nextElementSibling) {
                elem.classList.add('selected');
            }
        } else {
            for (let elem = startElem; elem != target; elem = elem.previousElementSibling) {
                elem.classList.add('selected');
            }
        }
        target.classList.add('selected');
    }




    _deselectAll() {
        for (let i = 0; i < this._ul.children.length; i++) {
            this._ul.children[i].classList.remove('selected');
        }
    }

    _selectSingle(li) {
       this._deselectAll();
        li.classList.add('selected');
    }
}

let listSelect = new ListSelect({
    elem: document.querySelector('ul')
});
 //listSelect.getSelected()