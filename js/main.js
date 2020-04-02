jQuery(document).ready(function($) {
    
   $('.reviews__slider').slick({
        dots: false,
        slidesToShow: 2,
        prevArrow: $('.reviews__slider-buttons-prev'),
        nextArrow: $('.reviews__slider-buttons-next')
   });

});

