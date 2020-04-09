jQuery(document).ready(function($) {
    
   $('.reviews__slider').slick({
        dots: false,
        slidesToShow: 2,
        prevArrow: $('.reviews__slider-buttons-prev'),
        nextArrow: $('.reviews__slider-buttons-next'),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
   });

   $('.clients__slider').slick({
      dots: false,
      slidesToShow: 6,
      prevArrow: $('.clients__slider-prev'),
      nextArrow: $('.clients__slider-next'),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 577,
          settings: {
            slidesToShow: 3
          }
        }
      ]
 });


// --- MOVING DIV UNDER MENU ---
 var nav = $(".header__menu--overlay"),
    slideLine = $("#slide-line"),
    currentItem = $(".header__menu li.active");

     $(function(){  
     // Menu has active item
          if ($(currentItem[0])) {
          slideLine.css({
               "width": (currentItem.width() - 40),
               "left": (currentItem.position().left + 20)
          });
          }
          
          // Underline transition
          $(nav).find("li").hover(
          // Hover on
          function(){
               slideLine.css({
               "width": ($(this).width() - 40),
               "left": ($(this).position().left + 20)
               });
          },
          // Hover out
          function(){
               if (currentItem[0]) {
               // Go back to current
               slideLine.css({
                    "width": (currentItem.width() - 40),
                    "left": (currentItem.position().left + 20)
               });
               } else {
               // Disapear
               slideLine.width(0);
               }
          }
          );
     });

     $(window).scroll(function () {
          if ($(this).scrollTop() > 0) {
          $('.header__row').addClass('scrolled');
          } else {
          $('.header__row').removeClass('scrolled');
          }
     });


     $('.menu-btn').click(function() {
          $('.header__menu-mobile').toggleClass('active');
          $('.menu-btn').toggleClass('active');
          $('body').toggleClass('active');
          $('html').toggleClass('active');
      });


});

