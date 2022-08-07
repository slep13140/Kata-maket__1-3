const headerButton = document.querySelectorAll('.header-body__button');
const buttonOpen = headerButton[1];
const mobilButton = document.querySelectorAll('.mobil-menu__button');
const buttonClose = mobilButton[0];
const mobilMenu = document.querySelector('.mobil-popap');

buttonOpen.addEventListener('click', function() {
    mobilMenu.classList.add('mobil-popap--open');
});

buttonClose.addEventListener('click', function() {
    mobilMenu.classList.remove('mobil-popap--open');
});

mobilMenu.addEventListener('click', function(evt) {
    if (!evt.target.closest('.mobil-menu')) {
        mobilMenu.classList.remove('mobil-popap--open');
    }
});