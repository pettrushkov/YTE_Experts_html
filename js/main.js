jQuery(document).ready(function($) {
    
   $('.reviews__slider').slick({
        dots: false,
        slidesToShow: 2,
        prevArrow: $('.reviews__slider-buttons-prev'),
        nextArrow: $('.reviews__slider-buttons-next')
   });

   $('.clients__slider').slick({
      dots: false,
      slidesToShow: 6,
      prevArrow: $('.clients__slider-prev'),
      nextArrow: $('.clients__slider-next')
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


});

