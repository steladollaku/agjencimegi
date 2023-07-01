jQuery(document).ready(function(){

    "user strick"
    $('.slider').ripples({
        dropRadius: 10,
        perturbance: 0.01,
    
    });
    
    $('.text').typed({
        strings: ["Explore the world <strong class='primary'>with ease!</strong>", "Discover. Wander. Repeat."],
        typespeed: 0,
        loop: true,
        
    });
    $(document).ready(function ($) {
    $('.work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
        enabled: true
            }
    });
    });

    $(function () {
        $(document).scroll(function () {
          var $nav = $(".navbar-fixed-top");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

}) 