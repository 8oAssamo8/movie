<?php
session_start();
include "db.php";
$mid = $_POST['id'];
$sql = "select * from movie where id=" . $mid;
// $id = $_POST['id'];
// $sql = "select * from movie where id=" . $id;
$ret = mysqli_query($con, $sql);
$row = mysqli_fetch_assoc($ret);
// 查询类型
$sql1 = 'select * from type where id=' . $row['typeid'];
$ret = mysqli_query($con, $sql1);
$row1 = mysqli_fetch_assoc($ret);
$row['type'] = $row1['name']; // 类型
$row['comment'] = [];
// 查询评论
$sql2 = "select * from comment,user WHERE mid=" . $row['id'] . " and comment.uid=user.id";
$ret = mysqli_query($con, $sql2);
while ($row1 = mysqli_fetch_assoc($ret)) {
    $row['comment'][] = $row1;
}
// $sql2 = "select * from comment WHERE mid=" . $row['id'];
// $ret = mysqli_query($con, $sql2);
// while ($row1 = mysqli_fetch_assoc($ret)) {
// $row['comment'][] = $row1;
// }
// 对头像路径进行处理
foreach ($row['comment'] as $key => $value) {
    $row['comment'][$key]['headurl'] = substr($value['headurl'], 1);
    if (isset($_SESSION['userType']) && $_SESSION['userType'] == 'manager') {
        $row['comment'][$key]['deleteurl'] = "./php/deleteComment.php?cid=" . $value['cid'];
    }
}
// 显示删除评论链接
if (isset($_SESSION['userType']) && $_SESSION['userType'] == 'manager')
    $row['showDelete'] = true;
else
    $row['showDelete'] = false;
    
    // 显示收藏标志
if (isset($_SESSION['userId'])) {
    $sql3 = 'select * from collection where userId=' . $_SESSION['userId'] . ' and movieId=' . $_POST['id'];
    $result = mysqli_query($con, $sql3);
    if ($result->num_rows > 0)
        $row['isCollected'] = true;
    else
        $row['isCollected'] = false;
} else
    $row['isCollected'] = false;

echo json_encode($row, JSON_UNESCAPED_UNICODE);