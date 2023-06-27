<?php 
 if(!isset($_SESSION)) 
 { 
     session_start(); 
 }
include('../config/connect.php');
$check = $conn->query("SELECT * FROM tb_admin WHERE username = '$_POST[username]' AND password = '$_POST[password]'");
if($check->num_rows >=1){
    echo 1;
}else{
    echo 0;
}

?>