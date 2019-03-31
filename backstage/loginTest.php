<!-- 作者：谢森宇 徐聘 付乐祺 -->
<!-- 班级：2016级软件工程卓越计划2班 -->
<!-- 学院：计算机与网络安全学院 -->
<!-- 学校：东莞理工学院 -->
<?php
session_start();
include_once ("database.php");
if (is_array($_POST) && count($_POST) > 0) {
    $userName = $_POST['userName'];
    $password = md5(md5($_POST['password']));
    get_connection();
    $hasUserCheckSQL = "select * from user where userName='$userName'";
    $resultSet = mysql_query($hasUserCheckSQL);
    $num_row = mysql_num_rows($resultSet);
    close_connection();
    if ($num_row > 0) {
        get_connection();
        $loginCheckSQL = "select * from user where userName='$userName' and password='$password'";
        $resultSet = mysql_query($loginCheckSQL);
        $num_row = mysql_num_rows($resultSet);
        close_connection();
        if ($num_row > 0) {
            echo "<script type='text/javascript'>
                alert('登录测试成功！该用户可以正常使用');
            </script>";
            header('refresh:0;url=loginTest.php');
        } else {
            echo "<script type='text/javascript'>
                alert('用户名或密码错误!登录测试失败，请重置用户密码......');
            </script>";
            header('refresh:0;url=resetPassword.php');
        }
    } else {
        echo "<script type='text/javascript'>
                alert('该用户不存在！请检查之后再进行操作......');
            </script>";
        header('refresh:0;url=loginTest.php');
    }
}
?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<link rel="stylesheet" href="assets/css/layui.css">
</head>
<body>
	<br>
	<br>
	<br>
	<br>
	<br>
	<a href="./resetPassword.php" style="margin-left: 20%;"><<返回重置用户密码界面</a>
	<br>
	<br>
	<br>
	<form class="layui-form layui-form-pane" id="form"
		action="loginTest.php" method="post">
		<table width="300" border="0" align="center" cellspacing="0"
			cellpadding="0">
			<tbody>
				<tr>
					<td colspan="2"
						style="text-align: center; line-height: 30px; font-size: 20px;">用户登录测试</td>
				</tr>
				<tr>
					<td align="right" height="60"><label class="layui-form-label">用户名</label></td>
					<td align="left">
						<div class="layui-input-inline">
							<input type="text" name="userName" id="userName" required
								lay-verify="required" placeholder="请输入用户名" autocomplete="off"
								class="layui-input">
						</div>
					</td>
				</tr>
				<tr>
					<td align="right" height="60"><label class="layui-form-label">密码</label></td>
					<td align="left">
						<div class="layui-input-inline">
							<input type="password" name="password" id="password" required
								lay-verify="required" placeholder="请输入密码" autocomplete="off"
								class="layui-input">
						</div>
					</td>
				</tr>
				<tr>
					<td colspan="2" height="60" style="text-align: center;"><input
						class="layui-btn layui-btn-radius" type="submit"
						value="   登 录 测 试   " onclick="return submitCheck()" />
				
				</tr>
			</tbody>
		</table>
	</form>
	<script type="text/javascript">
    function submitCheck(){
			var userName=document.getElementById("userName").value;
			var password=document.getElementById("password").value;
            if(userName=="" || userName==null || password=="" || password==null){
                alert("请填写用户名以及密码!");
                return false;
            }else{     
                var form=document.getElementById("form");
                form.submit();
            }
		}
    </script>
</body>
</html>