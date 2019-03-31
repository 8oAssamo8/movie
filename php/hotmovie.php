<?php
include 'db.php';
$sql = 'select * from movie WHERE state=1 and hot=1';
$ret = mysqli_query($con, $sql);
$arr = [];
while ($row = mysqli_fetch_assoc($ret)) {
    $arr[] = $row;
}
foreach ($arr as $key => $value) {
    $sql1 = 'select * from type where id=' . $value['typeid'];
    $ret = mysqli_query($con, $sql1);
    $row = mysqli_fetch_assoc($ret);
    $value['type'] = $row['name'];
    $arr[$key] = $value;
}
//返回json格式的热门电影信息，便于AngularJS框架解析热门电影信息内容
echo json_encode($arr, JSON_UNESCAPED_UNICODE);
