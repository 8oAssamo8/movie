<?php
session_start();
?>
<!DOCTYPE html>
<html lang="zh-CN" ng-app="app">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="./public/js/jquery-1.12.3.min.js"></script>
<script src="./public/js/bootstrap.min.js"></script>
<script src="./public/js/angular.js"></script>
<script src="./public/js/angular-ui-router.min.js"></script>
<script src="./public/js/sweet-alert.min.js"></script>
<link rel="stylesheet" href="./public/css/bootstrap.min.css">
<link rel="stylesheet" href="./public/css/sweet-alert.css">
<link rel="shortcut icon" href="./public/images/icon.png"
	type="image/x-icon">
<title ng-bind="title">首页</title>
<style>
* {
	margin: 0;
	padding: 0;
}

a {
	color: #333;
}

.search-nav {
	background: #F0F3F5;
	margin-top: -20px;
}

.search-box {
	height: 118px;
	border-bottom: 1px solid #E3EBEC;
}

.menu-box {
	height: 54px;
	border-top: 1px solid #E3EBEC;
}

.search-box .search-img {
	height: 118px;
	line-height: 118px;
}

.menu a {
	padding: 16px 0px;
	margin-right: 4%;
	font-size: 16px;
	color: #634D4D;
}

a:hover {
	text-decoration: none;
	color: #333;
}

a:visited {
	text-decoration: none;
}

a:link {
	text-decoration: none;
}

a:active {
	text-decoration: none;
}

.menu-box .menu a.active {
	color: #258DCD;
	border-bottom: 2px solid #258DCD;
	text-decoration: none;
}

.item h6 {
	/*font-size: 14px;*/
	padding-left: 4px;
}

.item img {
	/*height: 212px;*/
	width: 100%;
}

.item div {
	padding-bottom: 2px;
}

.item-box>div {
	margin-top: 32px;
}

.font-color {
	color: #0EABF4;
	padding: 0 10px;
}

.border {
	/*border: none;*/
	background: none;
}

.border p {
	text-indent: 2em;
}

textarea {
	box-shadow: inset 0 1px 14px 0 rgba(0, 0, 0, 0.30);
	border-radius: 6px;
	width: 100%;
	padding: 8px;
	outline: none;
}

.btnn {
	padding: 6px 20px;
}
</style>

</head>

<body style="background: #FAFAFA;">
	<nav class="navbar navbar-default navbar-inverse"
		style="background: #258dcd; border-radius: 0;">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="#"><img
					src="./public/images/Logo1.png"
					style="height: 35px; margin-top: -8px;"></a>
			</div>
			<div class="collapse navbar-collapse"
				id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav text-center">
                    <?php
                    // 以下代码实现不同用户的权限限制操作，判断当前系统是否已经有用户登录
                    // 若无则显示用户登录以及新用户注册链接
                    // 若登录用户类型为普通用户，则显示个人中心以及注销登录链接
                    // 若登录用户类型为管理员，则显示管理中心以及注销登录链接
                    if (! isset($_SESSION['userName']) || $_SESSION['userName'] == '') {
                        echo "<li><a href='./php/login.php' style='color: #FFF;'>用户登录</a></li><li><a href='./php/register.php' style='color:#FFF;'>新用户注册</a></li>";
                    } else 
                        if ($_SESSION['userType'] == 'manager') {
                            echo "<li><a href='#' onclick='return false' style='color: #FFF;'>当前用户:  <img ng-src=" . substr($_SESSION['userHeadUrl'], 1) . " alt='' style='width: 22px;height: 22px;border-radius: 50%; vertical-align: middle'> " . $_SESSION['userName'] . "</a></li><li><a href='./backstage/index.php' style='color:#FFF;'>管理中心</a></li><li><a href='./php/logout.php' style='color:#FFF;'>注销登录</a></li>";
                        } else
                            echo "<li><a href='#' onclick='return false' style='color: #FFF;'>当前用户:  <img ng-src=" . substr($_SESSION['userHeadUrl'], 1) . " alt='' style='width: 22px;height: 22px;border-radius: 50%; vertical-align: middle'> " . $_SESSION['userName'] . "</a></li><li><a href='./backstage/index.php' style='color:#FFF;'>个人中心</a></li><li><a href='./php/logout.php' style='color:#FFF;'>注销登录</a></li>";
                    ?>
                </ul>
			</div>

		</div>
	</nav>

	<div class="container-fluid search-nav">
		<div class="row search-box">
			<div class="col-md-8 search-img col-md-offset-2">
				<div class="row">
					<div
						class="col-md-4 col-sm-4 col-xs-4 text-right hidden-xs hidden-sm">
						<a href="#"><img src="./public/images/Logo.png"
							style="height: 40px; margin-top: -5px;" alt=""></a>
					</div>
					<div class="col-md-6 col-sm-12 text-center"
						ng-controller="searchmovie">
						<div class="input-group">
							<input type="text" class="form-control" placeholder="搜索电影"
								style="margin-top: 42px;" ng-model="key"> <span
								class="input-group-btn" ng-click="search()">
								<button class="btn" style="background: #258DCD;" type="button">
									<i class="glyphicon glyphicon-search" style="color: #FFF;"></i>
								</button>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row menu-box  hidden-xs hidden-sm">
			<div class="col-md-8 col-md-offset-2 menu text-center"
				style="height: 54px; line-height: 54px;">
				<div class="row">
					<div class="col-md-11 hidden-xs hidden-sm" style="margin-left: 3%;">
						<a ui-sref="hotmovie" ui-sref-active="active">热门影片</a> <a
							ui-sref="soonmovie" ui-sref-active="active">即将上映</a> <a
							ui-sref="filmmovie" ui-sref-active="active">上映中的影片</a> <a
							ui-sref="rankingmovie" ui-sref-active="active">影片排行榜</a>
                        <?php
                        // 以下代码实现不同用户的权限限制操作，判断当前系统是否已经有用户登录
                        // 若用户已经成功登录，则显示我的收藏功能链接
                        // 若登录用户类型为管理员，则显示影片发布功能链接
                        if (isset($_SESSION['userId'])) {
                            echo "<a ui-sref='collectedmovie' ui-sref-active='active'>我的收藏</a>";
                        }
                        if (isset($_SESSION['userType']) && $_SESSION['userType'] == 'manager') {
                            echo "<a ui-sref='addmovie' ui-sref-active='active'>影片发布</a>";
                        }
                        ?>
                        <a href="./broadcast/broadcast.php"
							ui-sref-active="active">广播</a> <a ui-sref="more"
							ui-sref-active="active">更多</a>
					</div>
				</div>

			</div>
		</div>
	</div>

	<div ui-view style="margin-bottom: 40px;"></div>

	<div
		style="width: 100%; text-align: center; height: 34px; border-top: 2px solid #EEEEEE; line-height: 34px; background: #FFF; position: fixed; bottom: 0px; z-index: 99999">
		© 2018 权限所有 · 东莞理工学院 · 2016级软件工程卓越计划班 - All rights reserved · Dongguan
		University of technology</div>
</body>

</html>
<script src="app.js"></script>
<script src="service/controller.js"></script>
<script src="service/service.js"></script>