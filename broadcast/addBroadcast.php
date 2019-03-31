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
    // header("location:../php/login.php");
    echo "<script>alert('请先登录管理员')</script>";
    header("refresh:0;url=../php/login.php");
} else {
    $data = $_POST;
    $data['headurl'] = substr($_SESSION['userHeadUrl'], 1);
    $userid = $_SESSION['userId'];
    $broadcastTitle = $_POST['broadcastTitle'];
    $broadcastContent = $_POST['broadcastContent'];
    $broadcastURL = $_POST['broadcastURL'];
    $broadcastTime = date('Y-m-d h:i:s', time());
    // $sql = "INSERT INTO broadcast ('broadcastTitle',)VALUES ('$broadcastTitle', '$broadcastContent', '$broadcastURL',0,'$broadcastTime',$userid);";
    // mysqli_query($con, $sql);
    $sql = "INSERT INTO broadcast (broadcastTitle,broadcastContent,broadcastURL,Number,broadcastTime,userid) 
                VALUES ('$broadcastTitle', '$broadcastContent', '$broadcastURL',0,'$broadcastTime',$userid);";
    if (isset($_SESSION['userType']) && $_SESSION['userType'] == 'manager') {
        mysqli_query($con, $sql);
        echo "<script>alert('广播添加成功！')</script>";
        header('refresh:0;url=./add_broadcast.html');
    } else {
        echo "<script>alert('非管理员不能添加广播')</script>";
        header("refresh:0;url=./broadcast.php");
    }
}