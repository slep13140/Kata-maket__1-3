const swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
});
const buttonMore = document.querySelector('.button-more');
const showMore = document.querySelector('.main-menu');
const imgMore = document.querySelector('.button-more__image')
const textMore = 'Показать все';
const textNoMore = 'Скрыть';
let textButton = document.querySelector('.button-more__button');

buttonMore.addEventListener('click', function () {
    if (textButton.textContent === textMore) {
        showMore.classList.add('main-menu_more');
        imgMore.classList.add('button-more__image_noMore');
        textButton.textContent = textNoMore;
    } else {
        textButton.textContent = textMore;
        showMore.classList.remove('main-menu_more');
        imgMore.classList.remove('button-more__image_noMore');
    }
    
});