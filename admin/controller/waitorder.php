<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<body>
    <?php
    session_start();
    include('../../config/connect.php');
    $query = $conn->query("UPDATE `tb_serving_food` SET `status` = 2 WHERE `serving_id`='$_GET[id]'");
    echo "<script>
Swal.fire(
  'ทำอาหารเรียบร้อย!',
  '',
  'success'
)
setTimeout(() => {
  location.href='../order.php'
}, 1000);
</script>";
    ?>
</body>