<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<body>
<?php 
session_start();
include('../../config/connect.php');
if(isset($_POST['submit'])){
    echo $_POST['category'];
    $conn->query("INSERT INTO `tb_category`(`category_name`) VALUES ('$_POST[category]')");
    echo "<script>
    Swal.fire(
      'เพิ่มหมวดหมู่สำเร็จ!',
      '',
      'success'
    )
    setTimeout(() => {
      location.href='../category.php'
    }, 1000);
    </script>";
}else{
    echo 'erro';
}
?>  
</body>