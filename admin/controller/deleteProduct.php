<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
ิ<body>
    <?php 
session_start();
include('../../config/connect.php');
$query = $conn->query("DELETE FROM tb_product WHERE product_id = '$_GET[id]'");
echo "<script>
Swal.fire(
  'ลบสินค้าสำเร็จ!',
  '',
  'success'
)
setTimeout(() => {
  location.href='../product.php'
}, 1000);
</script>";
?>    
</body>