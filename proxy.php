<?php
$url = $_REQUEST['url'];
if (preg_match('/\b(https?|ftp):\/\/*/', $url) !== 1) {
    echo '<h1>No-no-no!!!</h1>';
    die;
}
echo (file_get_contents($url));
?>
