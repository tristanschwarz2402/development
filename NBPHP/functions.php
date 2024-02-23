<?php

    function connectToDb() {
        echo "Function: connect to DB<br><br>";

        $dbHost = "localhost";
        $dbUser = "root";
        $dbUserPassword = "";
        $dbDatabase = "noteblockdb";

        $dbConnection = mysqli_connect($dbHost, $dbUser, $dbUserPassword, $dbDatabase);

        if (!$dbConnection) {
            echo "Es besteht keine verbindung<br><br>";
        } else {
            echo "Datenbank verbindung aktiv<br><br>";
            loadTableFromDB($dbConnection);
        }
    }

    function loadTableFromDB($dbConnection) {
        echo "Function Load Table from DB<br><br>";

        $sqlStatement = "SELECT * FROM noteblock";
        $dbResultsRaw = mysqli_query($dbConnection, $sqlStatement);

        echo "mysqli query: <br>";
        var_dump($dbResultsRaw);
        echo "<br><br>";

        $dbResults = mysqli_fetch_array($dbResultsRaw, MYSQLI_ASSOC);

        echo "DBResults: <br>";
        var_dump($dbResults["noteEntry"]);

        foreach ($dbResults as $dbResult) {

            echo $dbResult["noteEntry"];

            // $displayResult = '<table style=/"border=solid black/"><tr><td>' + $dbResult["noteEntry"] + '</td></tr></table>';
            // echo $Result["noteEntry"];
            // echo $displayResult;
        }

    }

?>