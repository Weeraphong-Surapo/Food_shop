<?php 
$host = "localhost";
$username = "root";
$password = "root";
$db = "system_food";
$conn = new mysqli($host,$username,$password,$db);
$conn->set_charset("utf8");
date_default_timezone_set('Asia/bangkok');
?>