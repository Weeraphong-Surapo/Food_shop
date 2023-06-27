<?php 
 if(!isset($_SESSION)) 
 { 
     session_start(); 
 }
include('../config/connect.php');
if (isset($_POST['qty_plus'])) {
    $qty = $_POST['value'];

    if ($item_arry_id = array_column($_SESSION['shopping_cart'], 'item_id')) {
        foreach ($_SESSION['shopping_cart'] as $key => $values) {
            if ($values['item_id'] == $_POST['id']) {
                $_SESSION['shopping_cart'][$key]['item_quantity'] += 1;
            }
        }
    }
}

if (isset($_POST['qty_minus'])) {
    $item_arry_id = array_column($_SESSION['shopping_cart'], 'item_id');
    foreach ($_SESSION['shopping_cart'] as $key => $values) {
        if ($values['item_id'] == $_POST['id']) {
            if($_SESSION['shopping_cart'][$key]['item_quantity'] == 1){
                unset($_SESSION['shopping_cart'][$key]);
            }else{
                $_SESSION['shopping_cart'][$key]['item_quantity'] -= 1;
            }
        }
    }
}

?>