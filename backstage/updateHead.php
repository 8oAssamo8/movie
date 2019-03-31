<!-- 作者：谢森宇 徐聘 付乐祺 -->
<!-- 班级：2016级软件工程卓越计划2班 -->
<!-- 学院：计算机与网络安全学院 -->
<!-- 学校：东莞理工学院 -->
<?php
session_start();
include_once ("database.php");
if (isset($_FILES['myFile']) && ! empty($_FILES['myFile'])) {
    $myPicture = $_FILES['myFile'];
    $error = $myPicture['error'];
    switch ($error) {
        case 0:
            $myPictureName = $myPicture['name'];
            // echo "你上传的第一张照片为：" . $myPictureName . "<br/>";
            $myPictureTemp1 = $myPicture['tmp_name'];
            $destinaion = "../public/upload/head/" . $myPictureName;
            move_uploaded_file($myPictureTemp1, $destinaion);
            // echo "文件上传成功！<br/>";
            // 更新数据库中的头像路径
            $userName = $_SESSION['userName'];
            get_connection();
            $updateHeadSQL = "update user set headurl='$destinaion' where userName='$userName'";
            $resultSet = mysql_query($updateHeadSQL);
            close_connection();
            $_SESSION['userHeadUrl'] = $destinaion;
            echo "<script type='text/javascript'>
                    alert('头像上传成功!');
                </script>";
            break;
        case 1:
            echo "上传的文件超过了php.ini中upload_max_filesize选项限制的值！<br/>";
            break;
        
        case 2:
            echo "上传的文件超过了FORM表单中MAX_FILE_SIZE选项指定的值！<br/>";
            break;
        case 3:
            echo "文件只有部分被上传！<br/>";
            break;
        case 4:
            echo "没有选择上传文件！<br/>";
            break;
    }
}
?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
</head>
<body>
	<br>
	<br>
	<br>
	<br>
	<br>
	<center>
		<form id="form" action="updateHead.php" method="post"
			enctype="multipart/form-data">
			<table width="550" border="0" cellspacing="0" cellpadding="0">
				<tbody>
					<tr>
						<td colspan="3" align="center" height="60"
							style="line-height: 30px; font-size: 25px;">修改用户头像</td>
					</tr>
					<tr>
						<td align="center" height="125" width="250"><img id="myHead"
							height="100" width="100"
							src="<?php echo $_SESSION['userHeadUrl'] ?>" /></td>
						<td align="center">=></td>
						<td align="center" width="250"><img id="myImage" height="100"
							width="100" src="./assets//images/add.jpg" /></td>
					</tr>
					<tr>
						<td align="center" height="40">当前头像</td>
						<td></td>
						<td align="center"><input type="hidden" name="MAX_FILE_SIZE"
							value="1048576"> <input id="myFile" name="myFile" type="file"
							accept=".dwg,.dxf,.gif,.jp2,.jpe,.jpeg,.jpg,.png,.svf,.tif,.tiff"
							size="25" maxlength="100" onchange="preview()"></td>
					</tr>
					<tr>
						<td colspan="3" align="center" height="40"><input type="submit"
							value="   提   交   " onclick="return submitCheck()" /></td>
					</tr>
				</tbody>
			</table>
		</form>
	</center>
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