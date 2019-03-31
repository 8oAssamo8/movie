<?php
session_start();
include_once ("database.php");
$userName = '';
if (isset($_COOKIE['userName'])) {
    $userName = $_COOKIE['userName'];
}
$password = '';
if (isset($_COOKIE['password'])) {
    $password = $_COOKIE['password'];
}
if (is_array($_POST) && count($_POST) > 0) {
    $userName = $_POST['userName'];
    $password = md5(md5($_POST['password']));
    if ($_POST['login_checknum'] != $_SESSION['login_checknum']) {
        echo "<script type='text/javascript'>
                alert('验证码输入有误!请重新登录......');
            </script>";
        header('refresh:0;url=login.php');
        return;
    }
    get_connection();
    $loginCheckSQL = "select * from user where userName='$userName' and password='$password'";
    $resultSet = mysql_query($loginCheckSQL);
    $num_row = mysql_num_rows($resultSet);
    close_connection();
    if ($num_row > 0) {
        while ($user = mysql_fetch_array($resultSet)) {
            $userId = $user['id'];
            $userName = $user['userName'];
            $userType = $user['userType'];
            $userHeadUrl = $user['headurl'];
        }
        $_SESSION['userId'] = $userId;
        $_SESSION['userName'] = $userName;
        $_SESSION['userType'] = $userType;
        $_SESSION['userHeadUrl'] = $userHeadUrl;
        $_SESSION['isLogin'] = 1;
        if ($_POST['remember'] == 'remembered') {
            setCookie("userName", "$userName", time() + 3600 * 24 * 7);
            setCookie("password", $_POST['password'], time() + 3600 * 24 * 7);
        }
        header('location:../index.php');
    } else {
        echo "<script type='text/javascript'>
                alert('用户名或密码错误!请重新登录......');
            </script>";
        header('refresh:0;url=login.php');
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>用户登录页面</title>
<meta name="description"
	content="particles.js is a lightweight JavaScript library for creating particles.">
<meta name="author" content="Vincent Garreau" />
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<link rel="stylesheet" media="screen"
	href="../public/css/loginStyle.css">
<link rel="stylesheet" type="text/css" href="../public/css/reset.css" />
<link rel="shortcut icon" href="../public/images/icon.png"
	type="image/x-icon">
</head>

<body>
	<form id="form" action="login.php" method="post">
		<div id="particles-js">
			<div class="login">
				<br>
				<br> <a href="../index.php" style="margin-left: 20px;"><<返回主页面</a>
				<div class="login-top">登录</div>
				<div class="login-center clearfix">
					<div class="login-center-img">
						<img src="../public/images/name.png" />
					</div>
					<div class="login-center-input">
						<input type="text" id="userName" name="userName"
							value="<?php echo $userName ?>" placeholder="请输入您的用户名"
							onfocus="this.placeholder=''"
							onblur="this.placeholder='请输入您的用户名'" />
						<div class="login-center-input-text">用户名</div>
					</div>
				</div>
				<div class="login-center clearfix">
					<div class="login-center-img">
						<img src="../public/images/password.png" />
					</div>
					<div class="login-center-input">
						<input type="password" id="password" name="password"
							value="<?php echo $password ?>" placeholder="请输入您的密码"
							onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的密码'" />
						<div class="login-center-input-text">密码</div>
					</div>
				</div>
				<div class="login-center clearfix">
					<div class="login-center-img">
						<img src="../public/images/checknum.png" />
					</div>
					<div class="login-center-input">
						<input type="text" id="login_checknum" name="login_checknum"
							size="6" placeholder="请输入验证码" onfocus="this.placeholder=''"
							onblur="this.placeholder='请输入验证码'" />
						<div class="login-center-input-text">验证码</div>
						<input type="text" disabled="disabled"
							value="<?php
    
$login_checknum = '';
    $login_checknum .= mt_rand(0, 0);
    $login_checknum .= mt_rand(0, 9);
    $login_checknum .= mt_rand(0, 9);
    $login_checknum .= mt_rand(0, 9);
    $_SESSION['login_checknum'] = $login_checknum;
    echo "验证码:" . $login_checknum;
    ?>"
							size="6" />
					</div>
				</div>
				<div class="login-center clearfix"
					style="padding-top: 20px; margin-bottom: 10px; line-height: 2;">
					<input type="checkbox" name="remember" value="remembered" />7天内记住用户名和密码
					<div style="display: block; margin-right: 10px; float: right;">
						<a href="./register.php">新用户注册</a>
					</div>
				</div>
				<div class="login-button" onclick="return submit()">登录</div>
			</div>
			<div class="sk-rotating-plane"></div>
		</div>
	</form>

	<!-- scripts -->
	<script src="../public/js/particles.min.js"></script>
	<script src="../public/js/app.js"></script>
	<script type="text/javascript">
        function hasClass(elem, cls) {
            cls = cls || '';
            if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
            return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
        }

        function addClass(ele, cls) {
            if (!hasClass(ele, cls)) {
                ele.className = ele.className == '' ? cls : ele.className + ' ' + cls;
            }
        }

        function removeClass(ele, cls) {
            if (hasClass(ele, cls)) {
                var newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
                while (newClass.indexOf(' ' + cls + ' ') >= 0) {
                    newClass = newClass.replace(' ' + cls + ' ', ' ');
                }
                ele.className = newClass.replace(/^\s+|\s+$/g, '');
            }
        }
		function submit(){
			var userName=document.getElementById("userName").value;
			var password=document.getElementById("password").value;
            if(userName=="" || userName==null || password=="" || password==null){
                alert("请填写用户名和密码!");
                return false;
            }else{
			    var login_checknum=document.getElementById("login_checknum").value;
                if(login_checknum==""){
                    alert("请填写验证码!");
                    return false;
                }else{                    
                    var form=document.getElementById("form");
                    form.submit();
                }
            }
        }
    </script>
</body>
</html>