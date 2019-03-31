<!-- 作者：谢森宇 徐聘 付乐祺 -->
<!-- 班级：2016级软件工程卓越计划2班 -->
<!-- 学院：计算机与网络安全学院 -->
<!-- 学校：东莞理工学院 -->
<?php
session_start();
include "../php/database.php";
include '../php/db.php';
?>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<?php
// 更改广播赞的总数
function UpdateNumber()
{
    get_connection();
    $Number = $_GET['Number'];
    $broadcastId = $_GET['id'];
    $sql = "update broadcast SET Number = '$Number' WHERE broadcastId = '$broadcastId' ";
    mysql_query($sql);
    close_connection();
    header('Location:javascript:');
}

// 更改留言赞的总数
function UpdateCNumber()
{
    get_connection();
    $CNumber = $_GET['CNumber'];
    $CommentId = $_GET['id'];
    $sql = "update broadcastComment SET CNumber = '$CNumber' WHERE CommentId = '$CommentId' ";
    mysql_query($sql);
    close_connection();
    header('Location:javascript:');
}

if (! (isset($_SESSION['userId']))) {
    echo "<script>alert('请先登录')</script>";
    header("location:../php/login.php");
} else {
    if (isset($_GET['action'])) {
        if ($_GET['action'] == 'addNumber') {
            UpdateNumber();
        } else 
            if ($_GET['action'] == 'reduceNumber') {
                UpdateNumber();
            } else 
                if ($_GET['action'] == 'addCNumber') {
                    UpdateCNumber();
                } else 
                    if ($_GET['action'] == 'reduceCNumber') {
                        UpdateCNumber();
                    }
    }
}
