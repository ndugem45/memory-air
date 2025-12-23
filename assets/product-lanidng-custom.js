// Initialize Swiper
const swiper = new Swiper(".marquee-swiper", {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 3000, // smoother marquee feel
  autoplay: {
    delay: 0,
    disableOnInteraction: false, // allows autoplay to continue after hover
  },
  loop: true,
  slidesPerView: 'auto',
  allowTouchMove: false,
});

// Pause on hover
const marqueeEl = document.querySelector('.marquee-swiper');

marqueeEl.addEventListener('mouseenter', () => {
  swiper.autoplay.stop(); // ✅ Corrected this
});

marqueeEl.addEventListener('mouseleave', () => {
  swiper.autoplay.start(); // ✅ And this
});


jQuery(document).ready(function ($) {

  // Open first FAQ by default
  $('.faqs-content:first')
    .addClass('active')
    .find('.faqs-answer')
    .show();

  // Click toggle
  $('.question-faqs').on('click', function () {

    const parent = $(this).closest('.faqs-content');

    // Close other FAQs
    $('.faqs-content').not(parent)
      .removeClass('active')
      .find('.faqs-answer')
      .slideUp();

    // Toggle current FAQ
    parent.toggleClass('active');
    parent.find('.faqs-answer').slideToggle();

  });

});

document.querySelectorAll('.video-card').forEach(card => {
  const video = card.querySelector('video');
  const playBtn = card.querySelector('.play-btn');
  const pauseBtn = card.querySelector('.pause-btn');
  const volumeIcon = card.querySelector('.volume-btn img');

  video.muted = true;

  function stopAll() {
    document.querySelectorAll('.video-card').forEach(c => {
      c.classList.remove('playing');
      c.classList.add('paused');
      c.querySelector('video').pause();
    });
  }

  playBtn.addEventListener('click', () => {
    stopAll();
    video.play();
    card.classList.add('playing');
    card.classList.remove('paused');
  });

  pauseBtn.addEventListener('click', () => {
    video.pause();
    card.classList.remove('playing');
    card.classList.add('paused');
  });

  volumeIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    video.muted = !video.muted;
    volumeIcon.src = video.muted
      ? 'https://cdn.shopify.com/s/files/1/0745/3658/3442/files/volume-off.png'
      : 'https://cdn.shopify.com/s/files/1/0745/3658/3442/files/volume-on.png';
  });

  video.addEventListener('ended', () => {
    card.classList.remove('playing');
    card.classList.add('paused');
  });
});




