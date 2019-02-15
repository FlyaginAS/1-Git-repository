'use strict';
export let obj = {div: document.querySelector('.root')};
export  class List {
    constructor(obj) {
        this.root=obj.div;
    }
    _render() {
        this.root.innerHTML=`
    <ul>Это простой список
    <li>ktvtyn 1</li>
    <li>ktvtyn 2</li>
    <li>ktvtyn 3</li>
</ul>
    `;
    }
}