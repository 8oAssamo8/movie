<?php
$con = mysqli_connect('localhost', 'root', '123456', 'php_movie');
if (! $con) {
    echo mysqli_error($con);
}
mysqli_select_db($con, "php_movie");
mysqli_set_charset($con, "utf8");
