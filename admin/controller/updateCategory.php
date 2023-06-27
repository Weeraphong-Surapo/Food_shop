<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<body>
    <?php 
    session_start();
include('../../config/connect.php');
$query = $conn->query("UPDATE `tb_category` SET `category_name`='$_POST[category]' WHERE `category_id`='$_POST[id]'");
echo "<script>
Swal.fire(
  'อัพเดตหมวดหมู่สำเร็จ!',
  '',
  'success'
)
setTimeout(() => {
  location.href='../category.php'
}, 1000);
</script>";
?>    
</body>