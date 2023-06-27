<?php
include('function/header.php');
include('function/navbar.php');
?>

<div class="content-inner w-100">
  <!-- Page Header-->
  <header class="bg-white shadow-sm px-4 py-3 z-index-20">
    <div class="container-fluid px-0">
      <h2 class="mb-0 p-1">หมวดหมู่สินค้า</h2>
    </div>
  </header>
  <!-- Dashboard Counts Section-->
  <section class="pb-0">
    <div class="container-fluid">
      <div class="card mb-0">
        <div class="card-body">
          <a href="formInsertCategory.php" class="btn btn-info btn-sm">เพิ่มหมวดหมู่</a>
          <hr>
          <div class="row gx-5 bg-white">
            <div class="table-responsive">
              <table class="table mb-0" id="example">
                <thead>
                  <tr>
                    <th width="5%">ลำดับ</th>
                    <th>ชื่อสินค้า</th>
                    <th width="15%">จัดการ</th>
                  </tr>
                </thead>
                <tbody>
                  <?php
                  $i = 1;
                  $All_category = $conn->query("SELECT * FROM tb_category");
                  foreach ($All_category as $row) :
                  ?>
                    <tr>
                      <th scope="row"><?= $i++; ?></th>
                      <td><?= $row['category_name'] ?></td>
                      <td>
                        <a href="editCategory.php?id=<?= $row['category_id'] ?>" class="btn btn-sm btn-warning btn-sm">แก้ไข</a>
                        <a onclick="alertconfrim(<?= $row['category_id'] ?>)"  class="btn btn-sm btn-danger btn-sm">ลบ</a>
                      </td>
                    </tr>
                  <?php endforeach; ?>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Dashboard Header Section    -->

  <?php include('function/footer.php'); ?>
  <script>
            function alertconfrim(id) {
            Swal.fire({
                title: 'ต้องการลบหมวดหมู่ใช่ไหม?',
                text: "",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ตกลง',
                cancelButtonText: 'ยกเลิก'
            }).then((result) => {
                if (result.isConfirmed) {
                    location.href="controller/deleteCategory.php?id="+id
                }
            })
        }
  </script>