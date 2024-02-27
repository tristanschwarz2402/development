console.log("servus");

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
    }
}

export function getStoreEntrys() {
    console.log('load Local Storage...');    
    
    const entrys = [];

    for (let localStorageIndex=0; localStorageIndex<localStorage.length; localStorageIndex++) {
        let storageIndex = localStorage.key(localStorageIndex);
        entrys.push({index:storageIndex, value:localStorage.getItem(storageIndex)});
    }

    return entrys;
}

function loadLocalStorage() {
    console.log('load Local Storage...');    
    
    for (let localStorageIndex=0; localStorageIndex<localStorage.length; localStorageIndex++) {
        let storageIndex = localStorage.key(localStorageIndex);
        console.log(storageIndex + ':' + localStorage.getItem(storageIndex));
        console.log('storageIndex: ' + storageIndex);
        insertIntoTable(localStorage.getItem(storageIndex),storageIndex);
    }
}

function insertIntoTable(insertTable, localStorageId) {
    console.log('load Value:' + insertTable + ' into Table...');
    const fullTableId = "Entry" + localStorageId;
    const createTableNoteContainer = '<table id="' + fullTableId + '"><tr><td><input class="noteEntry" type="text" value="' + insertTable + '" onkeypress="updateEntry(event, ' + localStorageId + ')"></td><td align="right"><button onclick="removeEntry(' + localStorageId + ')" class="button">X</button></td></tr></table>';
    document.getElementById('noteContainer').innerHTML += createTableNoteContainer;
}

function getLocalStorageLastIndex() {
    for (let localStorageIndex=1; localStorageIndex=localStorage.length; localStorageIndex++) {
        localStorageIndex++;
        return localStorageIndex;
    } 
}

function removeEntry(localStorageId) {
    const fullTableId = "Entry" + localStorageId;
    document.getElementById(fullTableId).innerHTML = '';
    localStorage.removeItem(localStorageId);
}

function updateEntry(event, localStorageId) {
    if (event.key == 'Enter') {
        localStorage.setItem(localStorageId, event.target.value);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadLocalStorage();
});
