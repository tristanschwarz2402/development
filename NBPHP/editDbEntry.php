<?php
    require "functions.php";

    $dbConnection = connectToDb();
    $dbTableId = $_POST["dbTableId"];
    $editDbEntry = $_POST["editNoteEntry"];

    if ($editDbEntry == "") {
        removeDbEntry($dbConnection, $dbTableId);
    } else {
        editNoteEntry($dbConnection, $dbTableId, $editDbEntry);
    }
?>