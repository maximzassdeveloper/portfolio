<footer class="footer" data-scroll-section>
  <div class="container">

    <div class="footer-col">
      <p class="footer-copyright">2022© Максим Засс</p>
  
      <ul class="footer-menu">
        <?php include './includes/nav_list.php'; ?>
      </ul>
    </div>

    <div class="footer-col">
      <div class="footer-button">
        <button data-hash="/#contact" class="button small">Связаться</button>
      </div>
      
      <div class="footer-socials">
        <?php include './includes/socials.php'; ?>
      </div>
    </div>

  </div>
</footer>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/CustomEase.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>
<script src="https://unpkg.com/split-type"></script>
<script type="text/javascript" src="../assets/js/locomotive-scroll.min.js"></script>
<script type="text/javascript" src="../assets/js/main.js"></script>
<?php if (isset($scripts)): echo $scripts; endif; ?>
</body>

</html>