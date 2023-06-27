<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
ิ<body>
    <?php 
session_start();
include('../../config/connect.php');
$query = $conn->query("DELETE FROM tb_category WHERE category_id = '$_GET[id]'");
echo "<script>
Swal.fire(
  'ลบหมวดหมู่สำเร็จ!',
  '',
  'success'
)
setTimeout(() => {
  location.href='../category.php'
}, 1000);
</script>";
?>    
</body>