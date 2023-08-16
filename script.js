
//swiper do carrossel
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },

    // mover com roll do mouse
    mousewheel: true,
    keyboard: true,
  });