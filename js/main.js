(function($) {
  "use strict";

  /* ================================================
       Script Initialization
    ==================================================*/

  // Window Load Function
  $(window).on("load", function() {
    preloaderSetup();
  });

  // Document Ready Function
  $(document).ready(function() {
    heroSlider();
  });

  // Window Resize Function
  $(window).on("resize", function() {});

  // Window Scroll Function
  $(window).on("scroll", function() {});

  function heroSlider() {
    $("#hero-carousel").owlCarousel({
      loop: true,
      margin: 10,
      // nav:true,
      items: 1
    });
  }

  // ========================== Preloader Setup ==========================
  function preloaderSetup() {
    $("#preloader").fadeOut("slow", function() {
      $(this).remove();
    });
  } // preloaderSetup
})(jQuery); // End of use strict
