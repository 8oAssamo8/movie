<!-- 作者：谢森宇 徐聘 付乐祺 -->
<!-- 班级：2016级软件工程卓越计划2班 -->
<!-- 学院：计算机与网络安全学院 -->
<!-- 学校：东莞理工学院 -->
<!DOCTYPE html>
<html lang="zh-cmn-Hans" class="ua-windows ua-webkit">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="stylesheet" href="./assets/css/myComment/_init_.css">
<link rel="stylesheet" href="./assets/css/myComment/gallery.css">
<style>
* {
	margin: auto;
	padding: auto;
}
</style>
</head>

<body>
	<div class="grid-16-8 clearfix">
		<div class="article">
			<div>
				<h1>&nbsp</h1>
			</div>
			<div id="gallery_main_frame">

    <?php
    session_start();
    $username = $_SESSION['userName'];
    include_once ("database.php");
    include_once ("page.php");
    $pageSize = 5;
    get_connection();
    $searchSQL = "select movie.name,movie.images,comment.content
        from user,movie,comment
        WHERE uid=user.id and mid=movie.id and user.userName='$username'
        ORDER BY comment.date desc";
    $result_set = mysql_query($searchSQL);
    if (mysql_num_rows($result_set) == 0) {
        echo "<script type='text/javascript'>
                alert('暂无评论……');
            </script>";
        echo "<h2>您当前还没有评论过哟~</h2>";
    } else {
        $totalRecords = mysql_num_rows($result_set);
        if (isset($_GET["page_current"])) {
            $pageCurrent = $_GET["page_current"];
        } else {
            $pageCurrent = 1;
        }
        $start = ($pageCurrent - 1) * $pageSize;
        $nowSQL = "select movie.id,movie.name,movie.images,comment.content,comment.cid
            from user,movie,comment
            WHERE uid=user.id and mid=movie.id and user.userName='$username'
            ORDER BY comment.date desc
            limit $start,$pageSize";
        $result_set = mysql_query($nowSQL);
        close_connection();
        if (mysql_num_rows($result_set) > 0) {
            while ($comment = mysql_fetch_array($result_set)) {
                ?>
                    <div class='item'>
					<div class='hd'>
						<div class='usr-pic'>
							<a href='<?php echo "../index.php#!/details/" . $comment[0] ?>'
								target='_blank'></a> <a
								href='<?php echo "../index.php#!/details/" . $comment[0] ?>'
								target='_blank'></a>
						</div>
						<div class='column'></div>
					</div>

					<div class='bd'>
						<div class='pic'>
							<a href='<?php echo "../index.php#!/details/" . $comment[0] ?>' target='_blank' class='cover' style='background-image:url(.<?php echo $comment[2] ?>)'>
								<em></em>
							</a>
						</div>
						<div class='content'>
							<div class='title'>
								<a href='<?php echo "../index.php#!/details/" . $comment[0] ?>'
									target='_blank'><?php echo $comment[1] ?></a>
								<div style="float: right;">
									<a
										href='<?php echo "../php/deleteComment.php?isBackstage=true&cid=" . $comment[4] ?>'>删除评论</a>
								</div>
							</div>
							<p>
								<a href='<?php echo "../index.php#!/details/" . $comment[0] ?>'
									target='_blank'><?php echo $comment[3] ?></a>
							</p>
						</div>
    <?php
            }
        }
    }
    ?>
</div>
					<br> <br>
					<div colspan="5" align="center" height="40"
						style="line-height: 1.8;">
                    <?php
                    $url = $_SERVER["PHP_SELF"];
                    $searchTitle = '';
                    if (mysql_num_rows($result_set) > 0)
                        page($totalRecords, $pageSize, $pageCurrent, $url, $searchTitle);
                    ?>
                </div>

</body>
</html>
