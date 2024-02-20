<?php
    function showTime() {
        echo date("H:i:s");
    }

    function createNoteRow($noteEntry) {
        $showNoteEntry = "NoteEntry<br>";
        return $showNoteEntry;
    }

    function connectToDb() {
        $username = 'dbuser';
        $password = 'dbuser';
        $database = 'noteblockdb';

        $dbConnect = new mysqli("localhost", $username, $password, $database);
        $sqlRequest = "SELECT * FROM noteEntry";
        $query = mysqli_query($dbConnect, $sqlRequest);

        while ($row = mysqli_fetch_array($query)) {
            echo $row['reviewer_name'];
        }
    }
?>