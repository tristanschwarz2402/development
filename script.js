function displayInputNote(event) {
    if (event.key == 'Enter') {
        const inputNoteValue = event.target.value;
        insertIntoTable(inputNoteValue);
        let loadedStorageIndex = getLocalStorageLastIndex();

        if (loadedStorageIndex === undefined) {
            loadedStorageIndex = 1;
        }
        
        localStorage.setItem(loadedStorageIndex, inputNoteValue);
        document.getElementById('inputNote').value = '';
    }
}

function loadLocalStorage() {
    console.log('load Local Storage...');    
    
    for (let localStorageIndex=0; localStorageIndex<localStorage.length; localStorageIndex++) {
        let storageIndex = localStorage.key(localStorageIndex);
        console.log(storageIndex + ':' + localStorage.getItem(storageIndex));
        console.log('storageIndex: ' + storageIndex);
        insertIntoTable(localStorage.getItem(storageIndex));
    }
}

function insertIntoTable(insertTable) {
    console.log('load Value:' + insertTable + ' into Table...');
    const createTableNoteContainer = '<table><tr><td>' + insertTable + '</td></tr></table>';
    document.getElementById('noteContainer').innerHTML += createTableNoteContainer;
}

function getLocalStorageLastIndex() {
    for (let localStorageIndex=1; localStorageIndex=localStorage.length; localStorageIndex++) {
        localStorageIndex++;
        return localStorageIndex;
    } 
}

document.addEventListener('DOMContentLoaded', function() {
    loadLocalStorage();
});