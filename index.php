<?php
// $header_class = 'header--main';
// include 'includes/header.php';
?>
  <section id="first" class="first" data-scroll-section data-scroll-section-inview>
    <div class="container">

      <div class="first-content">
        <h1 class="first__title text-anim" data-scroll data-scroll-speed="2">
          <div class="line">Привет, я <span>Максим Засс</span></div>
          <div class="line">— <span>UI/UX</span> дизайнер</div>
          <div class="line">и <span>frontend</span>-разработчик<br></div>
        </h1>
      </div>

      <div data-hash="#about" class="first-arrow arrow" data-scroll data-scroll-speed="2">
        <img src="assets/img/arrow-icon.svg" alt="Arrow">
      </div>

    </div>
    <canvas class="webgl"></canvas>
  </section>

  <section class="about" id="about" data-scroll-section>
    <div class="container">

      <h2 class="title split-text" data-scroll>Обо мне</h2>

      <div class="about-content">

        <p class="about-text about-text1 split-text" data-scroll data-scroll-speed="-1">
          Занимаюсь веб-разработкой <br>
          более 3-х лет. Работал с <br>
          WordPress, React, Node js, Tilda.
        </p>

        <div class="image about-image1 plane" data-scroll data-scroll-speed="2">
          <img src="assets/img/me1.jpg" alt="Максим Засс первое фото">
        </div>

        <div class="image about-image2" data-scroll data-scroll-speed="1">
          <img src="assets/img/me2.jpg" alt="Максим Засс второе фото">
        </div>

        <p class="about-text about-text2 split-text" data-scroll data-scroll-speed="2">
          Для меня важно, чтобы сайт был <br>
          максимально удобным, лёгким и  <br>
          эстетичным. Сайт должен <br>
          приносить пользу и помогать <br>
          решать проблемы клиентов.
        </p>

        <p class="about-text about-text3 split-text" data-scroll data-scroll-speed="3">
          Также я большое внимание <br>
          уделяю анимациям и <br>
          wow-эффектам, из-за которых <br>
          ваши потенциальные клиенты <br>
          не захотят покидать страницу.
        </p>

      </div>

    </div>
  </section>

  <section class="works" id="works" data-scroll-section>

    <div class="container">
      <h2 class="title split-text" data-scroll>Проекты</h2>
    </div>

    <?php // include './includes/works.php'; ?>

  </section>

  <section class="contact" id="contact" data-scroll-section>
    <div class="container">

      <div class="contact-info">
        <h2 class="title split-text" data-scroll>Контакты</h2>
        <?php // include './includes/socials.php'; ?>

        <div data-hash="#first" class="contact-arrow arrow" data-scroll>
          <img src="assets/img/arrow-icon.svg" alt="Arrow">
        </div>
      </div> 

      <div class="contact-form form">
        <h2 class="title split-text" data-scroll>Оставить заявку</h2>
        <form action="">

          <div class="form-line">
            <div class="input">
              <input name="name" type="text" required autocomplete="off">
              <label>Ваше имя</label>
            </div>

            <div class="input">
              <input name="connect" type="text" required autocomplete="off">
              <label>Телеграм / телефон / почта</label>
            </div>
          </div>

          <div class="input">
            <textarea name="comment" required></textarea autocomplete="off">
            <label>Ваш комментарий</label>
          </div>

          <button type="submit" class="button">Отправить</button>
          <p class="form__text">Нажимая на кнопку, вы даете согласие на обработку <a class="link">персональных данных</a> и
            соглашаетесь c <a class="link">политикой конфиденциальности</a></p>

        </form>
      </div>

    </div>
  </section>

<?php 
$scripts = '<script type="module" src="../assets/js/three.js"></script>';
// include './includes/footer.php'; 
?>