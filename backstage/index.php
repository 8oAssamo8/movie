<!-- 作者：谢森宇 徐聘 付乐祺 -->
<!-- 班级：2016级软件工程卓越计划2班 -->
<!-- 学院：计算机与网络安全学院 -->
<!-- 学校：东莞理工学院 -->
<?php
session_start();
if (! isset($_SESSION['userName'])) {
    header('location:../index.php');
}
?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1">
<link rel="stylesheet" href="assets/css/layui.css">
<link rel="stylesheet" href="assets/css/admin.css">
<link rel="icon" href="/favicon.ico">
<link rel="shortcut icon" href="./assets/images/icon.png"
	type="image/x-icon">
<title><?php

if (isset($_SESSION['userName']) && $_SESSION['userName'] != '') {
    echo $_SESSION['userName'];
}
?></title>
</head>
<body class="layui-layout-body">
	<div class="layui-layout layui-layout-admin">
		<div class="layui-header custom-header">
			<ul class="layui-nav layui-layout-left">
				<li class="layui-nav-item slide-sidebar" lay-unselect><a
					href="javascript:;" class="icon-font"><i class="ai ai-menufold"></i></a>
				</li>
			</ul>
			<ul class="layui-nav layui-layout-right">
				<li class="layui-nav-item"><a href="javascript:;"><?php
    
if (isset($_SESSION['userName']) && $_SESSION['userName'] != '') {
        echo $_SESSION['userName'];
    }
    ?></a>
					<dl class="layui-nav-child">
						<dd>
							<a href="../index.php">回到首页</a>
						</dd>
						<dd>
							<a href="../php/logout.php">注销登录</a>
						</dd>
					</dl></li>
			</ul>
		</div>
		<div class="layui-side custom-admin">
			<div class="layui-side-scroll">

				<div class="custom-logo">
					<img src="<?php echo $_SESSION['userHeadUrl']; ?>" alt=""
						style='width: 32px; height: 32px; border-radius: 50%; vertical-align: middle' />
					<h1><?php
    
if (isset($_SESSION['userName']) && $_SESSION['userName'] != '') {
        echo $_SESSION['userName'];
    }
    ?></h1>
				</div>
				<ul id="Nav" class="layui-nav layui-nav-tree">
					<li class="layui-nav-item"><a href="javascript:;"> <i
							class="layui-icon">&#xe66f;</i> <em>个人信息管理</em>
					</a>
						<dl class="layui-nav-child">
							<dd>
								<a href="updatePassword.php">修改登录密码</a>
							</dd>
						</dl>
						<dl class="layui-nav-child">
							<dd>
								<a href="updateHead.php">修改用户头像</a>
							</dd>
						</dl></li>
					<li class='layui-nav-item'><a href='javascript:;'> <i
							class='layui-icon'>&#xe60a;</i> <em>我的足迹</em>
					</a>
						<dl class='layui-nav-child'>
							<dd>
								<a href='myComment.php'>我的评论</a>
							</dd>
						</dl></li>
                    <?php
                    if (isset($_SESSION['userType']) && $_SESSION['userType'] == 'manager') {
                        echo "<li class='layui-nav-item'>" . "<a href='javascript:;'>" . "<i class='layui-icon'>&#xe612;</i>" . "<em>管理用户</em>" . "</a>" . "<dl class='layui-nav-child'>" . "<dd><a href='addAdministrator.php'>添加管理员</a></dd>" . "<dd><a href='resetPassword.php'>重置用户密码</a></dd>" . "<dd><a href='deleteUser.php'>删除用户</a></dd>" . "</dl>" . "</li>" . "<li class='layui-nav-item'>" . "<a href='javascript:;'>" . "<i class='layui-icon'>&#xe857;</i>" . "<em>电影管理</em>" . "</a>" . "<dl class='layui-nav-child'>" . "<dd><a href='deleteMovie.php'>删除电影</a></dd>" . "<dd><a href='./addHotMovie.php'>添加热门电影</a></dd>" . "<dd><a href='./removeHotMovie.php'>移除热门电影</a></dd>" . "<dd><a href='./manageUnscreenedMovie.php'>未上映电影管理</a></dd>" . "</dl>" . "</li>" . "<li class='layui-nav-item'>" . "<a href='javascript:;'>" . "<i class='layui-icon'>&#xe614;</i>" . "<em>资源管理</em>" . "</a>" . "<dl class='layui-nav-child'>" . "<dd><a href='../broadcast/add_broadcast.html'>添加广播</a></dd>" . "<dd><a href='./add_featuredlist.php'>添加特色榜单</a></dd>" . "<dd><a href='./add_boxoffice.php'>添加电影票房</a></dd>" . "<dd><a href='./add_popularmoviereview.php'>添加热门评论</a></dd>" . "</dl>" . "</li>";
                    }
                    ?>               
                </ul>
			</div>
		</div>

		<div class="layui-body">
			<div class="layui-tab app-container" lay-allowClose="true"
				lay-filter="tabs">
				<ul id="appTabs" class="layui-tab-title custom-tab"></ul>
				<div id="appTabPage" class="layui-tab-content"></div>
			</div>
		</div>

		<div class="layui-footer">
			<p>© 2018 权限所有 · 东莞理工学院 · 2016级软件工程卓越计划班 - All rights reserved ·
				Dongguan University of technology</p>
		</div>

		<div class="mobile-mask"></div>
	</div>
	<script src="assets/layui.js"></script>
	<script src="index.js" data-main="home"></script>
	<script type="text/javascript">
    function preview() {
		var preview = document.getElementById("myImage");
		var file = document.getElementById("myFile").files[0];
		var reader = new FileReader();
		reader.onloadend = function() {
			preview.src = reader.result;
		}
		if (file)
			reader.readAsDataURL(file);
		else
			preview.src = "";
	}
    function submitCheck(){
        var file = document.getElementById("myFile").files[0];			
        if(file=="" || file==null){
            alert("请选择上传头像文件再提交！");
            return false;
        }else if(file.size > 1024 * 1024 * 2) {
            alert('图片大小不能超过 2MB!');
            return false;
        }else{
            var form=document.getElementById("form");
            form.submit();
        }
    }
    </script>
</body>
</html>