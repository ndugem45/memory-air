$(document).ready(() => {
  $('.partner .container').slick({
    arrows: false,
    dots: false,
    centerMode: true,
    variableWidth: true,
    speed: 2500,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 10,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  $('.stories_slider').slick({
    arrows: false,
    dots: false,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.life_slider').slick({
    arrows: false,
    dots: false,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
