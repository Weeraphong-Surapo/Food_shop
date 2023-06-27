<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<body>

<?php 
session_start();
include('../../config/connect.php');
$target_dir = "upload/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
  $newname = $target_file;
  if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    $report = $conn->query("INSERT INTO `tb_product` (`product_name`, `product_price`, `product_img`,`category_id`) 
    VALUES ('$_POST[name]', '$_POST[price]', '$newname','$_POST[category]');");
    if($report){
      echo "<script>
      Swal.fire(
        'เพิ่มสินค้าสำเร็จ!',
        '',
        'success'
      )
      setTimeout(() => {
        location.href='../product.php'
      }, 1000);
      </script>";
    }

  } else {
    echo "Sorry, there was an error uploading your file.";
  }
?>
  
  </body>