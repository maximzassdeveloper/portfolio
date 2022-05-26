<?php
define('__ROOT__', dirname(dirname(__FILE__)));

function call404() {
  http_response_code(404);
  include('404.php');
  die();
}

$socials = array(
  'email'     => 'maxim.zass@gmail.com',
  'instagram' => 'https://instagram.com/maxim.zass'
)
?>
