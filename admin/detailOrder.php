<?php
include('function/header.php');
include('function/navbar.php');
$order = $conn->query("SELECT * FROM tb_order WHERE serving_id = '$_GET[id]'");
$status = $conn->query("SELECT * FROM tb_serving_food WHERE serving_id = '$_GET[id]'");
$rows = $status->fetch_array();
?>

<div class="content-inner w-100">
    <!-- Page Header-->
    <header class="bg-white shadow-sm px-4 py-3 z-index-20">
        <div class="container-fluid px-0">
            <h2 class="mb-0 p-1">รายละเอียดออเดอร์</h2>
        </div>
    </header>
    <!-- Dashboard Counts Section-->
    <section class="pb-0">
        <div class="container-fluid">
            <div class="card mb-0">
                <div class="card-body">
                    <a href="order.php" class="btn btn-info btn-sm">กลับ</a>
                    <div class="row gx-5 bg-white">
                        <div class="table-responsive">
                            <table class="table mb-0">
                                <tr>
                                    <th>สินค้า</th>
                                    <th>จำนวน/จาน</th>
                                    <th>ราคา</th>
                                </tr>
                                <?php
                                foreach ($order as $row) :
                                    $product = $conn->query("SELECT * FROM tb_product WHERE product_id = '$row[product_id]'");
                                    $r_product = $product->fetch_array();
                                ?>
                                    <tr>
                                        <td><?= $r_product['product_name']?></td>
                                        <td><?= $row['qty']?></td>
                                        <td><?= number_format($r_product['product_price'] * $row['qty'])?></td>
                                    </tr>
                                <?php endforeach; ?>
                            </table>
                        </div>

                    </div>
                    <div class="mt-3">
                        <?php 
                        if($rows['status'] == 0){
                            echo '<a href="controller/getorder.php?id='.$_GET['id'].'" class="btn btn-sm btn-info">รับออเดอร์</a>';
                        }else if($rows['status'] == 1){
                            echo '<a href="controller/waitorder.php?id='.$_GET['id'].'" class="btn btn-sm btn-info">ทำอาหารเสร็จแล้ว</a>';
                        }else if($rows['status'] == 2){
                            echo '<a href="controller/successorder.php?id='.$_GET['id'].'" class="btn btn-sm btn-info">จัดเสริฟอาหาร</a>';
                        }else if($rows['status'] ==3){
                            echo '<button class="btn btn-sm btn-success">เสริฟอาหารเรียบร้อย</button>';
                        }
                        ?>
                      
                        <a href="controller/cancel.php?id=<?php echo $_GET['id']?>" class="btn btn-sm btn-danger">ยกเลิกออเดอร์</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Dashboard Header Section    -->

    <?php include('function/footer.php'); ?>