<?php
include('function/header.php');
include('function/navbar.php');
$id = $_GET['id'];
$query = $conn->query("SELECT * FROM tb_product WHERE product_id = '$id'");
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
                    <a href="product.php" class="btn btn-info btn-sm">กลับ</a>
                    <hr>
                    <form action="controller/updateProduct.php" enctype="multipart/form-data" method="POST">
                    <input type="hidden" name="id" id="id" value="<?= $row['product_id']?>">    
                    <div class="row gx-5 bg-white">
                            <div class="col-6">
                                <label for="">ชื่อสินค้า</label>
                                <input type="text" name="name" id="name" class="form-control" value="<?= $row['product_name'] ?>">
                            </div>
                            <div class="col-6">
                                <label for="">ราคา</label>
                                <input type="text" name="price" id="price" class="form-control" value="<?= $row['product_price'] ?>">
                            </div>

                            <div class="col-6 mt-2">
                                <label for="">หมวดหมู่</label>
                                <select name="category" id="category" class="form-control">
                                    <?php
                                    $fing_category = $conn->query("SELECT * FROM tb_category WHERE category_id = '$row[category_id]'");
                                    $r_category = $fing_category->fetch_array();
                                    ?>
                                    <option value="<?= $r_category['category_id']?>" selected><?= $r_category['category_name']?></option>
                                    <?php
                                    $all_category = $conn->query("SELECT * FROM tb_category WHERE category_id != '$row[category_id]'");
                                    foreach ($all_category as $rows) :
                                    ?>
                                        <option value="<?= $rows['category_id'] ?>"><?= $rows['category_name'] ?></option>
                                    <?php endforeach; ?>
                                </select>
                            </div>
                            <div class="col-6 mt-2">
                                <label for="">รูปภาพ</label>
                                <input type="file" name="fileToUpload" id="fileToUpload" class="form-control">
                            </div>
                            <div class="col-6 mt-3">
                                <label for="">รูปเดิม</label>
                                <img src="controller/<?= $row['product_img'] ?>" style="height: 150; width:150px;" alt="">
                            </div>
                            <div class="col-12 mt-3">
                                <input type="submit" value="อัพเดตสินค้า" name="submit" class="btn btn-success btn-sm">
                            </div>
                    </form>
                </div>
            </div>
        </div>
</div>
</section>
<!-- Dashboard Header Section    -->

<?php include('function/footer.php'); ?>