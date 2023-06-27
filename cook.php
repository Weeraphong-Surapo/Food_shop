<?php 
 if(!isset($_SESSION)) 
 { 
     session_start(); 
 }
include('function/headcategory.php'); ?>

<section class="section lb">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="page-wrapper">
                    <div class="blog-list clearfix">
                        <h4 class="alert alert-success test-center">กำลังเตรียมอาหารรอสักครู่...</h4>
                        <img src="images/cook_food.gif" alt="" class="img-fluid rounded">
                        <div class="d-flex justify-content-center mt-3">
                            <a href="category.php" class="btn btn-danger">สั่งอาหารเพิ่ม</a>
                        </div>
                    </div><!-- end blog-list -->
                </div><!-- end page-wrapper -->

                <hr class="invis">

            </div><!-- end col -->
        </div><!-- end row -->
    </div><!-- end container -->
</section>
<?php 

?>
<?php include('function/footer.php'); ?>
