<?php

/* https://api.telegram.org/bot1008390029:AAGSa_yhuneZjbLRKtwO34zzGMPA50AoXKI/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$like = $_POST['like'];
$dislike = $_POST['dislike'];
$etc = $_POST['etc'];
$token = "1008390029:AAGSa_yhuneZjbLRKtwO34zzGMPA50AoXKI";
$chat_id = "-274406815";
$jsonobj = file_get_contents('php://input');

$arr = array(
  'Подобається: ' => $like,
  'Не подобається: ' => $dislike,
  'Додали б:' => $etc
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>