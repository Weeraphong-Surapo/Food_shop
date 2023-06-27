<?php
include('function/header.php');
include('function/navbar.php');
$id = $_GET['id'];
$query = $conn->query("SELECT * FROM tb_category WHERE category_id = '$id'");
$row = $query->fetch_array();
?>

<div class="content-inner w-100">
  <!-- Page Header-->
  <header class="bg-white shadow-sm px-4 py-3 z-index-20">
    <div class="container-fluid px-0">
      <h2 class="mb-0 p-1">หน้าสรุปผล</h2>
    </div>
  </header>
  <!-- Dashboard Counts Section-->
  <section class="pb-0">
    <div class="container-fluid">
      <div class="card mb-0">
        <div class="card-body">
          <form action="controller/updateCategory.php" enctype="multipart/form-data" method="POST">
          <input type="hidden" name="id" id="id" value="<?= $row['category_id']?>">
          <div class="row gx-5 bg-white">
            <div class="col-12">
                <label for="">หมวดหมู่</label>
                <input type="text" name="category" id="category" class="form-control" value="<?= $row['category_name']?>">
            </div>
            <div class="col-12 mt-3">
              <input type="submit" value="อัพเดตหมวดหมู่" name="submit" class="btn btn-success">
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Dashboard Header Section    -->

  <?php include('function/footer.php'); ?>