<!-- 作者：谢森宇 徐聘 付乐祺 -->
<!-- 班级：2016级软件工程卓越计划2班 -->
<!-- 学院：计算机与网络安全学院 -->
<!-- 学校：东莞理工学院 -->
<?php
session_start();
include_once ("database.php");
if (isset($_POST["submit"])) {
    $name = $_POST["name"];
    get_connection();
    $search_name_SQL = "select * from user where userName='$name'";
    $result_name = mysql_query($search_name_SQL);
    if (mysql_num_rows($result_name) == 0) {
        echo "<script type='text/javascript'>
            alert('无此用户！请检查后重新填写。');
            </script>";
        header('refresh:0;url=add_popularmoviereview.php');
        return;
    }
    $movie = $_POST["movie"];
    $search_movie_SQL = "select * from movie where name='$movie'";
    $result_movie = mysql_query($search_movie_SQL);
    if (mysql_num_rows($result_movie) == 0) {
        echo "<script type='text/javascript'>
            alert('无此电影信息！请检查后重新填写。');
            </script>";
        header('refresh:0;url=add_popularmoviereview.php');
        return;
    }
    $title = $_POST['title'];
    $content = $_POST["content"];
    $type = $_POST["type"];
    $insertNameSQL = mysql_fetch_array($result_name);
    $insertMovieSQL = mysql_fetch_array($result_movie);
    $headimage = substr($insertNameSQL['headurl'], 1);
    $image = $insertMovieSQL['images'];
    $point = $insertMovieSQL['score'];
    $url = "../index.php#!/details/" . $insertMovieSQL['id'];
    $insertSQL = "insert into  popularmoviereview (title,name,myurl,image,point,content,movie,movieUrl,url,type,headimage)
                         VALUES ('$title','$name','$url','$image','$point','$content','$movie','$url','$url','$type','$headimage')";
    $result_movie = mysql_query($insertSQL);
    close_connection();
    echo "<script type='text/javascript'>
                    alert('热门电影添加成功!');
                </script>";
}
?>
<!DOCTYPE html>
<html>
<head>
<title></title>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css"
	    href="../public/css/bootstrap.css" />
<link rel="stylesheet" type="text/css"
	    href="../public/css/bootstrap-responsive.css" />
<link rel="stylesheet" type="text/css" href="../public/css/style.css" />
<script type="text/javascript" src="../public/js/jquery.js"></script>
<script type="text/javascript" src="../public/js/bootstrap.js"></script>
<script type="text/javascript" src="../public/js/ckform.js"></script>
<style type="text/css">
body {
	    font-size: 20px;
	    padding-bottom: 40px;
	    background-color: #e9e7ef;
	    font-size: 17px;
	    font-size: 20px;
}

.sidebar-nav {
	    padding: 9px 0;
}

@media ( max-width : 980px) {
	     /* Enable use of floated navbar text */        
    .navbar-text.pull-right {
		        float: none;
		        padding-left: 5px;
		        padding-right: 5px;
		    
	}
}
</style>
<link rel="stylesheet" href="../backstage/assets/css/layui.css">
</head>
<div style="width: 900px; margin-left: 20%;">
	<br> <br> <br> <br>
	<form action="./add_popularmoviereview.php" method="post">
		<table class="layui-table"
			style="width: 700px; margin-left: 3%; margin-top: 2%;">
			<thead>
				<tr>
					<th colspan="2"
						style="line-height: 30px; font-size: 25px; text-align: center;">添加热门评论</th>
				</tr>
			</thead>
			<tr>
				<td width="15%" class="tableleft">显示类型</td>
				<td><select name="type" style="height: 35px;">
						<option value="0">普通显示</option>
						<option value="1">轮播显示</option>
				</select></td>
			</tr>
			<tr>
				<td width="15%" class="tableleft">用户名：</td>
				<td><input type="text" name="name"
					style="height: 41px; width: 546px" /></td>
			</tr>
			<tr>
				<td width="15%" class="tableleft">电影名：</td>
				<td><input type="text" name="movie"
					style="height: 41px; width: 546px" /></td>

			</tr>
			<tr>
				<td width="15%" class="tableleft">标题：</td>
				<td><input type="text" name="title"
					style="height: 41px; width: 546px" /></td>
			</tr>
			<tr>
				<td width="15%" class="tableleft">评论内容：</td>
				<td><input type="text" name="content"
					style="height: 41px; width: 546px" /></td>
			</tr>
			<tr>
				<td class="tableleft"></td>
				<td>
					<button style="margin-left: 180px; width: 80px;" type="submit"
						name="submit" class="btn btn-primary" type="button">提 交</button>
				</td>
			</tr>
		</table>
	</form>
</div>
</body>
</html>