$(document).ready(function () {
  // Mobile Menu
  $(".menu_icon").click(function () {
    $(".menu").slideToggle(200);

    return false;
  });

  // Mobile Menu Icon
  $(document).ready(function () {
    $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
      $(this).toggleClass("open");
    });
  });

  // Feature Carousel
  $(".ie_feature_slider_contents").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    autoplay: false,
    margin: 20,
    responsive: {
      0: {
        items: 1.1,
      },
      480: {
        items: 1.3,
      },
      768: {
        items: 1.3,
      },
      992: {
        items: 1.7,
      },
      1200: {
        items: 1.9,
      },
      1400: {
        items: 2.2,
      },
    },
  });
  $(".ie_feature_slider_contents .owl-prev").html('<i class="fa-solid fa-caret-left"></i>');
  $(".ie_feature_slider_contents .owl-next").html('<i class="fa-solid fa-caret-right"></i>');
  
  // Feature Carousel - Multiple Instances Support
  $(".ie_feature_slider_contents2").each(function(index) {
    var $slider = $(this);
    var $parent = $slider.closest('.ie_feature_slider');
    var $dotsContainer = $parent.find('.custom-dots-container');
    var $playBtn = $parent.find('.slider-play-btn');
    
    // Initialize Owl Carousel for this instance
    $slider.owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      dotsContainer: $dotsContainer,
      autoplay: false,
      margin: 20,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        700: {
          items: 1.5,
          nav: false,
        },
        1400: {
          nav: false,
          items: 1.6,
          margin: 56,
        },
      },
    });
    
    // Video Playback Logic for this slider instance
    $playBtn.on('click', function() {
      var $activeItem = $slider.find('.owl-item.active .ie_feature_slider_single').first();
      var videoSrc = $activeItem.data('video-src');
      
      if (videoSrc) {
         var $videoPlayer = $('#slider-video-player');
         $videoPlayer.find('source').attr('src', videoSrc);
         $videoPlayer[0].load();
         $('#videoModal').modal('show');
         $videoPlayer[0].play().catch(e => console.log('Autoplay prevented:', e));
      } else {
         console.log('No video source on active slide.');
      }
    });
  });

  // Stop video when modal closes
  $('#videoModal').on('hidden.bs.modal', function () {
      var $videoPlayer = $('#slider-video-player');
      $videoPlayer[0].pause();
      $videoPlayer[0].currentTime = 0;
  });

  // Chart Slider - Carousel with dots and play button
  $(".chart-slider-contents").each(function(index) {
    var $slider = $(this);
    var $parent = $slider.closest('.chart-slider-wrapper');
    var $dotsContainer = $parent.find('.chart-dots-container');
    var $playBtn = $parent.find('.chart-play-btn');
    
    // Initialize Owl Carousel for chart slider
    $slider.owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      dotsContainer: $dotsContainer,
      autoplay: false,
      margin: 20,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1.2,
        },
        768: {
          items: 1.2,
        },
        1200: {
          items: 1.2,
        },
      },
    });
    
    // Video Playback Logic for chart slider
    $playBtn.on('click', function() {
      var $activeItem = $slider.find('.owl-item.active .chart-slide-item').first();
      var videoSrc = $activeItem.data('video-src');
      
      if (videoSrc) {
         var $videoPlayer = $('#chart-video-player');
         $videoPlayer.find('source').attr('src', videoSrc);
         $videoPlayer[0].load();
         $('#chartVideoModal').modal('show');
         $videoPlayer[0].play().catch(e => console.log('Autoplay prevented:', e));
      } else {
         console.log('No video source on active chart slide.');
      }
    });
  });

  // Stop chart video when modal closes
  $('#chartVideoModal').on('hidden.bs.modal', function () {
      var $videoPlayer = $('#chart-video-player');
      $videoPlayer[0].pause();
      $videoPlayer[0].currentTime = 0;
  });

  // Velocity Section - Background Video Playback (Multiple Instances)
  $('.valocity-main').each(function() {
    var $section = $(this);
    var $video = $section.find('.velocity-video-bg');
    var $playBtn = $section.find('.velocity-play-btn');
    var $cta = $section.find('.velocity-cta');
    var $soundWave = $section.find('.sound-wave-img');
    
    // Click handler for play button and CTA
    $playBtn.add($cta).on('click', function(e) {
      e.preventDefault();
      
      if ($video.hasClass('playing')) {
        // Pause video
        $video[0].pause();
        $video.removeClass('playing');
        $playBtn.find('i').removeClass('fa-pause').addClass('fa-play');
        $soundWave.css('opacity', '0.7');
      } else {
        // Play video
        $video.addClass('playing');
        $video[0].play().catch(function(err) {
          console.log('Autoplay prevented:', err);
        });
        $playBtn.find('i').removeClass('fa-play').addClass('fa-pause');
        $soundWave.css('opacity', '0');
      }
    });
    
    // Reset when video ends
    $video.on('ended', function() {
      $video.removeClass('playing');
      $playBtn.find('i').removeClass('fa-pause').addClass('fa-play');
      $soundWave.css('opacity', '0.7');
      $video[0].currentTime = 0;
    });
  });

  // Your Next Mod Slider - Custom dots and video button
  $(".your_next_model_card_main").each(function(index) {
    var $slider = $(this);
    var $parent = $slider.closest('.your_next_model_slider_wrapper');
    var $dotsContainer = $parent.find('.your-next-mod-dots');
    var $playBtn = $parent.find('.your-next-mod-play-btn');
    
    // Initialize Owl Carousel
    $slider.owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      dotsContainer: $dotsContainer,
      autoplay: false,
      margin: 20,
      responsive: {
        0: {
          items: 1.5,
        },
        900: {
          items: 1.5,
        },
        1400: {
          items: 1.5,
          margin: 30,
        },
      },
    });
    
    // Video Playback Logic for Your Next Mod slider
    $playBtn.on('click', function() {
      var $activeItem = $slider.find('.owl-item.active .your_next_model_card').first();
      var videoSrc = $activeItem.data('video-src');
      
      if (videoSrc) {
         var $videoPlayer = $('#your-next-mod-video-player');
         $videoPlayer.find('source').attr('src', videoSrc);
         $videoPlayer[0].load();
         $('#yourNextModVideoModal').modal('show');
         $videoPlayer[0].play().catch(e => console.log('Autoplay prevented:', e));
      } else {
         console.log('No video source on active slide.');
      }
    });
  });

  // Stop Your Next Mod video when modal closes
  $('#yourNextModVideoModal').on('hidden.bs.modal', function () {
      var $videoPlayer = $('#your-next-mod-video-player');
      $videoPlayer[0].pause();
      $videoPlayer[0].currentTime = 0;
  });

  // Testimonials Carousel
  $(".ie_testimonials").owlCarousel({
    loop: true,
    autoplay: false,
    margin: 20,
    responsive: {
      0: {
        items: 1.1,
        nav: true,
        dots: true,
      },
      480: {
        items: 1.5,
      },
      768: {
        items: 2.1,
      },
      992: {
        items: 2.8,
      },
      1200: {
        items: 3.5,
        nav: false,
        dots: false,
      },
      1400: {
        items: 4,
      },
    },
  });
  $(".ie_testimonials .owl-prev").html('<i class="fa-solid fa-caret-left"></i>');
  $(".ie_testimonials .owl-next").html('<i class="fa-solid fa-caret-right"></i>');

  // FAQ Accordion - Pure jQuery Implementation
  $(".faq-question").on("click", function () {
    var $item = $(this).closest(".faq-item");
    var $answer = $item.find(".faq-answer");
    
    // Check if this item is already active
    var isActive = $item.hasClass("active");
    
    // Close all other items
    $(".faq-item").not($item).removeClass("active");
    $(".faq-item").not($item).find(".faq-answer").slideUp(300);
    
    // Toggle current item
    if (isActive) {
      $item.removeClass("active");
      $answer.slideUp(300);
    } else {
      $item.addClass("active");
      $answer.slideDown(300);
    }
  });
});
