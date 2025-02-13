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

  $('#life-prev').click(() => {
    $('.life_slider').slick('slickPrev');
  });
  $('#life-next').click(() => {
    $('.life_slider').slick('slickNext');
  });

  $('#stories-prev').click(() => {
    $('.stories_slider').slick('slickPrev');
  });
  $('#stories-next').click(() => {
    $('.stories_slider').slick('slickNext');
  });

  const acc = document.getElementsByClassName('head');
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active');
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }
});
