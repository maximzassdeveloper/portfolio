<?php 
  require 'db.php';
  $works = get_works();

  foreach($works as $work) { ?>
    <div class="work" data-scroll data-color="<?php echo $work['color']; ?>">
      <a href="work/<?php echo $work['slug']; ?>">
        <div class="work-bg"></div>
        <div class="container">
          <div class="work-image">
            <div data-scroll data-scroll-speed="0.5" data-scroll-offset="0%, 0%" data-scroll-delay="0.8">
              <img data-scroll data-scroll-speed="0.5" data-scroll-offset="0%, 0%" src="../assets/img/<?php echo $work['preview']; ?>" alt="<?php echo $work['name']; ?>">
            </div>
          </div>
          <div class="work-content">
            <h3 class="text-anim" data-scroll><?php echo $work['name']; ?></h3>
          </div>
        </div>
      </a>
    </div>
  <?php }
?>