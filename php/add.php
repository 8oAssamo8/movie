<?php
include 'db.php';
$data = $_POST;
$name = $data['name'];
$date = $data['date'];
$performer = $data['performer'];
$images = $data['images'];
$typeid = $data['typeid'];
$brief = $data['brief'];
$state = $data['state'];
$score = $data['score'];
$hot = $data['hot'];
$sql = "INSERT INTO `movie`(`name`, `date`, `performer`, `brief`, `images`, `typeid`,`state`,`score`,`hot`) VALUES ('$name',$date,'$performer','$brief','$images',$typeid,$state,$score,$hot)";
mysqli_query($con, $sql);
if (mysqli_insert_id($con) > 1) {
    echo 1;
} else {
    echo 2;
}