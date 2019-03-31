<?php
session_start();
include_once ("database.php");
if (is_array($_POST) && count($_POST) > 0) {
    $userName = $_POST['userName'];
    $password = md5(md5($_POST['password']));
    // 默认头像地址
    $default_head = "../public/upload/head/default_head.png";
    if ($_POST['register_checknum'] != $_SESSION['register_checknum']) {
        echo "<script type='text/javascript'>
                alert('验证码输入有误!请重新注册......');
            </script>";
        header('refresh:0;url=register.php');
        return;
    }
    get_connection();
    $registerCheckSQL = "select * from user where userName='$userName'";
    $resultSet = mysql_query($registerCheckSQL);
    $num_row = mysql_num_rows($resultSet);
    close_connection();
    if ($num_row > 0) {
        echo "<script type='text/javascript'>
                alert('已经存在同名用户!请更换用户名重新注册......');
            </script>";
        header('refresh:0;url=register.php');
    } else {
        get_connection();
        $registerSQL = "insert into user(userName,password,headurl) values('$userName','$password','$default_head')";
        mysql_query($registerSQL);
        $num_row = mysql_affected_rows();
        close_connection();
        if ($num_row > 0) {
            echo "<script type='text/javascript'>
                    alert('注册成功!请前往登录页面进行登录操作......');
                </script>";
            header('refresh:0;url=login.php');
        } else {
            echo "<script type='text/javascript'>
                alert('注册失败!请尝试重新注册......');
            </script>";
            header('refresh:0;url=register.php');
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>用户注册页面</title>
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
	<form id="form" action="register.php" method="post">
		<div id="particles-js">
			<div class="login">
				<br>
				<br> <a href="../index.php" style="margin-left: 20px;"><<返回主页面</a>
				<div class="login-top" style="margin-bottom: 50px;">用户注册</div>
				<div class="login-center clearfix ">
					<div class="login-center-img">
						<img src="../public/images/name.png" />
					</div>
					<div class="login-center-input">
						<input type="text" id="userName" name="userName"
							placeholder="请输入您的用户名" onfocus="this.placeholder=''"
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
							placeholder="请输入您的密码" onfocus="this.placeholder=''"
							onblur="this.placeholder='请输入您的密码'" />
						<div class="login-center-input-text">密码</div>
					</div>
				</div>
				<div class="login-center clearfix" style="margin-bottom: 50px;">
					<div class="login-center-img">
						<img src="../public/images/checknum.png" />
					</div>
					<div class="login-center-input">
						<input type="text" id="register_checknum" name="register_checknum"
							size="6" placeholder="请输入验证码" onfocus="this.placeholder=''"
							onblur="this.placeholder='请输入验证码'" />
						<div class="login-center-input-text">验证码</div>
						<input type="text" disabled="disabled"
							value="<?php
    
$register_checknum = '';
    $register_checknum .= mt_rand(0, 9);
    $register_checknum .= mt_rand(0, 9);
    $register_checknum .= mt_rand(0, 9);
    $register_checknum .= mt_rand(0, 9);
    $_SESSION['register_checknum'] = $register_checknum;
    echo "验证码:" . $register_checknum;
    ?>"
							size="6" />
					</div>
				</div>
				<div class="login-center clearfix"
					style="padding-top: 0px; margin-bottom: 0px;">
					<div style="margin-right: 10px; float: right;">
						<a href="./login.php">用户登录</a>
					</div>
				</div>
				<div class="login-button" onclick="return submit()">注册</div>
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
			    var register_checknum=document.getElementById("register_checknum").value;
                if(register_checknum==""){
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