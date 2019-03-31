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
            $myPictureTemp1 = $myPicture['tmp_name'];
            $destinaion = "../public/upload/boxOffice/" . $myPictureName;
            move_uploaded_file($myPictureTemp1, $destinaion);
            $image = substr($destinaion, 1);
            get_connection();
            $insertSQL = "insert into boxoffice(title,type,image,url,boxOffice,allBoxOffice) values('" . $_POST['title'] . "','" . $_POST['type'] . "','$image','" . $_POST['url'] . "','" . $_POST['boxOffice'] . "','" . $_POST['allBoxOffice'] . "')";
            // echo $insertSQL;
            $resultSet = mysql_query($insertSQL);
            close_connection();
            echo "<script type='text/javascript'>
                    alert('电影票房添加成功!');
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
<html>
<head>
<title></title>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css"
	href="../public/css/bootstrap.css" />
<link rel="stylesheet" type="text/css"
	href="../public/css/bootstrap-responsive.css" />
<link rel="stylesheet" type="text/css" href="../public/css/style.css" />
<script type="text/javascript" src="../public/js/jquery.js"></script>
<script type="text/javascript" src="../public/js/bootstrap.js"></script>
<script type="text/javascript" src="../public/js/ckform.js"></script>
<style type="text/css">
body {
	font-size: 20px;
	padding-bottom: 40px;
	background-color: #e9e7ef;
	font-size: 17px;
	font-size: 20px;
}

.sidebar-nav {
	padding: 9px 0;
}

@media ( max-width : 980px) {
	/* Enable use of floated navbar text */
	.navbar-text.pull-right {
		float: none;
		padding-left: 5px;
		padding-right: 5px;
	}
}
</style>
<link rel="stylesheet" href="../backstage/assets/css/layui.css">
</head>
<div style="width: 900px; margin-left: 20%;">
	<form action="./add_boxoffice.php" method="post"
		enctype="multipart/form-data">
		<table class="layui-table"
			style="width: 700px; margin-left: 3%; margin-top: 2%;">
			<thead>
				<tr>
					<th colspan="2"
						style="line-height: 30px; font-size: 25px; text-align: center;">添加电影票房</th>
				</tr>
			</thead>
			<tr>
				<td width="15%" class="tableleft">类型</td>
				<td><select name="type" style="height: 35px;">
						<option value="Inland">内地</option>
						<option value="NorthAmerica">北美</option>
						<option value="Global">全球</option>
				</select></td>

			</tr>
			<tr>
				<td width="15%" class="tableleft">电影名</td>
				<td><input type="text" name="title"
					style="height: 41px; width: 546px" /></td>

			</tr>
			<tr>
				<td class="tableleft">海报预览</td>
				<td align="center"><img id="myImage" height="100" width="100"
					src="./assets//images/add.jpg" /></td>
			</tr>
			<tr>
				<td class="tableleft">选择文件</td>
				<td align="center"><input type="hidden" name="MAX_FILE_SIZE"
					value="1048576"> <input id="myFile" name="myFile" type="file"
					accept=".dwg,.dxf,.gif,.jp2,.jpe,.jpeg,.jpg,.png,.svf,.tif,.tiff"
					size="25" maxlength="100" onchange="preview()"></td>
			</tr>
			<tr>
				<td width="10%" class="tableleft">详情链接</td>
				<td><input type="text" name="url" style="height: 41px; width: 546px" /></td>

			</tr>
			<tr>
				<td width="10%" class="tableleft">日票房(单位：万)</td>
				<td><input type="number" name="boxOffice"
					style="height: 41px; width: 546px" />万</td>

			</tr>
			<tr>
				<td width="10%" class="tableleft">累计票房(单位：亿)</td>
				<td><input type="number" name="allBoxOffice"
					style="height: 41px; width: 546px" />亿</td>

			</tr>

			<tr>
				<td class="tableleft"></td>
				<td>
					<button style="margin-left: 180px; width: 80px;" type="submit"
						class="btn btn-primary" type="button">提 交</button>
				</td>
			</tr>
		</table>
	</form>
</div>
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
        var file1 = document.getElementById("myFile").files[0];		
        if(file1=="" || file1==null){
            alert("请选择上传所有海报文件再提交！");
            return false;
        }else if(file1.size > 1024 * 1024 * 2) {
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
