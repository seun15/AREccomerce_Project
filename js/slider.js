//Slider
var mySwiper = new Swiper('.swiper-container', {
    
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  
    // Indicator
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },        
    
  });