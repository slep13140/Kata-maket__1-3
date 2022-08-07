const buttonMore = document.querySelector('.main-content__button-more');
const showMore = document.querySelector('.main-content__text');
const imgMore = document.querySelector('.main-content__img-more')
const textMoreRead = 'Читать далее';
const textNoMore = 'Скрыть';
let textButton = buttonMore.querySelector('span');

buttonMore.addEventListener('click', function () {
    if (textButton.textContent === textMoreRead) {
      showMore.classList.add('main-content__text--more');
      imgMore.classList.add('main-content__img_noMore');
      textButton.textContent = textNoMore;
    
    } else {
      textButton.textContent = textMoreRead;
      showMore.classList.remove('main-content__text--more');
      imgMore.classList.remove('main-content__img_noMore');
    
    }
});