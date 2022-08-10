const reqButton = document.querySelectorAll('.body__button-call');
const reqMenu = document.querySelector('.request-popap');
const reqButtonClose = document.querySelector('.request-popap__button');

if (reqButton.length > 0) {
    for (let i = 0; i < reqButton.length; i++) {
        let reqOpenButton = reqButton[i];
        reqOpenButton.addEventListener('click', function () {
            reqMenu.classList.add('request-popap--open');
        });
    }
}

reqButtonClose.addEventListener('click', function() {
    reqMenu.classList.remove('request-popap--open');
});

reqMenu.addEventListener('click', function(evt) {
    if (!evt.target.closest('.request-popap__menu')) {
        reqMenu.classList.remove('request-popap--open');
    }
});