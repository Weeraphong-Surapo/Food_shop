<?php 
 if(!isset($_SESSION)) 
 { 
     session_start(); 
 }
include('config/connect.php');
?>
<!DOCTYPE html>
<html lang="en">

    <!-- Basic -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <!-- Site Metas -->
    <title>ขายก๋วยเตี๋ยว</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="author" content="">
    
    <!-- Site Icons -->
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png">
    
    <!-- Design fonts -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,500,600,700,800,900" rel="stylesheet"> 

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.css" rel="stylesheet">

    <!-- FontAwesome Icons core CSS -->
    <link href="css/font-awesome.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="style.css" rel="stylesheet">

    <!-- Responsive styles for this template -->
    <link href="css/responsive.css" rel="stylesheet">

    <!-- Colors for this template -->
    <link href="css/colors.css" rel="stylesheet">

    <!-- Version Food CSS for this template -->
    <link href="css/version/food.css" rel="stylesheet">

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>
<body>
    
    <div id="wrapper">
        <section id="cta" class="jumbotron text-center">
            <div class="container">
                <h1></h1>
                <p></p>
                <!-- <a href="#" class="btn btn-primary"></a> -->
            </div>
        </section>

        <header class="header">
            <div class="container">
                <nav class="navbar navbar-inverse navbar-toggleable-md">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#RecipeListmenu" aria-controls="RecipeListmenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-md-center" id="RecipeListmenu">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="index.php">หน้าหลัก</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="category.php">ประเภทสินค้า</a>
                            </li>
                            <li class="nav-item">
                                <?php 
                                if(!empty($_SESSION['shopping_cart'])){
                                    $count = count($_SESSION['shopping_cart']);
                                }else{
                                    $count = 0;
                                }
                                ?>
                                <a class="nav-link" href="cart.php">ตะกร้าสินค้า (<?= $count;?>)</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="login.php">ผู้บริหารร้าน</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div><!-- end container -->
        </header><!-- end header -->