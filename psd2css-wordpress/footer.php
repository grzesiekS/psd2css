<footer class="mainFooter">
    <div class="container">
      <h1 class="title">Heading</h1>
      <p class="description">Lorem ipsum dolor sit amet, consect etur adipiscing elit.</p>
      <h2 class="title title--subtitle">Heading</h2>
      <div class="posts">

        <?php 
          $posts = new WP_Query(array(
            'post_type' => 'post',
            'posts_per_page' => 3,
          ));
        ?>

        <div class="posts__container flexbox flexbox--center">
          
          <?php while($posts->have_posts()) : $posts->the_post(); ?>
            <div class="col--3 posts__element posts__element--active">
              <h3 class="posts__title"><?php the_title(); ?></h3>
              <?php the_content(); ?>
            </div>

          <?php endwhile; ?>
        </div>
      </div>
    </div>
  </footer>
  <script src="<?php echo get_template_directory_uri(); ?>/js/script.js" type="module"></script>
</body>
</html>