<?php
session_start();
include 'db.php';
if (! isset($_SESSION['userId'])) {
    echo - 1;
} else {
    if (isset($_GET['action'])) {
        if ($_GET['action'] == 'collect') {
            $sql = 'insert into collection(userId,movieId,time) values(' . $_SESSION['userId'] . ',' . $_POST['id'] . ',now())';
            if (mysqli_query($con, $sql)) {
                echo 1;
            } else {
                echo 0;
            }
        } else 
            if ($_GET['action'] == 'unCollect') {
                $sql = 'delete from collection where userId=' . $_SESSION['userId'] . ' and movieId=' . $_POST['id'];
                mysqli_query($con, $sql);
                if (mysqli_affected_rows($con) > 0) {
                    echo 1;
                } else {
                    echo 0;
                }
            }
    }
}