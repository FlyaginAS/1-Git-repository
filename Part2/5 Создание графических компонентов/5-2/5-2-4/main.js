'use strict';
/*

*/
class Vouter {
    constructor(root){
       this._root= root;
       this._voute=0;
       this._render();
       this._addListener();
    }
    _addListener(){
        this._root.onmousedown=()=>false;
        this._root.addEventListener('click', (event)=>{
            if(event.target.closest('.down')) {
                this._voute--;
            } else if (event.target.closest('.up')) {
                this._voute++;
            }
            this._render();
        })
    }
    setVote(vote) {
        this._voute=vote;
        this._render();
    }
    _render(){
        this._root.innerHTML=`
        <div id="voter" class="voter">
    <span class="down">—</span>
    <span class="vote">${this._voute}</span>
    <span class="up">+</span>
</div>
        `;
    }
}
let root = document.querySelector('.root');
let vouter = new Vouter(root);
vouter.setVote(5);






// let obj;
// obj.elem= `
// <div id="voter" class="voter">
//     <span class="down">—</span>
//     <span class="vote">0</span>
//     <span class="up">+</span>
// </div>
// `;
// let vouter= new Vouter(root);