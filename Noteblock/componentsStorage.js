import { insertIntoTable } from "./componentsRender.js";

window.displayInputNote = function (event) {
    if (event.key == 'Enter') {
        const inputNoteValue = event.target.value;
        let loadedStorageIndex = getLocalStorageLastIndex();

        if (loadedStorageIndex === undefined) {
            loadedStorageIndex = 1;
        }

        insertIntoTable(inputNoteValue, loadedStorageIndex);

        localStorage.setItem(loadedStorageIndex, inputNoteValue);
        document.getElementById('inputNote').value = '';

        if (event.key === 'Enter') {
            event.preventDefault(); // Verhindert den Standardzeilenumbruch
        }
    }
}

export function loadLocalStorage() {
    console.log('load Local Storage...');    
    
    for (let localStorageIndex=0; localStorageIndex<localStorage.length; localStorageIndex++) {
        let storageIndex = localStorage.key(localStorageIndex);
        console.log(storageIndex + ':' + localStorage.getItem(storageIndex));
        console.log('storageIndex: ' + storageIndex);
        insertIntoTable(localStorage.getItem(storageIndex),storageIndex);
    }
}

function getLocalStorageLastIndex() {
    for (let localStorageIndex=1; localStorageIndex=localStorage.length; localStorageIndex++) {
        localStorageIndex++;
        return localStorageIndex;
    } 
}

window.removeEntry = function (localStorageId) {
    const fullTableId = "Entry" + localStorageId;
    document.getElementById(fullTableId).innerHTML = '';
    localStorage.removeItem(localStorageId);
}

window.updateEntry = function (event, localStorageId) {
    if (event.key == 'Enter') {
        localStorage.setItem(localStorageId, event.target.value);
    }
}


