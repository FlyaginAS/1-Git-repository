'use strict';
/*

*/
function positionAt(anchor, position, elem) {

    let anchorCoords = anchor.getBoundingClientRect();

    switch (position) {
        case "top":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top - elem.offsetHeight + pageYOffset+"px";
            break;

        case "right":
            elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
            elem.style.top = anchorCoords.top +pageYOffset+ "px";
            break;

        case "bottom":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + anchor.offsetHeight +pageYOffset+ "px";
            break;
    }

}

/**
 * Показывает заметку с текстом html на позиции position
 * относительно элемента anchor
 */
function showNote(anchor, position, html) {

    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.appendChild(note);

    positionAt(anchor, position, note);
}

// проверка работоспособности
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "заметка сверху");
showNote(blockquote, "right", "заметка справа");
showNote(blockquote, "bottom", "заметка снизу");


