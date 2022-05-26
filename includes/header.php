<?php require './config.php'; ?>

<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php if (isset($title)) {echo $title;} else {echo 'Максим Засс';} ?></title>

  <link rel="apple-touch-icon" sizes="180x180" href="../assets/img/favicons/favicon120.png">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/img/favicons/favicon32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/img/favicons/favicon16.png">
  <link rel="icon" type="image/png" sizes="120x120" href="../assets/img/favicons/favicon120.png">

  <link rel="stylesheet" href="../assets/css/main.css">
  <link rel="stylesheet" href="../assets/css/locomotive-scroll.min.css">
</head>

<body <?php if (isset($body_class)) { echo ' class="'.$body_class.'"'; } ?>>

  <div class="main" data-scroll-container>

    <div class="preloader">
      <p>Загрузка</p>
      <div class="preloader-circle"></div>
    </div>

    <div class="cursor">
      <div class="cursor-inner"></div>
    </div>

    <header class="header<?php if (isset($header_class)) { echo ' '.$header_class; } ?>">
      <div class="container">
        <div class="header-logo">
          <a class="link" href="/">М. Засс</a>
        </div>
        <nav class="header-menu">
          <?php include './includes/nav_list.php'; ?>
        </nav>
        <a class="button header-button small" href="/" data-hash="#contact">Связаться</a>
        <span class="header-burger"></span>
      </div>
    </header>

    <div class="header-mobile">
      <div class="container">
        <nav class="header-menu">
          <?php include './includes/nav_list.php'; ?>
        </nav>
        <a class="button header-button small" href="/" data-hash="#contact">Связаться</a>
      </div>
    </div>