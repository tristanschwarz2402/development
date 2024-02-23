<?php
    require "functions.php";
    $noteEntry = $_POST["noteEntry"];
    $dbConnection = connectToDb();

    insertEntryIntoDB($dbConnection, $noteEntry);


    // $dbConnection = connectToDb();


?>