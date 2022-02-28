import * as flsFunction from "./modules/function.js";

flsFunction.isWebp();

$(function(){
  $('.burger').on('click', function(){
    $('.header__list').toggleClass(".header__list--active")
  })
})

new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
});
