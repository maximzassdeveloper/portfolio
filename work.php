<?php 
  require 'db.php';

  $work = get_work($_GET['slug']);
  if (!$work) { call404(); }

  $title = $work['name'] . ' - Максим Засс';
  include 'includes/header.php';
?>

<div class="single-work" data-scroll-section>
  <div class="single-work__bg" style="background-image: url('../assets/img/<?php echo $work['preview']; ?>'); background-color: <?php echo $work['color']; ?>;"></div>
  <div class="container">

    <h1><?php echo $work['name']; ?></h1>

    <div class="single-work__info">
      <div class="line">
        <?php if (isset($work['role'])): ?>
          <div class="list">
            <h3>Роль</h3>
            <?php foreach($work['role'] as $role): ?>
              <span><?php echo $role; ?></span>
            <?php endforeach; ?>
          </div>
        <?php endif; ?>
        <?php if (isset($work['stack'])): ?>
          <div class="list">
            <h3>Технологии</h3>
            <?php foreach($work['stack'] as $s): ?>
              <span><?php echo $s; ?></span>
            <?php endforeach; ?>
          </div>
        <?php endif; ?>
      </div>
      <p class="single-work__desc"><?php echo $work['desc']; ?></p>
      <?php if (isset($work['link'])): ?>
        <div class="single-work__links">
          <a class="link" href="<?php echo $work['link']; ?>" target="_blank">Смотреть сайт</a>
        </div>
      <?php endif; ?>
    </div>

  </div>

  <?php
    $content_path = 'works-templates/'.$work['slug'].'.php';
    if (file_exists($content_path)): ?>
      <div class="single-work__content single-work__content--<?php echo $work['slug']; ?>">
        <?php include $content_path; ?>
      </div>
    <?php endif;
  ?>

  <div class="single-work__pagination pagination">
    <div class="container">
      <?php 
        $prev_work = get_work_by_id($work['id']-1);
        if ($prev_work): ?>
          <div class="pagination-item prev">
            <a class="link" href="<?php echo $prev_work['slug']; ?>">
              Назад
              <div class="pagination__arrow arrow" data-scroll>
                <img src="/assets/img/arrow-icon.svg" alt="Arrow">
              </div>
            </a>
          </div>
        <?php endif; 
      ?>
      <?php 
        $next_work = get_work_by_id($work['id']+1);
        if ($next_work): ?>
          <div class="pagination-item next">
            <a class="link" href="<?php echo $next_work['slug']; ?>">
              Далее
              <div class="pagination__arrow arrow" data-scroll>
                <img src="/assets/img/arrow-icon.svg" alt="Arrow">
              </div>
            </a>
          </div>
        <?php endif; 
      ?>
    </div>
  </div>
</div>

<?php include 'includes/footer.php'; ?>