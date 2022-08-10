import Swiper, { Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';

const initSize = 320;
const swipTech = document.querySelector('.technics__swiper');
const buttonMoreTechnics = document.querySelector('.technics__button-more');
const imgMoreTechnics = document.querySelector('.technics__image-more');
const textMore = 'Показать все';
const textNoMore = 'Скрыть';
let swiperTech;
let textButtonTechnics = buttonMoreTechnics.querySelector('span');

// Инициализация Swiper

function mobileSlider () {
    if (window.innerWidth <= initSize && swipTech.dataset.mobile == 'false') {
      swiperTech = new Swiper(swipTech, {
        modules: [Pagination],
        slideClass: 'technics__slide',
        wrapperClass: 'technics__wrapper',
        pagination: {
          el: '.technics-pagination',
        },
      });
      swipTech.dataset.mobile = 'true'; 
    };
    
    if (window.innerWidth > initSize) {
      swipTech.dataset.mobile = 'false';
      if (swipTech.classList.contains('swiper-initialized')) {             
        swiperTech.destroy();        
      }
    }
}

window.addEventListener('resize', function() {
    mobileSlider ();
})

if (window.innerWidth <= initSize) {
    mobileSlider (); 
}


// Кнопка "Показать еще"

buttonMoreTechnics.addEventListener('click', function () {
    if (textButtonTechnics.textContent === textMore) {
        swipTech.classList.add('technics__swiper--more');
        imgMoreTechnics.classList.add('technics__image--noMore');
        textButtonTechnics.textContent = textNoMore;
    } else {
        textButtonTechnics.textContent = textMore;
        swipTech.classList.remove('technics__swiper--more');
        imgMoreTechnics.classList.remove('technics__image--noMore');
    }
});
