$(document).ready(() => {
  $('.life_slider').on('init', (event, slick) => {
    const totalSlides = slick.slideCount;
    const widthPercentage = (1 / totalSlides) * 100;
    $('#life-indicator .bar').css('width', widthPercentage + '%');
  });

  $('.stories_slider').on('init', (event, slick) => {
    const totalSlides = slick.slideCount;
    const widthPercentage = (1 / totalSlides) * 100;
    $('#stories-indicator .bar').css('width', widthPercentage + '%');
  });

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

  $('.life_slider').on('afterChange', (event, slick, currentSlide) => {
    const totalSlides = slick.slideCount;
    const widthPercentage = ((currentSlide + 1) / totalSlides) * 100;
    $('#life-indicator .bar').css('width', widthPercentage + '%');
  });
  $('.stories_slider').on('afterChange', (event, slick, currentSlide) => {
    const totalSlides = slick.slideCount;
    const widthPercentage = ((currentSlide + 1) / totalSlides) * 100;
    $('#stories-indicator .bar').css('width', widthPercentage + '%');
  });

  $('#life-prev').click(() => {
    $('.life_slider').slick('slickPrev');
  });
  $('#life-next').click(() => {
    $('.life_slider').slick('slickNext');
  });

  $('.stories-prev').click(() => {
    $('.stories_slider').slick('slickPrev');
  });
  $('.stories-next').click(() => {
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

  const navbar = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});
