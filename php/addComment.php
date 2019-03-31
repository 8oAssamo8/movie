<?php
session_start();
include 'db.php';
if (! isset($_SESSION['isLogin'])) {
    echo - 1;
} else {
    $data = $_POST;
    $data['headurl'] = substr($_SESSION['userHeadUrl'], 1);
    $data['userName'] = $_SESSION['userName'];
    $sql = "insert into comment(`uid`,`mid`,`content`,`date`) values($_SESSION[userId],$data[id],'$data[content]',$data[date])";
    mysqli_query($con, $sql);
    if (mysqli_insert_id($con) > 1) {
        if (isset($_SESSION['userType']) && $_SESSION['userType'] == 'manager') {
            $data['deleteurl'] = "./php/deleteComment.php?cid=" . mysqli_insert_id($con);
        }
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    } else {
        echo 0;
    }
}