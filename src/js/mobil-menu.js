const menuLang = document.querySelector('.mobil-menu__language');
const buttonLang = document.querySelectorAll('.mobil-menu__btn-lng');


menuLang.addEventListener('input', function () {    
    let checkLang = document.querySelectorAll('.mobil-menu__language--checker');    
    for (let i = 0; i < buttonLang.length; i++) {
        checkLang[i].onchange = function() {
            let num = i;
            for (let j = 0; j < buttonLang.length; j++) {
                if (buttonLang[j].classList.contains('mobil-menu__language--activ') && j !== num) {
                    buttonLang[j].classList.remove('mobil-menu__language--activ')
                }
            }             
            buttonLang[i].classList.add('mobil-menu__language--activ');            
          };
    }
});