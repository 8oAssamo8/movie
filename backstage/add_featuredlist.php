<!-- 作者：谢森宇 徐聘 付乐祺 -->
<!-- 班级：2016级软件工程卓越计划2班 -->
<!-- 学院：计算机与网络安全学院 -->
<!-- 学校：东莞理工学院 -->
<?php
session_start();
include_once ("database.php");
if ((isset($_FILES['myFile1']) && ! empty($_FILES['myFile1'])) && (isset($_FILES['myFile2']) && ! empty($_FILES['myFile2'])) && (isset($_FILES['myFile3']) && ! empty($_FILES['myFile3']))) {
    $myPicture1 = $_FILES['myFile1'];
    $error1 = $myPicture1['error'];
    switch ($error1) {
        case 0:
            $myPictureName1 = $myPicture1['name'];
            $myPictureTemp1 = $myPicture1['tmp_name'];
            $destinaion1 = "../public/upload/featuredlist/" . $myPictureName1;
            move_uploaded_file($myPictureTemp1, $destinaion1);
            $image1 = substr($destinaion1, 1);
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
    
    $myPicture2 = $_FILES['myFile2'];
    $error2 = $myPicture2['error'];
    switch ($error2) {
        case 0:
            $myPictureName2 = $myPicture2['name'];
            $myPictureTemp2 = $myPicture2['tmp_name'];
            $destinaion2 = "../public/upload/featuredlist/" . $myPictureName2;
            move_uploaded_file($myPictureTemp2, $destinaion2);
            $image2 = substr($destinaion2, 1);
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
    
    $myPicture3 = $_FILES['myFile3'];
    $error3 = $myPicture3['error'];
    switch ($error3) {
        case 0:
            $myPictureName3 = $myPicture3['name'];
            $myPictureTemp3 = $myPicture3['tmp_name'];
            $destinaion3 = "../public/upload/featuredlist/" . $myPictureName3;
            move_uploaded_file($myPictureTemp3, $destinaion3);
            $image3 = substr($destinaion3, 1);
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
    // 连接数据库添加特色榜单内容
    get_connection();
    $insertSQL = "insert into featuredlist(title,image1,image2,image3,url) values('" . $_POST['title'] . "','$image1','$image2','$image3','" . "http://" . $_POST['url'] . "')";
    $resultSet = mysql_query($insertSQL);
    close_connection();
    echo "<script type='text/javascript'>
    alert('特色榜单添加成功!');
    </script>";
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
	<form id="form" action="./add_featuredlist.php" method="post"
		enctype="multipart/form-data">
		<table class="layui-table"
			style="width: 700px; margin-left: 3%; margin-top: 2%;">
			<thead>
				<tr>
					<th colspan="2"
						style="line-height: 30px; font-size: 25px; text-align: center;">添加特色榜单</th>
				</tr>
			</thead>
			<tr>
				<td width="15%" class="tableleft">标题</td>
				<td><input type="text" id="title" name="title"
					style="height: 41px; width: 546px" /></td>

			</tr>
			<tr>
				<td class="tableleft">海报1预览</td>
				<td align="center"><img id="myImage1" height="100" width="100"
					src="./assets//images/add.jpg" /> <br> <input type="hidden"
					name="MAX_FILE_SIZE" value="1048576"> <input id="myFile1"
					name="myFile1" type="file"
					accept=".dwg,.dxf,.gif,.jp2,.jpe,.jpeg,.jpg,.png,.svf,.tif,.tiff"
					size="25" maxlength="100" onchange="preview1()"></td>
			</tr>
			<tr>
				<td class="tableleft">海报2预览</td>
				<td align="center"><img id="myImage2" height="100" width="100"
					src="./assets//images/add.jpg" /> <br> <input type="hidden"
					name="MAX_FILE_SIZE" value="1048576"> <input id="myFile2"
					name="myFile2" type="file"
					accept=".dwg,.dxf,.gif,.jp2,.jpe,.jpeg,.jpg,.png,.svf,.tif,.tiff"
					size="25" maxlength="100" onchange="preview2()"></td>
			</tr>
			<tr>
				<td class="tableleft">海报3预览</td>
				<td align="center"><img id="myImage3" height="100" width="100"
					src="./assets//images/add.jpg" /> <br> <input type="hidden"
					name="MAX_FILE_SIZE" value="1048576"> <input id="myFile3"
					name="myFile3" type="file"
					accept=".dwg,.dxf,.gif,.jp2,.jpe,.jpeg,.jpg,.png,.svf,.tif,.tiff"
					size="25" maxlength="100" onchange="preview3()"></td>
			</tr>
			<tr>
				<td width="10%" class="tableleft">详情链接</td>
				<td><input type="text" id="url" name="url"
					style="height: 41px; width: 546px" /></td>

			</tr>
			<tr>
				<td class="tableleft"></td>
				<td>
					<button style="margin-left: 180px; width: 80px;"
						class="btn btn-primary" type="button" onclick="submitCheck();">提交</button>
				</td>
			</tr>
		</table>
	</form>
</div>
<script type="text/javascript">
    function preview1() {
		var preview = document.getElementById("myImage1");
		var file = document.getElementById("myFile1").files[0];
		var reader = new FileReader();
		reader.onloadend = function() {
			preview.src = reader.result;
		}
		if (file)
			reader.readAsDataURL(file);
		else
			preview.src = "";
	}
    function preview2() {
		var preview = document.getElementById("myImage2");
		var file = document.getElementById("myFile2").files[0];
		var reader = new FileReader();
		reader.onloadend = function() {
			preview.src = reader.result;
		}
		if (file)
			reader.readAsDataURL(file);
		else
			preview.src = "";
	}
    function preview3() {
		var preview = document.getElementById("myImage3");
		var file = document.getElementById("myFile3").files[0];
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
        var title = document.getElementById("title").value;	
        var file1 = document.getElementById("myFile1").files[0];	
        var file2 = document.getElementById("myFile2").files[0];
        var file3 = document.getElementById("myFile3").files[0];
        var url = document.getElementById("url").value;	
        if(title=="" || title==null){
        	alert("请输入标题！");
            return false;
        }else if(file1=="" || file1==null || file2=="" || file2==null || file3=="" || file3==null){
            alert("请选择上传所有海报文件再提交！");
            return false;
        }else if(file1.size > 1024 * 1024 * 2 || file2.size > 1024 * 1024 * 2 ||file3.size > 1024 * 1024 * 2 ) {
            alert('图片大小不能超过 2MB!');
            return false;
        }else if(url=="" || url==null){
        	alert("请输入详情链接！");
            return false;
        }else{
            var form=document.getElementById("form");
            form.submit();
        }
    }
    </script>
</body>
</html>
