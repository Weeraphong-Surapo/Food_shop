<?php
include('function/head.php');
if(!isset($_SESSION)) 
{ 
    session_start(); 
}
if (isset($_POST['addcart'])) {
    $id = $_POST['id'];
    $product = $conn->query("SELECT * FROM tb_product WHERE product_id = '$id'");
    $row_product = $product->fetch_array();
    $price_product = $row_product['product_price'];

    if (isset($_SESSION['shopping_cart'])) {
        $item_arry_id = array_column($_SESSION['shopping_cart'], 'item_id');
        if (!in_array($_POST['id'], $item_arry_id)) {
            $count = count($_SESSION['shopping_cart']);
            $item_arry = array(
                'item_id' => $_POST['id'],
                'item_name' => $row_product['product_name'],
                'item_img' => $row_product['product_img'],
                'item_quantity' => 1,
                'item_price' => $price_product,
            );
            $_SESSION['shopping_cart'][$count] = $item_arry;
        }
    } else {
        $item_arry = array(
            'item_id' => $_POST['id'],
            'item_name' => $row_product['product_name'],
            'item_img' => $row_product['product_img'],
            'item_quantity' => 1,
            'item_price' => $price_product,
        );
        $add_cart = $_SESSION['shopping_cart'][0] = $item_arry;
    }
    echo '<script>location.href="cart.php"</script>';
}
?>

<section class="section lb text-muted">
    <div class="container">
        <div class="row grid-style">

            <?php
            $query = $conn->query("SELECT * FROM tb_product");
            foreach ($query as $row) :
            ?>

                <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                    <div class="blog-box">
                        <div class="post-media">
                            <!-- <span class="detail veg">Veg</span> -->
                            <img src="admin/controller/<?= $row['product_img'] ?>" alt="" class="img-fluid">
                            <div class="hovereffect"></div>
                            </a>
                        </div><!-- end media -->

                        <div class="blog-meta big-meta">
                            <center>
                                <h4><?= $row['product_name'] ?></h4>
                                <p class="text-danger"><?= number_format($row['product_price']) ?> บาท</p>
                            </center>
                            <div class="d-flex justify-content-center">
                                <form action="" method="post">
                                    <input type="hidden" name="id" id="id" value="<?= $row['product_id']?>">
                                    <button type="submit" name="addcart" class="btn btn-sm btn-danger">เพิ่มลงตะกร้า</button>
                                </form>
                            </div>
                        </div><!-- end meta -->
                    </div><!-- end blog-box -->
                </div><!-- end col -->

            <?php endforeach; ?>


        </div><!-- end row -->



        <hr class="invis3">

        <!-- <div class="row">
                    <div class="col-md-12 text-center">
                        <nav aria-label="Page navigation">
                            <ul class="pagination justify-content-center">
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div> -->
    </div><!-- end container -->
</section><!-- end album -->

<?php include('function/footer.php'); ?>