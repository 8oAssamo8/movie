<?php
include 'db.php';
$sql = "select * from movie WHERE state=2";
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
echo json_encode($arr, JSON_UNESCAPED_UNICODE);