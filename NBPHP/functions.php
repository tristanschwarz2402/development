<?php

    function connectToDb() {
        $dbHost = "localhost";
        $dbUser = "root";
        $dbUserPassword = "";
        $dbDatabase = "noteblockdb";

        $dbConnection = mysqli_connect($dbHost, $dbUser, $dbUserPassword, $dbDatabase);

        if (!$dbConnection) {
            // echo "Es besteht keine verbindung<br><br>";
        } else {
            return $dbConnection;
        }
    }

    function loadTableFromDB($dbConnection) {
        $sqlStatement = "SELECT * FROM noteblock";
        $dbResultsRaw = mysqli_query($dbConnection, $sqlStatement);

        while ($dbResults = mysqli_fetch_array($dbResultsRaw, MYSQLI_ASSOC)) {
            
            $noteEntry = $dbResults["noteEntry"];
            $dbTableId = $dbResults["id"];
            $hiddenTableId = '<input type="hidden" id="dbTableId" Name="dbTableId" value="' . $dbTableId . '">';
            $createNoteTable = '<table class="dbTable"><tr><td><form action="editDbEntry.php" method="POST"><input type="text" class="noteEntryInputField" name="editNoteEntry" value="' . $noteEntry . '">' . $hiddenTableId . '</form></td><td align="right"><form action="removeDbEntry.php" method="POST"><input type="submit" value="X" class="deleteButton">' . $hiddenTableId . '</form></td></tr></table>';
            echo $createNoteTable;
        }

        mysqli_close($dbConnection);
    }

    function insertEntryIntoDB($dbConnection, $dbEntry) {
        $sqlStatement = "INSERT INTO `noteblock` (`noteEntry`) VALUES ('" . $dbEntry . "')";

        mysqli_query($dbConnection, $sqlStatement);
        mysqli_close($dbConnection);

        header('Location: index.php');
    }

    function removeDbEntry($dbConnection, $dbTableId) {
        $sqlStatement = 'DELETE FROM noteblock WHERE `noteblock`.`id` ' .  '= ' . $dbTableId;
        
        mysqli_query($dbConnection, $sqlStatement);
        mysqli_close($dbConnection);

        header('Location: index.php');
    }

    function editNoteEntry($dbConnection, $dbTableId, $updatedNoteEntry) {
        $sqlStatement = "UPDATE `noteblock` SET `noteEntry` = " . "'" . $updatedNoteEntry . "' WHERE `noteblock`.`id` = " . $dbTableId;
        
        mysqli_query($dbConnection, $sqlStatement);
        mysqli_close($dbConnection);

        header('Location: index.php');
    }

?>