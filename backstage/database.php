<!-- 作者：谢森宇 徐聘 付乐祺 -->
<!-- 班级：2016级软件工程卓越计划2班 -->
<!-- 学院：计算机与网络安全学院 -->
<!-- 学校：东莞理工学院 -->
<?php
$database_connection = null;

function get_connection()
{
    $hostname = "localhost:3306"; // ���ݿ��������������������IP����
    $database = "php_movie"; // ���ݿ���
    $username = "root"; // ���ݿ�������û���
    $password = "123456"; // ���ݿ����������
    global $database_connection;
    $database_connection = @mysql_connect($hostname, $username, $password) or die(mysql_error()); // �������ݿ������
    mysql_query("set names 'utf-8'"); // �����ַ���
    @mysql_select_db($database, $database_connection) or die(mysql_error());
}

function close_connection()
{
    global $database_connection;
    if ($database_connection) {
        mysql_close($database_connection) or die(mysql_error());
    }
}
?> 