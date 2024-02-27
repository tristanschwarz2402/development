import { loadLocalStorage } from "./componentsStorage.js";

export function insertIntoTable(insertTable, localStorageId) {
    console.log('load Value:' + insertTable + ' into Table...');
    const fullTableId = "Entry" + localStorageId;
    const createTableNoteContainer = '<table id="' + fullTableId + '"><tr><td><input class="noteEntry" type="text" value="' + insertTable + '" onkeypress="updateEntry(event, ' + localStorageId + ')"></td><td align="right"><button onclick="removeEntry(' + localStorageId + ')" class="button">X</button></td></tr></table>';
    document.getElementById('noteContainer').innerHTML += createTableNoteContainer;
}

window.handleInput = function (textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

document.addEventListener('DOMContentLoaded', function() {
    loadLocalStorage();
});