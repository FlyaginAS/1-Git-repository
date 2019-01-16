'use strict'
/*
* Есть пустой узел DOM elem.

Одинаковый ли результат дадут эти скрипты?

Первый:

elem.appendChild(document.createTextNode(text));
Второй:

elem.innerHTML = text;
Если нет – дайте пример значения text, для которого результат разный.

Ответ:  InnerHTML вставит текст, распознавая теги, а createTextNode только текст
* */