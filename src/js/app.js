import * as flsFunction from "./modules/function.js";

flsFunction.isWebp();


document.querySelector('.burger')
.addEventListener( "click" , (event) => {
  document.querySelector('.header__list').classList.toggle('header__list--active');
});

new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
});
