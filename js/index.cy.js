// BACK TO TOP
// ================================================================================================================
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
    } else {
    $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
});
//   ===================================================================================================================
$(document).ready(function(){
var btn = $('.menu_responsive');
var nav = $('.nav-responsive');

btn.on('click', ()=>{
    if(btn.hasClass('open')){
        btn.removeClass(' open');
        nav.removeClass(' open');
    }else{
        btn.addClass('open');
        nav.addClass('open');

    }
});

slider = $('#autoWidth').lightSlider({
    item:5,
    loop:false,
    slideMove:1,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed:600,
    responsive : [
        {
            breakpoint:1460,
            settings: {
                item:3,
                slideMove:1,
                slideMargin:50
              }
        },
        {
            breakpoint:760,
            settings: {
                item:2,
                slideMove:1,
                slideMargin:15
              }
        },
        {
            breakpoint:480,
            settings: {
                item:1,
                slideMove:1,
                slideMargin:25
              }
        }
    ]
});  
$('.prev_btn').click(function(){
    slider.goToPrevSlide();
  });
  $('.next_btn').click(function(){
    slider.goToNextSlide();
  });
});