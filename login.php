<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>เข้าสู่ระบบ</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="robots" content="all,follow">
    <!-- Google fonts - Poppins -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,700">
    <!-- Choices CSS-->
    <link rel="stylesheet" href="vendor/choices.js/public/assets/styles/choices.min.css">
    <!-- theme stylesheet-->
    <link rel="stylesheet" href="admin/css/style.default.css" id="theme-stylesheet">
    <!-- Custom stylesheet - for your changes-->
    <link rel="stylesheet" href="admin/css/custom.css">
    <!-- Favicon-->
    <link rel="shortcut icon" href="admin/img/favicon.ico">
    <!-- Tweaks for older IEs--><!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
</head>

<body>
    <div class="login-page">
        <div class="container d-flex align-items-center position-relative py-5">
            <div class="card shadow-sm w-100 rounded overflow-hidden bg-none">
                <div class="card-body p-0">
                    <div class="row gx-0 align-items-stretch">
                        <!-- Logo & Information Panel-->
                        <div class="col-lg-6">
                            <div class="info d-flex justify-content-center flex-column p-4 h-100">
                                <div class="py-5">
                                    <h1 class="display-6 fw-bold">เข้าสู่ระบบ</h1>
                                    <p class="fw-light mb-0">ระบบจัดการร้านอาหาร</p>
                                </div>
                            </div>
                        </div>
                        <!-- Form Panel    -->
                        <div class="col-lg-6 bg-white">
                            <div class="d-flex align-items-center px-4 px-lg-5 h-100">
                                <form class="login-form py-5 w-100" method="post" action="">
                                    <div class="input-material-group mb-3">
                                        <input class="input-material" id="login-username" type="text" name="loginUsername" autocomplete="off" required data-validate-field="loginUsername">
                                        <label class="label-material" for="login-username">ชื่อผู้ใช้</label>
                                    </div>
                                    <div class="input-material-group mb-4">
                                        <input class="input-material" id="login-password" type="password" name="loginPassword" required data-validate-field="loginPassword">
                                        <label class="label-material" for="login-password">รหัสผ่าน</label>
                                    </div>
                                    <p id="error" class="text-danger"></p>
                                    <a href="#" class="btn btn-primary mb-3" id="login" >เข้าสู่ระบบ</a><br>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- JavaScript files-->
    <script src="admin/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="admin/vendor/chart.js/Chart.min.js"></script>
    <script src="admin/vendor/just-validate/js/just-validate.min.js"></script>
    <script src="admin/vendor/choices.js/public/assets/scripts/choices.min.js"></script>
    <!-- Main File-->
    <script src="admin/js/front.js"></script>
    <script>
        // ------------------------------------------------------- //
        //   Inject SVG Sprite - 
        //   see more here 
        //   https://css-tricks.com/ajaxing-svg-sprite/
        // ------------------------------------------------------ //
        function injectSvgSprite(path) {

            var ajax = new XMLHttpRequest();
            ajax.open("GET", path, true);
            ajax.send();
            ajax.onload = function(e) {
                var div = document.createElement("div");
                div.className = 'd-none';
                div.innerHTML = ajax.responseText;
                document.body.insertBefore(div, document.body.childNodes[0]);
            }
        }
        // this is set to BootstrapTemple website as you cannot 
        // inject local SVG sprite (using only 'icons/orion-svg-sprite.svg' path)
        // while using file:// protocol
        // pls don't forget to change to your domain :)
        
        injectSvgSprite('https://bootstraptemple.com/files/icons/orion-svg-sprite.svg');
    </script>
    <script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <!-- FontAwesome CSS - loading as last, so it doesn't block rendering-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
</body>

</html>
<script>
    $('#login').click(() => {
        let username = $('#login-username').val()
        let password = $('#login-password').val()
        let option = {
            url: 'function/checklogin.php',
            type: 'post',
            data: {
                username: username,
                password: password,
                login: 1
            },
            success: function(res) {
                if (res == 1) {
                    Swal.fire(
                        'เข้าสู่ระบบสำเร็จ!',
                        '',
                        'success'
                    )
                    setTimeout(()=>{location.href="admin/index.php"},1000)
                } else {
                    Swal.fire(
                        'ไม่มีชื่อผู้ใช้นี้หรือรหัสผ่าน!',
                        '',
                        'error'
                    )
                }
            }
        }
        if (username == "" || password == "") {
            $('#error').text('กรุณากรอกข้อมูลให้ครบถ้วน')
        } else {
            $.ajax(option)
        }
    })
</script>