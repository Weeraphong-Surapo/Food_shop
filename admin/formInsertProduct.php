<?php
include('function/header.php');
include('function/navbar.php');
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
        <a href="product.php" class="btn btn-info btn-sm">กลับ</a>
      <hr>
          <form action="controller/insertProduct.php" enctype="multipart/form-data" method="POST">
          <div class="row gx-5 bg-white">
            <div class="col-6">
                <label for="">ชื่อสินค้า</label>
                <input type="text" name="name" id="name" class="form-control">
            </div>
            <div class="col-6">
                <label for="">ราคา</label>
                <input type="text" name="price" id="price" class="form-control">
            </div>
            <div class="col-6">
            <label for="">หมวดหมู่</label>
            <select name="category" id="category" class="form-control">
              <option value="" disabled selected>เลือกหมวดหมู่</option>
              <?php 
              $all_category = $conn->query("SELECT * FROM tb_category");
              foreach($all_category as $row):
              ?>
            <option value="<?= $row['category_id']?>"><?= $row['category_name']?></option>
            <?php endforeach; ?>
            </select>
            </div>
            <div class="col-6">
              <label for="">รูปภาพ</label>
              <input type="file" name="fileToUpload" id="fileToUpload" class="form-control">
            </div>
            <div class="col-12 mt-3">
              <input type="submit" value="เพิ่มสินค้า" name="submit" class="btn btn-success">
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Dashboard Header Section    -->

  <?php include('function/footer.php'); ?>