<?php
session_start();
if (! isset($_SESSION['userId'])) {
    header('location:index.php');
} else {
    include_once ("database.php");
    $deleteId = $_GET["cid"];
    get_connection();
    $deleteSQL = "delete from comment where cid=$deleteId";
    $resultSet = mysql_query($deleteSQL);
    close_connection();
    echo "<script>history.go(-1);</script>";
    if (! isset($_GET["isBackstage"]))
        echo "<script>document.getElementById('textarea').value='';</script>";
}
?>