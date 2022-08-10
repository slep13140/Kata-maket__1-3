import Swiper, { Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';

const initSize = 320;
const swipBrends = document.querySelector('.brends__swiper');
const buttonMoreBrend = document.querySelector('.brends__button-more');
const imgMoreBrend = document.querySelector('.brends__image-more')
const textMore = 'Показать все';
const textNoMore = 'Скрыть';
let swiperBrend;
let textButtonBrend = buttonMoreBrend.querySelector('span');

// Инициализация Swiper

function mobileSlider () {
    if (window.innerWidth <= initSize && swipBrends.dataset.mobile == 'false') {
      swiperBrend = new Swiper(swipBrends, {
        modules: [Pagination],
        slideClass: 'brends__slide',
        wrapperClass: 'brends__wrapper',
        pagination: {
            el: ".brends-pagination",
        },
      });
      swipBrends.dataset.mobile = 'true';
    };
    
    if (window.innerWidth > initSize) {
      swipBrends.dataset.mobile = 'false';
      if (swipBrends.classList.contains('swiper-initialized')) {        
        swiperBrend.destroy();
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

buttonMoreBrend.addEventListener('click', function () {
    if (textButtonBrend.textContent === textMore) {
        swipBrends.classList.add('brends__swiper--more');
        imgMoreBrend.classList.add('brends__image--noMore');
        textButtonBrend.textContent = textNoMore;
    } else {
        textButtonBrend.textContent = textMore;
        swipBrends.classList.remove('brends__swiper--more');
        imgMoreBrend.classList.remove('brends__image--noMore');
    }
});