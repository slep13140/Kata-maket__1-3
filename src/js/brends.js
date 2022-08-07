const buttonMoreBrend = document.querySelector('.brends__button-more');
const showMoreBrend = document.querySelector('.brends__swiper');
const imgMoreBrend = document.querySelector('.brends__image-more')
const textMore = 'Показать все';
const textNoMore = 'Скрыть';
let textButtonBrend = buttonMoreBrend.querySelector('span');

buttonMoreBrend.addEventListener('click', function () {
    if (textButtonBrend.textContent === textMore) {
        showMoreBrend.classList.add('brends__swiper--more');
        imgMoreBrend.classList.add('brends__image--noMore');
        textButtonBrend.textContent = textNoMore;
    } else {
        textButtonBrend.textContent = textMore;
        showMoreBrend.classList.remove('brends__swiper--more');
        imgMoreBrend.classList.remove('brends__image--noMore');
    }
});