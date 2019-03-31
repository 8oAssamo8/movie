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
    if ($_POST['resetPassword_checknum'] != $_SESSION['resetPassword_checknum']) {
        echo "<script type='text/javascript'>
                alert('验证码输入有误!请重新重置用户密码......');
            </script>";
        header('refresh:0;url=resetPassword.php');
        return;
    }
    get_connection();
    $registerCheckSQL = "select * from user where userName='$userName'";
    $resultSet = mysql_query($registerCheckSQL);
    $num_row = mysql_num_rows($resultSet);
    close_connection();
    if ($num_row == 0) {
        echo "<script type='text/javascript'>
                alert('重置用户不存在，请检查之后再进行操作......');
            </script>";
        header('refresh:0;url=resetPassword.php');
    } else {
        get_connection();
        $registerSQL = "update user set password='$password' where userName='$userName'";
        mysql_query($registerSQL);
        $num_row = mysql_affected_rows();
        close_connection();
        if ($num_row >= 0) {
            echo "<script type='text/javascript'>
                    alert('重置用户密码成功!正在跳转登录测试界面……');
                </script>";
            header('refresh:0;url=loginTest.php');
        } else {
            echo "<script type='text/javascript'>
                alert('重置用户密码失败!请尝试重新重置密码......');
            </script>";
            header('refresh:0;url=resetPassword.php');
        }
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
	<form class="layui-form layui-form-pane" id="form"
		action="resetPassword.php" method="post">
		<table width="300" border="0" align="center" cellspacing="0"
			cellpadding="0">
			<tbody>
				<tr>
					<td colspan="2"
						style="text-align: center; line-height: 30px; font-size: 20px;">重置用户密码</td>
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
					<td align="right" height="60"><label class="layui-form-label">新密码</label></td>
					<td align="left">
						<div class="layui-input-inline">
							<input type="password" name="password" id="password" required
								lay-verify="required" placeholder="请输入新密码" autocomplete="off"
								class="layui-input">
						</div>
					</td>
				</tr>
				<tr>
					<td rowspan="2" align="right" height="80"><label
						style="height: 78px; line-height: 63px;" class="layui-form-label">验证码</label></td>
					<td><div class="layui-input-inline">
							<input type="text" name="resetPassword_checknum"
								id="resetPassword_checknum" required lay-verify="required"
								placeholder="请输入验证码" autocomplete="off" class="layui-input">
						</div></td>
				</tr>
				<tr>

					<td><div class="layui-input-inline">
							<input type="text" disabled="disabled" class="layui-input"
								value="<?php
        
        $resetPassword_checknum = '';
        $resetPassword_checknum .= mt_rand(0, 9);
        $resetPassword_checknum .= mt_rand(0, 9);
        $resetPassword_checknum .= mt_rand(0, 9);
        $resetPassword_checknum .= mt_rand(0, 9);
        $_SESSION['resetPassword_checknum'] = $resetPassword_checknum;
        echo "验证码:" . $resetPassword_checknum;
        ?>" />
						</div></td>
				</tr>
				<tr>
					<td colspan="2" height="60" style="text-align: center;"><input
						class="layui-btn layui-btn-radius" type="submit" value="  提   交  "
						onclick="return submitCheck()" /> <input
						class="layui-btn layui-btn-radius" type="button" value=" 登录测试页面 "
						onclick="goTest()" /></td>
				</tr>
			</tbody>
		</table>
	</form>
	<script type="text/javascript">
    function submitCheck(){
        var userName=document.getElementById("userName").value;
        var password=document.getElementById("password").value;
        var checknum=document.getElementById("resetPassword_checknum").value;
        if(userName=="" || userName==null || password=="" || password==null){
            alert("请填写用户名以及密码!");
            return false;
        }else if(checknum=="" || checknum==null){
            alert("请填写验证码!");
            return false;
        }
        else{     
            var form=document.getElementById("form");
            form.submit();
        }
    }
    function goTest(){
        window.location.href="loginTest.php";  
    }
    </script>
</body>
</html>