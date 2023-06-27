<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<body>
    <?php 
    session_start();
include('../../config/connect.php');
if(!empty($_FILES["fileToUpload"]['name'])){
    $target_file = 'upload/'. basename($_FILES["fileToUpload"]["name"]);
    $newname = $target_file;
    move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);
    $query = $conn->query("UPDATE `tb_product` SET `product_name`='$_POST[name]',`product_price`='$_POST[price]',`product_img`='$newname',`category_id`='$_POST[category]' WHERE `product_id`='$_POST[id]'");
}else{
    $query = $conn->query("UPDATE `tb_product` SET `product_name`='$_POST[name]',`product_price`='$_POST[price]',`category_id`='$_POST[category]' WHERE `product_id`='$_POST[id]'");
}
echo "<script>
Swal.fire(
  'อัพเดตหมวดหมู่สำเร็จ!',
  '',
  'success'
)
setTimeout(() => {
  location.href='../product.php'
}, 1000);
</script>";
?>    
</body>