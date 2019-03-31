<!-- 作者：谢森宇 徐聘 付乐祺 -->
<!-- 班级：2016级软件工程卓越计划2班 -->
<!-- 学院：计算机与网络安全学院 -->
<!-- 学校：东莞理工学院 -->
<?php
session_start();
include_once ("database.php");
include_once ("page.php");
if (isset($_POST['ids'])) {
    $updateIds = $_POST['ids'];
} else 
    if (isset($_GET['movieId'])) {
        $updateIds = $_GET['movieId'];
    }
if (isset($updateIds)) {
    get_connection();
    $deleteSQL = "update movie set hot=1 where id in ($updateIds)";
    $result_set = mysql_query($deleteSQL);
    close_connection();
    echo "<script type='text/javascript'>
        alert('添加热门电影成功！');
    </script>";
}
$pageSize = 3;
get_connection();
$selectSQL = "select * from movie where hot=0";
$result_set = mysql_query($selectSQL);
close_connection();
if (mysql_num_rows($result_set) == 0) {
    echo "<script type='text/javascript'>
        alert('当前数据库没有非热门电影！请检查之后再进行操作……');
    </script>";
}
$totalRecords = mysql_num_rows($result_set);
if (isset($_GET["page_current"])) {
    $pageCurrent = $_GET["page_current"];
} else {
    $pageCurrent = 1;
}
$start = ($pageCurrent - 1) * $pageSize;
$nowSQL = "select * from movie where hot=0 order by id desc limit $start,$pageSize";
get_connection();
$result_set = mysql_query($nowSQL);
close_connection();
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<script type="text/javascript">	
	function checkAll1(obj) {
		var checkboxs = document.getElementsByName("checkbox1");
		for (var i = 0; i < checkboxs.length; i++)
			checkboxs[i].checked = obj.checked;
	}

	function checkSelectAll(obj) {
		var checkboxs = document.getElementsByName("checkbox1");
		var checkboxAll = document.getElementById("checkboxAll");
		var i = 0;
		while (i < checkboxs.length && checkboxs[i].checked) {
			i++;
		}
		if (i == checkboxs.length)
			checkboxAll.checked = true;
		else
			checkboxAll.checked = false;
	}
	function submitCheck() {
		var checkboxs = document.getElementsByName("checkbox1");
		var ids = "";
		////拼接id为 ：1,2,
		for (i = 0; i < checkboxs.length; i++) {
			if (checkboxs[i].checked == true)
				ids += checkboxs[i].value + ",";
		}
		if (ids.length < 1) {
			alert("请选择至少一个需要添加热门的电影！");
			return false; //阻止提交
		}
		ids = ids.substring(0, ids.length - 1); //删除最后的逗号
		ids1 = document.getElementById("ids");
		ids1.value = ids;
		//提交
		document.getElementById('myform').submit();
	}
</script>
<link rel="stylesheet" href="assets/css/layui.css">
</head>
<body>
	<br>
	<br>
	<br>
	<form action="addHotMovie.php" id="myform" method="post">
		<table align="center" style="width: 500px;">
			<tr>
				<td colspan="5" align="center" height="60"
					style="border-color: #e5e2e2; line-height: 30px; font-size: 25px;">添加热门电影</td>
			</tr>
			<tr>
				<td colspan="5">
					<table class="layui-table" border="1" cellspacing="0"
						style="width: 700px; border-color: #e5e2e2;">
						<tr height="30" style="background-color: #e5e2e2;">
							<td align="center" width="20"><input id="checkboxAll"
								type='checkbox' onchange="checkAll1(this);"></td>
							<td align="center" width="110">电影海报</td>
							<td align="center" width="180">电影名（非热门电影）</td>
							<td align="center" width="70">上映年份</td>
							<td align="center">主演</td>
							<td align="center" width="50">操作</td>
						</tr>
                        <?php
                        if (mysql_num_rows($result_set) != 0) {
                            while ($movie = mysql_fetch_array($result_set)) {
                                ?>
                        <tr height="160">
							<td align="center"><input name="checkbox1" type="checkbox"
								onchange="checkSelectAll(this);"
								value="<?php echo $movie['id']; ?>"></td>
							<td align="center"><img
								src="<?php echo '.' . $movie['images']; ?>"
								style="width: 100px; height: 140px;" alt="Image"></td>
							<td align="center"><?php echo $movie['name']; ?></td>
							<td align="center"><?php echo $movie['date']; ?></td>
							<td align="center"><?php echo $movie['performer']; ?></td>
							<td align="center"><a
								class="layui-btn layui-btn-primary layui-btn-sm"
								href="addHotMovie.php?movieId=<?php echo $movie['id'] ?>"
								id="delete"> <i class="layui-icon">&#xe605;</i></a></td>
						</tr>
                        <?php
                            }
                        }
                        ?>
                    </table>
				</td>
			</tr>
			<tr>
				<td colspan="5" align="center" height="60" style="line-height: 1.8;">
                    <?php
                    $url = $_SERVER["PHP_SELF"];
                    $searchTitle = '';
                    page($totalRecords, $pageSize, $pageCurrent, $url, $searchTitle);
                    ?>
                </td>
			</tr>
			<tr>
				<td colspan="5" width="190" height="40" align="center"><input
					class="layui-btn layui-btn-radius" type="button"
					value="  添 加 所 选 项  " onclick="submitCheck();"></td>
			</tr>
		</table>
		<input type="hidden" name="ids" id="ids" value="">
	</form>
</body>
</html>