<?php 
 if(!isset($_SESSION)) 
 { 
     session_start(); 
 }
include('../config/connect.php');
$conn->query("INSERT INTO tb_serving_food(table_number,detail) VALUES('$_POST[table]','$_POST[detail]')");
$serving_id = $conn->insert_id;
foreach($_SESSION['shopping_cart'] as $k => $v){
    if(!$conn->query("INSERT INTO tb_order(serving_id,product_id,qty) VALUES('$serving_id','$v[item_id]','$v[item_quantity]')")){
        echo 'error';
    }
}

?>