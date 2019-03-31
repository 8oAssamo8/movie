<!-- 作者：谢森宇 徐聘 付乐祺 -->
<!-- 班级：2016级软件工程卓越计划2班 -->
<!-- 学院：计算机与网络安全学院 -->
<!-- 学校：东莞理工学院 -->
<?php
session_start();
include "../php/database.php";
include '../php/db.php';

function deleteBroadcast()
{
    get_connection();
    // $broadcastId=$_SESSION['broadcastId'];
    $broadcastId = $_GET['id'];
    $sql = "delete from broadcast where broadcastId=$broadcastId";
    $comment_sql = "delete from broadcastComment where broadcastId=$broadcastId";
    mysql_query($comment_sql);
    mysql_query($sql);
    close_connection();
    header('Location:./broadcast.php');
}

function deleteBroadcastComment()
{
    get_connection();
    $CommentId = $_GET['id'];
    $sql = "delete from broadcastComment where CommentId=$CommentId";
    echo $sql;
    mysql_query($sql);
    echo "aaa";
    close_connection();
    header('Location:./broadcast.php');
}

if (! (isset($_SESSION['userId']) && $_SESSION['userType'] == 'manager')) {
    echo "<script>alert('删除失败，请先登录管理员')</script>";
    header("refresh:0;url=../php/login.php");
    // header("location:../php/login.php");
} else {
    if (isset($_GET['action'])) {
        if ($_GET['action'] == 'deleteBroadcast') {
            deleteBroadcast();
        } else 
            if ($_GET['action'] == 'deleteBroadcastComment') {
                deleteBroadcastComment();
            }
    }
}