<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NBPHP</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <?php
        require "functions.php";    
    ?>

    <h1>NoteBlock with PHP</h1>

    <form action="fillDb.php" method="post">
        <p>
            <input type="text" name="noteEntry" id="noteEntry">
            <input type="submit">
        </p>
    </form>

    <div class="noteblockBody">
        <?php
            $dbConnection = connectToDb();
            loadTableFromDB($dbConnection);
        ?>
    </div>

</body>
</html>