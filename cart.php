<?php
if (!isset($_SESSION)) {
    session_start();
}
include('function/headcategory.php'); ?>

<section class="section lb">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="page-wrapper">
                    <div class="blog-list clearfix">
                        <table class="table table-bordered">
                            <tr class="bg-priamry">
                                <th style="background-color: #7aa5f5; color:#fff;" width="27%">รูป</th>
                                <th style="background-color: #7aa5f5; color:#fff;">สินค้า</th>
                                <th style="background-color: #7aa5f5; color:#fff;">จำนวน</th>
                                <th style="background-color: #7aa5f5; color:#fff;">ราคา/บาท</th>
                            </tr>
                            <?php
                            if(count(($_SESSION['shopping_cart'])) >=1):
                            foreach ($_SESSION['shopping_cart'] as $k => $v) :
                            ?>
                                <tr>
                                    <td><img style="width: 100%; height:120px;" src="admin/controller/<?= $v['item_img'] ?>" alt=""></td>
                                    <td><?= $v['item_name'] ?></td>
                                    <td>
                                        <div class="d-flex">
                                            <button class="" onclick="qty_minus(<?= $v['item_id']?>)">-</button>
                                            <input style="width:30px;" type="number" name="qty" id="qty" value="<?= $v['item_quantity'] ?>">
                                            <button class="" onclick="qty_plus(<?= $v['item_id']?>)">+</button>
                                        </div>
                                    </td>
                                    <td><?= number_format($v['item_price'] * $v['item_quantity']) ?></td>
                                </tr>
                            <?php endforeach;
                            else:
                                echo '<tr><td colspan="4" class="text-center alert alert-info">ไม่มีสินค้าในตะกร้า</td></tr>';
                            endif;?>
                        </table>

                        <?php 
                            if(count(($_SESSION['shopping_cart'])) >=1):
                        ?>
                        <button id="openDetail" class="btn btn-sm btn-danger">กรอกหมายเลขโต้ะ / รายละเอียด</button>
                        <div id="showDetail" class="d-none">
                            <div class="mt-2">
                                <label for="">รายละเอียดอาหาร</label>
                                <textarea name="detail" id="detail" cols="30" rows="3" class="form-control" placeholder="ตัวอย่าง ไม่ใส่พริก , ไม่เผ็ด , ไม่ถั่ว"></textarea>
                            </div>
                            <div class="mt-3">
                                <label for="">หมายเลขโต้ะ</label>
                                <input type="text" name="table" id="table" class="form-control" placeholder="หมายเลขโต้ะที่ลูค้านั่ง">
                            </div>
                            <div>
                                <button id="order" class="btn btn-info mt-3">ยืนยันการสั่งอาหาร</button>
                            </div>
                        </div>
                        <?php endif;?>
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
<script>
    $('#openDetail').click(() => {
        $('#showDetail').toggleClass('d-none')
    })
    $('#order').click(() => {
        let detail = $('#detail').val()
        let table = $('#table').val()
        let option = {
            url: 'function/order.php',
            type: 'post',
            data: {
                detail: detail,
                table: table,
                order: 1
            },
            success: function(res) {
                Swal.fire(
                    'สั่งอาหารสำเร็จ!',
                    '',
                    'success'
                )
                setTimeout(() => {
                    location.href = "cook.php"
                }, 1000)
            }
        }
        if (detail == "" || table == "") {
            Swal.fire(
                'กรุณากรอกข้อมูลให้ครบถ้วน!',
                '',
                'warning'
            )
        } else {
            $.ajax(option)
        }
    })

    function qty_plus(id){
        let option ={
            url:'function/btn.php',
            type:'post',
            data:{
                id:id,
                qty_plus:1
            },
            success:function(res){
                location.reload()
            }
        }
        $.ajax(option)
    }
    
    function qty_minus(id){
        let option ={
            url:'function/btn.php',
            type:'post',
            data:{
                id:id,
                qty_minus:1
            },
            success:function(res){
                location.reload()
            }
        }
        $.ajax(option)
    }
</script>