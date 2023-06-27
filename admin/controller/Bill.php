<?php 
include('../../config/connect.php');
require_once __DIR__ . '/vendor/autoload.php';
$defaultConfig = (new Mpdf\Config\ConfigVariables())->getDefaults();
$fontDirs = $defaultConfig['fontDir'];

$defaultFontConfig = (new Mpdf\Config\FontVariables())->getDefaults();
$fontData = $defaultFontConfig['fontdata'];

$mpdf = new \Mpdf\Mpdf([
    'fontDir' => array_merge($fontDirs, [
        __DIR__ . '/tmp',
    ]),
    'fontdata' => $fontData + [ // lowercase letters only in font key
        'sarabun' => [
            'R' => 'THSarabunNew.ttf',
            'I' => 'THSarabunNew Italic.ttf',
            'B' => 'THSarabunNew Bold.ttf',
            'BI' => 'THSarabunNew BoldItalic.ttf'
        ]
    ],
    'default_font' => 'sarabun'
]);

$order = $conn->query("SELECT * FROM tb_order WHERE serving_id = '$_GET[id]'");
$status = $conn->query("SELECT * FROM tb_serving_food WHERE serving_id = '$_GET[id]'");
$rows = $status->fetch_array();
$date = date('d/m/Y H:i:s');
$outp = "";
$outp .= '<style>
    table#t{
        text-align:center;
        width:100%;
        border:1px solid;
    }
    tr th{
        border:1px solid;
    }
    tr td.d{
        border:1px solid;
    }
</style>
<h2 style="text-align:center;">ร้านก๋วยเกี๋ยว</h2>
<table style="text-align:center;width:100%;">
<tr>
<td >หมายเลขโต้ะ '.$rows['table_number'].'</td>
<td >วันเวลาชำระเงิน '.$date.'</td>
</tr>
</table>
<table id="t">
<tr>
<th>อาหาร</th>
<th>จำนวน/จาน</th>
<th>ราคา/บาท</th>
</tr>
';

foreach ($order as $row) :
    $product = $conn->query("SELECT * FROM tb_product WHERE product_id = '$row[product_id]'");
    $r_product = $product->fetch_array();
    $total += $r_product['product_price'] * $row['qty'];
    $outp .= '<tr>
        <td class="d">'.$r_product['product_name'].'</td>
        <td class="d">'.$row['qty'].'</td>
        <td class="d">'.number_format($r_product['product_price'] * $row['qty']).'</td>
    </tr>';
endforeach;
$outp .= '<tr>
    <td colspan="3">ราคารวมสุทธิ '.number_format($total).' บาท</td>
</tr>';



$outp .= '</table>';
$mpdf->WriteHTML($outp);
$mpdf->Output()
?>