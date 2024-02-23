<?php

    require "functions.php";

    $dbConnection = connectToDb();
    $dbTableId = $_POST["dbTableId"];

    removeDbEntry($dbConnection, $dbTableId);
?>