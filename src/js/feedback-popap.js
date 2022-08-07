const feedButton = document.querySelectorAll('.body__button-feedback');
const feedMenu = document.querySelector('.feedback-popap');
const feedButtonClose = document.querySelector('.feedback-popap__button');

if (feedButton.length > 0) {
    for (let i = 0; i < feedButton.length; i++) {
        let feedOpenButton = feedButton[i];
        feedOpenButton.addEventListener('click', function () {
            feedMenu.classList.add('feedback-popap--open');
        });
    }
}

feedButtonClose.addEventListener('click', function() {
    feedMenu.classList.remove('feedback-popap--open');
});

feedMenu.addEventListener('click', function(evt) {
    if (!evt.target.closest('.feedback-popap__menu')) {
        feedMenu.classList.remove('feedback-popap--open');
    }
});