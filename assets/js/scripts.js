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
        575: {
          items: 1.2,
          nav: false,
        },
        1400: {
          nav: false,
          items: 1.1,
          margin: 26,
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
        575: {
          items: 1.2,
        },
        768: {
          items: 1.2,
        },
        1200: {
          items: 1.1,
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

  // Velocity Section - Inline Video Playback (toggle play/pause with button)
  $('.valocity-main').each(function() {
    var $section = $(this);
    var $posterContent = $section.find('.velocity-poster-content');
    var $videoWrapper = $section.find('.velocity-inline-video-wrapper');
    var $inlineVideo = $section.find('.velocity-inline-video');
    var $playBtn = $section.find('.velocity-play-btn');
    var $btnIcon = $playBtn.find('i');
    var isPlaying = false;
    
    // Click handler for play/pause toggle
    $playBtn.on('click', function(e) {
      e.preventDefault();
      
      if (isPlaying) {
        // Pause and close video - show poster
        $inlineVideo[0].pause();
        $inlineVideo[0].currentTime = 0;
        $videoWrapper.hide();
        $posterContent.show();
        $btnIcon.removeClass('fa-pause').addClass('fa-play');
        isPlaying = false;
      } else {
        // Play video - hide poster
        $posterContent.hide();
        $videoWrapper.show();
        $inlineVideo[0].play().catch(function(err) {
          console.log('Autoplay prevented:', err);
        });
        $btnIcon.removeClass('fa-play').addClass('fa-pause');
        isPlaying = true;
      }
    });
    
    // Reset when video ends - show poster again
    $inlineVideo.on('ended', function() {
      $videoWrapper.hide();
      $posterContent.show();
      $btnIcon.removeClass('fa-pause').addClass('fa-play');
      $inlineVideo[0].currentTime = 0;
      isPlaying = false;
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
          items: 1,
        },
        575: {
          items: 1.2,
        },
        900: {
          items: 1.4,
        },
        1400: {
          items: 1.7,
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
      575: {
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

  // ================== SMOOTH SCROLLING & SCROLLSPY ==================
  
  // Get the scrollable container (left-column)
  var $scrollContainer = $('.product-details-intake .left-column');
  var $menuLinks = $('.intake_menu a[href^="#"]');
  
  // Smooth scrolling on menu click
  $menuLinks.on('click', function(e) {
    var targetId = $(this).attr('href');
    if (targetId && targetId !== '#') {
      var $target = $(targetId);
      if ($target.length) {
        e.preventDefault();
        
        // Get the offset of target relative to the scroll container
        var containerScrollTop = $scrollContainer.scrollTop();
        var targetOffset = $target.offset().top - $scrollContainer.offset().top + containerScrollTop;
        
        // Smooth scroll to target
        $scrollContainer.animate({
          scrollTop: targetOffset
        }, 600, 'swing');
        
        // Update active state
        $menuLinks.removeClass('active');
        $(this).addClass('active');
      }
    }
  });
  
  // Scrollspy - update active menu on scroll
  $scrollContainer.on('scroll', function() {
    var scrollPos = $scrollContainer.scrollTop();
    var containerOffset = $scrollContainer.offset().top;
    
    // Check each section
    $menuLinks.each(function() {
      var targetId = $(this).attr('href');
      if (targetId && targetId !== '#') {
        var $target = $(targetId);
        if ($target.length) {
          var sectionTop = $target.offset().top - containerOffset + scrollPos - 100;
          var sectionBottom = sectionTop + $target.outerHeight();
          
          if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            $menuLinks.removeClass('active');
            $(this).addClass('active');
          }
        }
      }
    });
  });
});
