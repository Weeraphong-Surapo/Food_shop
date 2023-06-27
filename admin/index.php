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
      <div class="row">
        <?php
        $wait = $conn->query("SELECT * FROM tb_serving_food WHERE status = 0");
        $count_wait = $wait->num_rows;
        ?>
        <div class="col-12 col-md-12 col-lg-3">
          <div class="card bg-warning">
            <div class="card-body">
              <h4>ออเดอร์รอทำอาหาร</h4>
              <h1><?php echo $count_wait ?></h1>
            </div>
          </div>
        </div>
        <?php
        $well_cook = $conn->query("SELECT * FROM tb_serving_food WHERE status = 1");
        $count_well_cook = $well_cook->num_rows;
        ?>
        <div class="col-12 col-md-12 col-lg-3">
          <div class="card bg-info">
            <div class="card-body">
              <h4>ออเดอร์ที่กำลังทำ</h4>
              <h1><?php echo $count_well_cook ?></h1>
            </div>
          </div>
        </div>
        <?php
        $well_wait_cook = $conn->query("SELECT * FROM tb_serving_food WHERE status = 2");
        $count_well_wait_cook = $well_wait_cook->num_rows;
        ?>
        <div class="col-12 col-md-12 col-lg-3">
          <div class="card bg-primary">
            <div class="card-body">
              <h4>ออเดอร์รอเสริฟ</h4>
              <h1><?php echo $count_well_wait_cook ?></h1>
            </div>
          </div>
        </div>
        <?php
        $order_success = $conn->query("SELECT * FROM tb_serving_food WHERE status = 3");
        $count_order_success = $order_success->num_rows;
        ?>
        <div class="col-12 col-md-12 col-lg-3">
          <div class="card bg-success">
            <div class="card-body">
              <h4>ออเดอร์ที่เสริฟแล้ว</h4>
              <h1><?php echo $count_order_success ?></h1>
            </div>
          </div>
        </div>
        <?php
        $all_order = $conn->query("SELECT * FROM tb_serving_food");
        $count_all_order = $all_order->num_rows;
        ?>
        <div class="col-12 col-md-12 col-lg-6">
          <div class="card">
            <div class="card-body">
              <h4>ออเดอร์ทั้งหมด</h4>
              <h1><?php echo $count_all_order ?></h1>
            </div>
          </div>
        </div>
        <?php
        $all_cancel_order = $conn->query("SELECT * FROM tb_serving_food WHERE status = 999");
        $count_all_cancel_order = $all_cancel_order->num_rows;
        ?>
        <div class="col-12 col-md-12 col-lg-6">
          <div class="card">
            <div class="card-body">
              <h4>ออเดอร์ที่ยกเลิก</h4>
              <h1><?php echo $count_all_cancel_order ?></h1>
            </div>
          </div>
        </div>
        <?php
        $all_product = $conn->query("SELECT * FROM tb_product");
        $count_all_product = $all_product->num_rows;
        ?>
        <div class="col-12 col-md-12 col-lg-6">
          <div class="card">
            <div class="card-body">
              <h4>อาหารทั้งหมดในระบบ</h4>
              <h1><?php echo $count_all_product ?></h1>
            </div>
          </div>
        </div>
        <?php
        $total_price = $conn->query("SELECT sum(total_price) as total FROM tb_serving_food WHERE status = 3");
        $count_total_price = $total_price->fetch_array();
        ?>
        <div class="col-12 col-md-12 col-lg-6">
          <div class="card">
            <div class="card-body">
              <h4>จำนวนยอดขาย</h4>
              <h1><?php echo number_format($count_total_price['total']); ?> บาท</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</section>
<!-- Dashboard Header Section    -->

<?php include('function/footer.php'); ?>