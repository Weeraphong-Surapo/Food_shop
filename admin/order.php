<?php
include('function/header.php');
include('function/navbar.php');
?>

<div class="content-inner w-100">
  <!-- Page Header-->
  <header class="bg-white shadow-sm px-4 py-3 z-index-20">
    <div class="container-fluid px-0">
      <h2 class="mb-0 p-1">ออเดอร์ลูกค้า</h2>
    </div>
  </header>
  <!-- Dashboard Counts Section-->
  <section class="pb-0">
    <div class="container-fluid">
      <div class="card mb-0">
        <div class="card-body">
          <div class="row gx-5 bg-white">
            <div class="table-responsive">
              <table class="table mb-0" id="example">
                <thead>
                  <tr>
                    <th>ลำดับ</th>
                    <th>เลขโต้ะ</th>
                    <th>รายละเอียด</th>
                    <th>สถานะ</th>
                    <th>ใบเสร็จ</th>
                    <th width="20%">วันที่สั่ง</th>
                  </tr>
                </thead>
                <tbody>
                  <?php 
                  $i=1;
                  $all_order = $conn->query("SELECT * FROM tb_serving_food WHERE status != 999 order by serving_id DESC");
                  foreach($all_order as $row):
                  ?>
                  <tr>
                    <th scope="row"><?= $i++?></th>
                    <td><?= $row['table_number']?></td>
                    <td><a href="detailOrder.php?id=<?= $row['serving_id']?>" class="btn btn-primary btn-sm">ดูรายการ</a></td>
                    <td>
                      <button class="btn
                      <?php 
                      if($row['status'] == 0){
                        echo 'btn-secondary';
                      }else if($row['status'] == 1){
                        echo 'btn-warning';
                      }else if($row['status'] == 2){
                        echo 'btn-info';
                      }else if($row['status'] == 3){
                        echo 'btn-success';
                      }else{
                        echo 'btn-danger';
                      }
                      ?>  btn-sm">
                      <?php
                      if($row['status'] == 0){
                        echo 'รอทำอาหาร';
                      }else if($row['status'] == 1){
                        echo 'กำลังทำอาหร';
                      }else if($row['status'] == 2){
                        echo 'รอเสิร์ฟอาหาร';
                      }else if($row['status'] == 3){
                        echo 'เสิร์ฟเรียบร้อย';
                      }else{
                        echo 'ยกเลิกออเดอร์';
                      }
                      ?>
                    </button>
                    </td>
                    <td><a href="controller/Bill.php?id=<?= $row['serving_id'] ?>" class="btn btn-sm btn-outline-info">พิมพ์</a></td>
                    <td><?= $row['date']?></td>
                  </tr>
                  <?php endforeach;?>
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