<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Prostir NUO Grabber</title>
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/css/bootstrap.min.css">
        <link href="css/style.css" rel="stylesheet">
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/app.js"></script>
    </head>
    <body>
        <h1 id="message">Press "Start" to proceed</h1>
        <button id="start" class="btn btn-primary btn-large">Start</button>
        <hr>
        <div id="all"></div>
        <?php
        $threads = 5;
        for ($i = 0; $i < $threads; $i++) {
            echo "<div id='{$i}' class='page-container'></div>";
        }
        ?>
    </body>
</html>