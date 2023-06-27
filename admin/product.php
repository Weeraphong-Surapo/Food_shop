<?php
include('function/header.php');
include('function/navbar.php');
?>

<div class="content-inner w-100">
    <!-- Page Header-->
    <header class="bg-white shadow-sm px-4 py-3 z-index-20">
        <div class="container-fluid px-0">
            <h2 class="mb-0 p-1">สินค้าทั้งหมด</h2>
        </div>
    </header>
    <!-- Dashboard Counts Section-->
    <section class="pb-0">
        <div class="container-fluid">
            <div class="card mb-0">
                <div class="card-body">
                    <a href="formInsertProduct.php" class="btn btn-info btn-sm">เพิ่มสินค้า</a>
                    <hr>
                    <div class="row gx-5 bg-white">
                        <div class="table-responsive">
                            <table class="table mb-0" id="example">
                                <thead>
                                    <tr>
                                        <th width="5%">ลำดับ</th>
                                        <th width="20%">รูปสินค้า</th>
                                        <th>ชื่อสินค้า</th>
                                        <th>ราคา</th>
                                        <th width="15%">จัดการ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                    $i = 1;
                                    $All_product = $conn->query("SELECT * FROM tb_product");
                                    foreach ($All_product as $row) :
                                    ?>
                                        <tr>
                                            <th scope="row"><?= $i++; ?></th>
                                            <td><img style="width: 150px; height:100px" src="controller/<?= $row['product_img'] ?>" alt=""></td>
                                            <td><?= $row['product_name'] ?></td>
                                            <td><?= $row['product_price'] ?></td>
                                            <td>
                                                <a href="editProduct.php?id=<?= $row['product_id'] ?>" class="btn btn-sm btn-warning btn-sm">แก้ไข</a>
                                                <a onclick="alertconfrim(<?= $row['product_id'] ?>)" class="btn btn-sm btn-danger btn-sm">ลบ</a>
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
                title: 'ต้องการลบสินค้าใช่ไหม?',
                text: "",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ตกลง',
                cancelButtonText: 'ยกเลิก'
            }).then((result) => {
                if (result.isConfirmed) {
                    location.href="controller/deleteProduct.php?id="+id
                }
            })
        }
    </script>