const buttonMoreTechnics = document.querySelector('.technics__button-more');
const showMoreTechnics = document.querySelector('.technics__swiper');
const imgMoreTechnics = document.querySelector('.technics__image-more');
const textMore = 'Показать все';
const textNoMore = 'Скрыть';
let textButtonTechnics = buttonMoreTechnics.querySelector('span');

buttonMoreTechnics.addEventListener('click', function () {
    if (textButtonTechnics.textContent === textMore) {
        showMoreTechnics.classList.add('technics__swiper--more');
        imgMoreTechnics.classList.add('technics__image--noMore');
        textButtonTechnics.textContent = textNoMore;
    } else {
        textButtonTechnics.textContent = textMore;
        showMoreTechnics.classList.remove('technics__swiper--more');
        imgMoreTechnics.classList.remove('technics__image--noMore');
    }
});
