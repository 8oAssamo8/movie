<!-- 作者：谢森宇 徐聘 付乐祺 -->
<!-- 班级：2016级软件工程卓越计划2班 -->
<!-- 学院：计算机与网络安全学院 -->
<!-- 学校：东莞理工学院 -->
<?php
session_start();
if (! isset($_SESSION['userName'])) {
    header('location:../index.php');
}
include_once ("database.php");
if (is_array($_POST) && count($_POST) > 0) {
    $oldPassword = md5(md5($_POST['oldPassword']));
    $newPassword = md5(md5($_POST['newPassword']));
    get_connection();
    $selectSQL = "select * from user where userName='" . $_SESSION['userName'] . "' and password='$oldPassword'";
    $resultSet = mysql_query($selectSQL);
    $num_row = mysql_num_rows($resultSet);
    close_connection();
    if ($num_row > 0) {
        get_connection();
        $updateSQL = "update user set password='$newPassword' where userName='" . $_SESSION['userName'] . "'";
        $resultSet = mysql_query($updateSQL);
        close_connection();
        echo "<script type='text/javascript'>
                alert('密码修改成功!');
            </script>";
    } else {
        echo "<script type='text/javascript'>
                alert('旧密码错误!请检查之后再进行操作......');
            </script>";
    }
    header("refresh:0;url=updatePassword.php");
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
		action="updatePassword.php" method="post">
		<table width="300" border="0" align="center" cellspacing="0"
			cellpadding="0">
			<tbody>
				<tr>
					<td colspan="2"
						style="text-align: center; line-height: 30px; font-size: 20px;">修改密码</td>
				</tr>
				<tr>
					<td align="right" height="60"><label class="layui-form-label">旧密码</label></td>
					<td align="left"><div class="layui-input-inline">
							<input type="password" name="oldPassword" id="oldPassword"
								required lay-verify="required" placeholder="请输入旧密码"
								autocomplete="off" class="layui-input">
						</div></td>
				</tr>
				<tr>
					<td align="right" height="60"><label class="layui-form-label">新密码</label></td>
					<td align="left"><div class="layui-input-inline">
							<input type="password" name="newPassword" id="newPassword"
								required lay-verify="required" placeholder="请输入新密码"
								autocomplete="off" class="layui-input">
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
			var oldPassword=document.getElementById("oldPassword").value;
			var newPassword=document.getElementById("newPassword").value;
            if(oldPassword=="" || oldPassword==null || newPassword=="" || newPassword==null){
                alert("请填写旧密码以及新密码!");
                return false;
            }else{     
                var form=document.getElementById("form");
                form.submit();
            }
		}
    </script>
</body>
</html>