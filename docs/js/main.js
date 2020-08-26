$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
});

$(function () {
  $(".header__mobileButtonBox").click(function () {
    var speed = 350;

    if ($('.menu-trigger').hasClass('active')) {
      $('.menu-trigger').removeClass('active');
      $(".header__mobileMenu").animate({
        height: "0px"
      }, speed, "swing");
    } else {
      $('.menu-trigger').addClass('active');
      $(".header__mobileMenu").animate({
        height: "330px"
      }, speed, "swing");
    }
  });
});

$(function () {
  var topBtn = $('.scrollToTop');
  topBtn.hide();

  if (window.matchMedia("(max-width: 959px)").matches) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        topBtn.fadeIn();
      } else {
        topBtn.fadeOut();
      }
    });
  }
});