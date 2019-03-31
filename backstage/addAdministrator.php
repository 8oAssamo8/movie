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
    // 默认头像地址
    $default_head = "../public/upload/head/default_head.png";
    if ($_POST['addAdministrator_checknum'] != $_SESSION['addAdministrator_checknum']) {
        echo "<script type='text/javascript'>
                alert('验证码输入有误!请重新添加管理员......');
            </script>";
        header('refresh:0;url=addAdministrator.php');
        return;
    }
    get_connection();
    $registerCheckSQL = "select * from user where userName='$userName'";
    $resultSet = mysql_query($registerCheckSQL);
    $num_row = mysql_num_rows($resultSet);
    close_connection();
    if ($num_row > 0) {
        echo "<script type='text/javascript'>
                alert('已经存在相同Id管理员!请更换管理员Id重新添加......');
            </script>";
    } else {
        get_connection();
        $registerSQL = "insert into user(userName,password,userType,headurl) values('$userName','$password','manager','$default_head')";
        mysql_query($registerSQL);
        $num_row = mysql_affected_rows();
        close_connection();
        if ($num_row > 0) {
            echo "<script type='text/javascript'>
                    alert('管理员添加成功!');
                </script>";
        } else {
            echo "<script type='text/javascript'>
                alert('管理员添加失败!请尝试重新添加......');
            </script>";
        }
    }
    header('refresh:0;url=addAdministrator.php');
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
		action="addAdministrator.php" method="post">
		<table width="300" border="0" align="center" cellspacing="0"
			cellpadding="0">
			<tbody>
				<tr>
					<td colspan="2"
						style="text-align: center; line-height: 30px; font-size: 20px;">添加管理员</td>
				</tr>
				<tr>


					<td align="right" height="60"><label class="layui-form-label">管理员Id</label></td>
					<td align="left"><div class="layui-input-inline">
							<input type="text" name="userName" id="userName" required
								lay-verify="required" placeholder="请输入管理员Id" autocomplete="off"
								class="layui-input">
						</div></td>
				</tr>
				<tr>
					<td align="right" height="60"><label class="layui-form-label">密码</label></td>
					<td align="left"><div class="layui-input-inline">
							<input type="password" name="password" id="password" required
								lay-verify="required" placeholder="请输入密码" autocomplete="off"
								class="layui-input">
						</div></td>
				</tr>
				<tr>
					<td rowspan="2" align="right" height="80"><label
						style="height: 78px; line-height: 63px;" class="layui-form-label">验证码</label></td>
					<td><div class="layui-input-inline">
							<input type="text" name="addAdministrator_checknum"
								id="addAdministrator_checknum" required lay-verify="required"
								placeholder="请输入验证码" autocomplete="off" class="layui-input">
						</div></td>
				</tr>
				<tr>
					<td><div class="layui-input-inline">
							<input type="text" disabled="disabled" class="layui-input"
								value="<?php
        
        $addAdministrator_checknum = '';
        $addAdministrator_checknum .= mt_rand(0, 9);
        $addAdministrator_checknum .= mt_rand(0, 9);
        $addAdministrator_checknum .= mt_rand(0, 9);
        $addAdministrator_checknum .= mt_rand(0, 9);
        $_SESSION['addAdministrator_checknum'] = $addAdministrator_checknum;
        echo "验证码:" . $addAdministrator_checknum;
        ?>" />
						</div></td>
				</tr>
				<tr>
					<td colspan="2" height="60" style="text-align: center;"><input
						class="layui-btn layui-btn-radius" type="submit"
						value="   提   交   " onclick="return submitCheck()" /></td>
				</tr>
			</tbody>
		</table>
	</form>
	<script type="text/javascript">
    function submitCheck(){
			var userName=document.getElementById("userName").value;
			var password=document.getElementById("password").value;
			var checknum=document.getElementById("addAdministrator_checknum").value;
            if(userName=="" || userName==null || password=="" || password==null){
                alert("请填写管理员Id以及密码!");
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
    </script>
</body>
</html>