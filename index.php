<!DOCTYPE html>
    <html lang="de">
    <head>
        <meta name="author" content="Tristan Schwarz">
        <meta name="description" content="Online Notizblock">
        <meta name="keywords" content="noteblock, online noteblock, Notizblock, Online Notizblock">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="style.css">

        <script src="script.js"></script>

        <title>NOTEBLOCK</title>
    </head>
    <body>
        <div class="noteblockAll">
            <span class="noteblockTop">
                <h1>NOTEBLOCK</h1>
            </span>

            <!-- <input type="Text" id="inputNote" oninput="displayInputNote(this)"> -->
            <input class='getNoteInput' type="Text" id="inputNote" onkeypress="displayInputNote(event)">

            <div id="noteContainer" class="noteContainer">
            </div>

        </div>
    </body>
</html>