$(document).ready(function(){

  $('.scroll-top').hide();

  /*--------------- Navbar Toggler ---------------*/
  $('#menu-btn').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('active');
  });

  /*--------------- Scroll-Top ---------------*/
    var sections = $('section');
  $(window).on('scroll',function(){
    
    $('#menu-btn').removeClass('fa-times');
    $('.navbar').removeClass('active');

    // STICKY HEADER
    if($(window).scrollTop() > 0){
      $(".header").addClass("sticky");
    }else{
      $(".header").removeClass("sticky");
    }

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });

      sections.each(function(){

        let top = $(window).scrollTop();
        let offset = $(this).offset().top - 200;
        let id = $(this).attr('id');
        let height = $(this).height();

        if(top >= offset && top < offset + height){
          $('.navbar a').removeClass('active');
          $('.navbar').find(`[href="#${id}"]`).addClass('active');
        }
      });

  });

    $(".button").click(function(){
        $(this).addClass("active").siblings().removeClass("active");

        var filter = $(this).attr("data-filter");

        if (filter == "all"){
            $(".gallery .image").show(400);
        }
        else{
            $(".gallery .image").not("."+filter).hide(200);
            $(".gallery .image").filter("."+filter).show(400);
        }
    });

    var swiper = new Swiper(".companies-slider", {
        spaceBetween: 20,
        loop:true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination1",
          clickable:true,
        },
        breakpoints: {
            0: {slidesPerView: 1},
            768: {slidesPerView: 2},
            1024: {slidesPerView: 3},
            1600: {slidesPerView: 4}
        },
    });

});

