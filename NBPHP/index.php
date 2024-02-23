<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NBPHP</title>
</head>
<body>

    <?php
        require "functions.php";    
    ?>

    <h1>NoteBlock with PHP</h1>

    <form action="fillDb.php" method="post">
        <p>
            <label for="testInput">testInput</label>
            <input type="text" name="testInput" id="testInput">
        </p>
        <p>
            <input type="submit">
        </p>
    </form>

    <?php
        connectToDb();
    ?>

</body>
</html>