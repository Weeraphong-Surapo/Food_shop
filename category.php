<?php
 include('function/headcategory.php');
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

<section class="section lb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-list clearfix">
                            <?php 
                            if(!isset($_GET['c'])){
                                $query = $conn->query("SELECT * FROM tb_product");
                            }else{
                                $query = $conn->query("SELECT * FROM tb_product WHERE category_id = '$_GET[c]'");
                            }
                            if($query->num_rows >=1):
                                foreach($query as $row):?>
                                <div class="blog-box row">
                                    <div class="col-md-4">
                                        <div class="post-media">
                                            <a href="food-single.html" title="">
                                            <img src="admin/controller/<?= $row['product_img']?>" alt="" class="img-fluid">
                                                <div class="hovereffect"></div>
                                            </a>
                                        </div><!-- end media -->
                                    </div><!-- end col -->

                                    <div class="blog-meta big-meta col-md-8">
                                    <center>
                                    <h4><?= $row['product_name']?></h4>
                                    <p class="text-danger"><?= number_format($row['product_price'])?> บาท</p>
                                </center>
                                <div class="d-flex justify-content-center">
                                <form action="" method="post">
                                    <input type="hidden" name="id" id="id" value="<?= $row['product_id']?>">
                                    <button type="submit" name="addcart" class="btn btn-sm btn-danger">เพิ่มลงตะกร้า</button>
                                </form>
                                </div>
                                    </div><!-- end meta -->
                                </div><!-- end blog-box -->
                                    <?php endforeach;
                                else:
                                    echo '<h1 class="text-center mt-4 alert alert-warning">ไม่มีสินค้าหมวดหมู่นี้</h1>';
                                endif; ?>

                                <hr class="invis">                 

                            </div><!-- end blog-list -->
                        </div><!-- end page-wrapper -->

                        <hr class="invis">

                        <!-- <div class="row">
                            <div class="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination justify-content-start">
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
                    </div><!-- end col -->

                    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div class="sidebar">


                            <div class="widget">
                                <h2 class="widget-title">หมวดหมู่อาหาร</h2>
                                <div class="link-widget">
                                    <ul>
                                        <?php 
                                        $all_category = $conn->query("SELECT * FROM tb_category");
                                        foreach($all_category as $row):
                                        $count = $conn->query("SELECT count(product_id) as count_product FROM tb_product WHERE category_id = '$row[category_id]'");
                                        $count_category = $count->fetch_array();
                                        ?>
                                        <li><a href="category.php?c=<?= $row['category_id']?>"><?= $row['category_name']?> <span>( <?= $count_category['count_product'];?> )</span></a></li>
                                            <?php endforeach;?>
                                    </ul>
                                </div><!-- end link-widget -->
                            </div><!-- end widget -->
                        </div><!-- end sidebar -->
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section>

<?php include('function/footer.php');?>