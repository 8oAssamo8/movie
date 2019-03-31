<!-- 作者：谢森宇 徐聘 付乐祺 -->
<!-- 班级：2016级软件工程卓越计划2班 -->
<!-- 学院：计算机与网络安全学院 -->
<!-- 学校：东莞理工学院 -->
<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<title></title>
<meta charset="utf-8">
<link rel="stylesheet" href="../public/css/bootstrap.min.css">
<style type="text/css">
body {
	font-size: 12px;
	line-height: 120%;
	text-align: center;
	color: #333;
	padding: 20px;
}

a {
	color: #333;
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}

* {
	margin: 0;
	padding: 0;
	border: none;
}

.clearfix:after {
	content: ".";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden
}

.clearfix {
	*height: 1%;
}

#list {
	margin: 0 auto;
	text-align: left;
	width: 540px;
}

.box {
	border-top: 1px solid #eee;
	position: relative;
	width: 600px;
	padding: 20px 0
}

.box:hover .close {
	display: block;
}

.close {
	display: none;
	top: 0px;
	right: 0px;
	width: 28px;
	height: 28px;
	border: 1px solid #eee;
	position: absolute;
	background: #f2f4f7;
	line-height: 27px;
	text-align: center;
}

.close:hover {
	background: #c8d2e2;
	text-decoration: none;
}

.head {
	float: left;
	width: 40px;
	height: 40px;
	margin-right: 10px;
}

.content {
	float: left;
	width: 600px;
}

.main {
	margin-bottom: 10px;
	margin-top: 15px;
}

.main a {
	text-decoration: none;
}

.txt {
	margin: 10px;
	float: left;
}

.user {
	color: #369;
	font-size: 20px;
	width: 100%
}

.user_head {
	font-family: "宋体";
	font-size: 18px;
	color: #369;
	margin-bottom: 8px;
}

.user_text {
	font-family: "宋体";
	font-size: 15px;
	color: black;
	line-height: 17px;
}

.user_name {
	color: #369;
	font-size: 13px;
}

user_comment {
	float: left;
}

.pic {
	margin-right: 5px;
	width: 200px;
	border: 1px solid #eee;
}

.info {
	height: 20px;
	line-height: 19px;
	font-size: 12px;
	margin: 0 0 10px 0;
}

.info .time {
	color: #ccc;
	float: left;
	height: 20px;
	padding-left: 20px;
	background: url("./php/demo_filesdemo_files/bg1.png") no-repeat left top;
}

.info .praise {
	color: #369;
	float: right;
	height: 20px;
	padding-left: 18px;
	background: url("./php/demo_files/bg1.png") no-repeat left top;
}

.info .praise:hover {
	text-decoration: underline;
	background: url("images/bg3.jpg") no-repeat left top;
}

.praises-total {
	margin: 0 0 10px 0;
	height: 20px;
	background: url("images/praise.png") no-repeat 5px 5px
		rgb(247, 247, 247);
	padding: 5px 0 5px 10px;
	line-height: 19px;
}

.comment-box {
	padding: 10px 0;
	border-top: 1px solid #eee;
}

.comment-box:hover {
	background: rgb(247, 247, 247);
}

.comment-box .myhead {
	float: left;
	width: 30px;
	height: 30px;
	margin-right: 10px;
}

.comment-box .comment-content {
	float: left;
	width: 560px;
}

.comment-box .comment-content .comment-time {
	color: #ccc;
	margin-top: 3px;
	line-height: 16px;
	position: relative;
}

.comment-box .comment-content .comment-praise {
	display: none;
	color: #369;
	padding-left: 17px;
	height: 20px;
	background: url("images/praise.png") no-repeat;
	position: absolute;
	bottom: 0px;
	right: 44px;
}

.comment-box .comment-content .comment-operate {
	display: none;
	color: #369;
	height: 20px;
	position: absolute;
	bottom: 0px;
	right: 10px;
}

.comment-box .comment-content:hover .comment-praise {
	display: inline-block;
}

.comment-box .comment-content:hover .comment-operate {
	display: inline-block;
}

.text-box .comment {
	border: 1px solid #eee;
	display: block;
	height: 25px;
	width: 590px;
	padding: 5px;
	resize: none;
	color: #ccc
}

.text-box .btn {
	font-size: 12px;
	font-weight: bold;
	display: none;
	float: right;
	width: 65px;
	height: 30px;
	border: 1px solid #0C528D;
	color: #fff;
	background: #4679AC;
	margin-top: 3px;
	margin-right: 10px;
}

.text-box .btn-off {
	border: 1px solid #ccc;
	color: #ccc;
	background: #F7F7F7;
}

.text-box .word {
	display: none;
	float: right;
	margin: 7px 10px 0 0;
	color: #666;
	line-height: 24px;
}

.text-box-on .comment {
	height: 50px;
	color: #333;
}

.text-box-on .btn {
	display: inline;
}

.text-box-on .word {
	display: inline;
}
</style>
<script type="text/javascript" src="./demo_files/demo.js"></script>
</head>
<body
	style="background: #FAFAFA; padding-top: 0px; padding-right: 0px; padding-left: 0px;">
	<nav class="navbar navbar-default navbar-inverse"
		style="background: #258dcd; border-radius: 0;">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="#"><img
					src="../public/images/Logo1.png"
					style="height: 35px; margin-top: -8px;"></a>
			</div>
			<div class="collapse navbar-collapse"
				id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav text-center">
                    <?php
                    if (! isset($_SESSION['userName']) || $_SESSION['userName'] == '') {
                        echo "<li><a href='../index.php' style='color:#FFF;'>返回主页</a></li><li><a href='../php/login.php' style='color: #FFF;'>用户登录</a></li><li><a href='../php/register.php' style='color:#FFF;'>新用户注册</a></li>";
                    } else 
                        if ($_SESSION['userType'] == 'manager') {
                            echo "<li><a href='#' onclick='return false' style='color: #FFF;'>当前用户:  <img src=" . $_SESSION['userHeadUrl'] . " alt='' style='width: 22px;height: 22px;border-radius: 50%; vertical-align: middle'> " . $_SESSION['userName'] . "</a></li><li><a href='../index.php' style='color:#FFF;'>返回主页</a></li><li><a href='../backstage/index.php' style='color:#FFF;'>管理中心</a></li><li><a href='../php/logout.php' style='color:#FFF;'>注销登录</a></li>";
                        } else
                            echo "<li><a href='#' onclick='return false' style='color: #FFF;'>当前用户:  <img src=" . $_SESSION['userHeadUrl'] . " alt='' style='width: 22px;height: 22px;border-radius: 50%; vertical-align: middle'> " . $_SESSION['userName'] . "</a></li><li><a href='../index.php' style='color:#FFF;'>返回主页</a></li><li><a href='../backstage/index.php' style='color:#FFF;'>个人中心</a></li><li><a href='../php/logout.php' style='color:#FFF;'>注销登录</a></li>";
                    ?>
                </ul>
			</div>

		</div>
	</nav>
	<h1>广 播</h1>
	<div id="list">
    <?php
    // header("content-type:text/html;charset=utf-8");
    include_once "../php/database.php";
    get_connection();
    global $database_connection;
    mysql_query('SET NAMES UTF8');
    $broadcast_sql = mysql_query("select * from broadcast");
    // close_connection();
    if ($broadcast_sql > 0) {
        while ($row = mysql_fetch_array($broadcast_sql)) { // 如果存在广播，显示广播内容
            $broadcastId = $row['broadcastId'];
            $broadcastTitle = $row['broadcastTitle'];
            $broadcastContent = $row['broadcastContent'];
            $broadcastURL = $row['broadcastURL'];
            $broadcastTime = $row['broadcastTime'];
            $Number = $row['Number'];
            $userid = $row['userid'];
            $_SESSION['broadcastId'] = $broadcastId;
            $users = "select * from user where id='$userid'";
            $sql = mysql_query($users);
            while ($result = mysql_fetch_array($sql)) { // 显示作者头像名称
                $headurl = $result['headurl'];
                $userName = $result['userName'];
                ?>
                <div class="box clearfix">
			<input type="hidden" value="<?php echo 'B'.$broadcastId; ?>" /> <a
				class="close" href="javascript: ">×</a> <img class="head"
				src=<?php echo $headurl; ?> alt="">
			<p class="txt">
				<span class="user"><?php echo $userName; ?></span>
			</p>
			<div class="content">
				<div class="main">
					<a href=<?php echo $broadcastURL; ?>>
						<div class="user_head">
							<span><?php echo $broadcastTitle; ?><br /></span>
						</div>
						<div class="user_text">
							<span><?php echo $broadcastContent; ?></span>
						</div>
					</a>
				</div>
				<div class="info clearfix">
					<input type="hidden" value="<?php echo 'A'.$broadcastId; ?>" /> <span
						class="time"><?php echo $broadcastTime; ?></span> <a
						class="praise" href="javascript:;">赞</a>
				</div>
				<div class="praises-total" total='<?php echo $Number; ?>'
					style="display: block;"><?php echo $Number; ?>个人觉得很赞</div>
				<div class="comment-list">
					<div class="comment-box clearfix" user="self">
                                <?php
                $comment_sql = mysql_query("select * from broadcastcomment where broadcastId='$broadcastId'");
                while ($comment_result = mysql_fetch_array($comment_sql)) { // 查找此篇广播的评论
                    $CommentId = $comment_result['CommentId'];
                    $userComment = $comment_result['userComment'];
                    $CNumber = $comment_result['CNumber'];
                    $comment_userid = $comment_result['userid'];
                    $comment_broadcastId = $comment_result['broadcastId'];
                    $broadcastCommentTime = $comment_result['broadcastCommentTime'];
                    $comment_users = "select * from user where id='$comment_userid'";
                    $c_sql = mysql_query($comment_users);
                    while ($c_result = mysql_fetch_array($c_sql)) { // 显示此篇广播的评论
                        ?>
                                        <div>
							<input type="hidden" value="<?php echo 'C'.$CommentId; ?>" /> <img
								class="myhead" src="<?php echo $c_result['headurl']; ?>" alt="">
							<div class="comment-content">
								<p class="comment-text">
									<span class="user">
										<div class="user_name"><?php echo $c_result['userName']; ?></div>
									</span>
								
								
								<div class="user_comment">
                                                    <?php echo $userComment; ?>
                                                </div>
								</p>
								<p class="comment-time">
									<input type="hidden" value="<?php echo 'D'.$CommentId; ?>" />
                                                    <?php echo $broadcastCommentTime;?>
                                                    <a
										href="javascript:;" class="comment-praise" my="0"
										total='<?php echo $CNumber; ?>' style="display: inline-block"><?php echo $CNumber; ?> 赞</a>
									<a href="javascript:;" class="comment-operate">删除</a>
								</p>
							</div>
						</div>
                                        <?php
                    }
                }
                ?>
                            </div>
				</div>
				<div class="text-box">
					<textarea class="comment" autocomplete="off">评论…</textarea>
					<button class="btn ">回 复</button>
					<span class="word"><span class="length">0</span>/140</span>
				</div>
			</div>
		</div>
                <?php
            }
        }
    } else {
        echo "alert('暂无广播')";
        echo "<h3>暂无广播<h3/>";
    }
    ?>
</div>


	<!--
        <div class="box clearfix">
            <a class="close" href="javascript:;">×</a>
            <img class="head" src="demo_files/1.jpg" alt="">
            <p class="txt">
                <span class="user">Andy</span>
            </p>
            <div class="content">
                <div class="main">
                    <a href="https://www.douban.com/note/700974631/">
                        <div class="user_head">
                            <span>
                            观音菩萨衣衫不整捉拿灵感大王，其实作者想讲一个鱼篮观音的故事<br/>
                        </span>
                        </div>
                        <div class="user_text">
                            <span>
                            《西游记》里的灵感大王是一条著名的锦鲤，想要被他保佑，不需要转发，只需要送上一对陈家庄的童男童女就可以了。 他在观音身边听经，却学了个吃人的本事，还吃得很挑剔，专吃陈家庄的童男童女。吃出了妖怪的新花...
                        </span>
                        </div>

                    </a>
                </div>
                <div class="info clearfix">
                    <span class="time">02-14 23:01</span>
                    <a class="praise" href="javascript:;">赞</a>
                </div>
                <div class="praises-total" total="4" style="display: block;">4个人觉得很赞</div>
                <div class="comment-list">
                    <div class="comment-box clearfix" user="self">
                        <img class="myhead" src="demo_files/my.jpg" alt="">
                        <div class="comment-content">
                            <p class="comment-text">
                                <span class="user">
                                    <div class="user_name">我：</div>
                                </span>
                            <div class="user_comment">写的太好了。</div>
                            </p>
                            <p class="comment-time">
                                2014-02-19 14:36
                                <a href="javascript:;" class="comment-praise" total="1" my="0" style="display: inline-block">1 赞</a>
                                <a href="javascript:;" class="comment-operate">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-box">
                    <textarea class="comment" autocomplete="off">评论…</textarea>
                    <button class="btn ">回 复</button>
                    <span class="word"><span class="length">0</span>/140</span>
                </div>
            </div>
        </div>

        <div class="box clearfix">
            <a class="close" href="javascript:;">×</a>
            <img class="head" src="demo_files/1.jpg" alt="">
            <p class="txt">
                <span class="user">Andy</span>
            </p>
            <div class="content">
                <div class="main">
                    <a href="https://www.douban.com/note/700974631/">
                        <div class="user_head">
                            <span>
                            观音菩萨衣衫不整捉拿灵感大王，其实作者想讲一个鱼篮观音的故事<br/>
                        </span>
                        </div>
                        <div class="user_text">
                            <span>
                            《西游记》里的灵感大王是一条著名的锦鲤，想要被他保佑，不需要转发，只需要送上一对陈家庄的童男童女就可以了。 他在观音身边听经，却学了个吃人的本事，还吃得很挑剔，专吃陈家庄的童男童女。吃出了妖怪的新花...
                        </span>
                        </div>

                    </a>
                </div>
                <div class="info clearfix">
                    <span class="time">02-14 23:01</span>
                    <a class="praise" href="javascript:;">赞</a>
                </div>
                <div class="praises-total" total="4" style="display: block;">4个人觉得很赞</div>
                <div class="comment-list">
                    <div class="comment-box clearfix" user="self">
                        <img class="myhead" src="demo_files/my.jpg" alt="">
                        <div class="comment-content">
                            <p class="comment-text">
                                <span class="user">
                                    <div class="user_name">我：</div>
                                </span>
                            <div class="user_comment">写的太好了。</div>
                            </p>
                            <p class="comment-time">
                                2014-02-19 14:36
                                <a href="javascript:;" class="comment-praise" total="1" my="0" style="display: inline-block">1 赞</a>
                                <a href="javascript:;" class="comment-operate">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-box">
                    <textarea class="comment" autocomplete="off">评论…</textarea>
                    <button class="btn ">回 复</button>
                    <span class="word"><span class="length">0</span>/140</span>
                </div>
            </div>
        </div>-->
	</div>
	<div ui-view style="margin-bottom: 40px;"></div>

	<div
		style="width: 100%; text-align: center; height: 34px; border-top: 2px solid #EEEEEE; line-height: 34px; background: #FFF; position: fixed; bottom: 0px; z-index: 99999">
		© 2018 权限所有 · 东莞理工学院 · 2016级软件工程卓越计划班 - All rights reserved · Dongguan
		University of technology</div>
</body>
</html>
