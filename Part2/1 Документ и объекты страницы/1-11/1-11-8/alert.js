'use strict'
function createTree(container, obj){
  container.appendChild(createTreeDom(obj));
}

function createTreeDom(obj) {
    //инверсная логика .если объект пустой- ничего не делаем
    if(isObjectEmpty(obj)) {
      return;
    }
    let ul = document.createElement('ul');
    for(let key in obj) {
      let li=document.createElement('li');
      li.innerHTML=key;
      //если ключ является сам объектом
        let childrenUl = createTreeDom(obj[key]);
        if(childrenUl) {
          li.appendChild(childrenUl);
        }
      ul.appendChild(li);
    }
    return ul;
}
//определяем пустой ли объект
function isObjectEmpty(obj) {
    for(let key in obj) {
      return false;
    }
    return true;
}
let data = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },

  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
};

let container = document.querySelector('#container');
createTree(container, data); // создаёт