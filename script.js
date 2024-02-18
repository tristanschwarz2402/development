function displayInputNote(event) {
    if (event.key == 'Enter') {
        var inputNoteValue = event.target.value;
        console.log('Wert der eingegeben wurde', inputNoteValue);

        var createTableNoteContainer = '<table><tr><td>' + inputNoteValue + '</td></tr></table>';
        // var createTableNoteContainer = 'test';
        console.log(createTableNoteContainer);

        document.getElementById('noteContainer').innerHTML = createTableNoteContainer;
    }
}