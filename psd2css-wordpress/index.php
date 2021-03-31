<?php get_header(); ?>
  <section class="splash">
    <div class="container">
      <h1 class="title title--white">Heading</h1>
      <p class="description description--white">Lorem ipsum dolor sit amet, consect etur adipiscing elit.</p>
      <div class="posts splash__slider">
        <button class="button spalsh__button--left">
          <svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.62798 12.0093L12.4133 1.17657C12.4223 1.16756 12.4319 1.15796 12.4409 1.14835C12.6835 0.883581 12.6709 0.466312 12.4133 0.217152C12.2842 0.086868 12.1095 0.0142212 11.9288 0.0142212C11.7535 0.0172231 11.5866 0.0904703 11.4623 0.217152L0.192456 11.5296C-0.0591063 11.7968 -0.0591063 12.2219 0.192456 12.4891L11.4623 23.8201C11.7295 24.0789 12.1462 24.0789 12.4133 23.8201C12.4223 23.8105 12.4319 23.8015 12.4409 23.7919C12.6835 23.5272 12.6709 23.1099 12.4133 22.8607L1.62798 12.0093Z" fill="#28A9E0"/>
          </svg>            
        </button>
        
        <?php 
          $posts = new WP_Query(array(
            'post_type' => 'post',
          ));
        ?>

        <div class="posts__container flexbox flexbox--center">
          <?php while($posts->have_posts()) : $posts->the_post(); ?>

            <div class="col--3 posts__element">
              <h3 class="posts__title"><?php the_title(); ?></h3>
              <?php the_content(); ?>
              <i class="fab fa-wordpress posts__icon"></i>
            </div>

          <?php endwhile; ?>
        </div>
        <button class="button spalsh__button--right">
          <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3822 12.5031L2.10365 1.19098C1.97947 1.0644 1.81209 0.991209 1.63691 0.98761C1.45573 0.98761 1.28176 1.0602 1.15157 1.19098C0.894209 1.43995 0.88161 1.8569 1.12398 2.12206C1.13358 2.13166 1.14258 2.14126 1.15157 2.15026L11.9448 12.983L1.15157 23.8344C0.894209 24.0834 0.88161 24.5009 1.12398 24.7655C1.13358 24.7751 1.14258 24.7847 1.15157 24.7937C1.41974 25.0523 1.83669 25.0523 2.10365 24.7937L13.3822 13.463C13.6335 13.1954 13.6335 12.7707 13.3822 12.5031Z" fill="#28A9E0"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
<?php get_footer(); ?>