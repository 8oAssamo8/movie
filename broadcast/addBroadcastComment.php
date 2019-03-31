<!-- 作者：谢森宇 徐聘 付乐祺 -->
<!-- 班级：2016级软件工程卓越计划2班 -->
<!-- 学院：计算机与网络安全学院 -->
<!-- 学校：东莞理工学院 -->
<?php
session_start();
include '../php/db.php';
?>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<?php
if (! isset($_SESSION['isLogin'])) {
    // header("location:../php/login.php");
    echo "<script>alert('请先登录后再评论')</script>";
    header("refresh:0;url=../php/login.php");
} else {
    if (isset($_GET['action'])) {
        if ($_GET['action'] == 'addBroadcastComment') {
            $userid = $_SESSION['userId'];
            $userComment = $_GET['userComment'];
            $broadcastCommentTime = date('Y-m-d h:i:s', time());
            $broadcastId = $_GET['id'];
            $sql = "INSERT INTO broadcastComment (userComment,CNumber,broadcastCommentTime,userid,broadcastId) 
                VALUES ('$userComment',0, '$broadcastCommentTime','$userid',$broadcastId);";
            mysqli_query($con, $sql);
            header('location:./broadcast.php');
        }
    }
}