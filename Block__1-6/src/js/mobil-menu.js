const menuLang = document.querySelector('.mobil-popap__language');
const buttonLang = document.querySelectorAll('.mobil-popap__btn-lng');


menuLang.addEventListener('input', function () {    
    let checkLang = document.querySelectorAll('.mobil-popap__language--checker');    
    for (let i = 0; i < buttonLang.length; i++) {
        checkLang[i].onchange = function() {
            let num = i;
            for (let j = 0; j < buttonLang.length; j++) {
                if (buttonLang[j].classList.contains('mobil-popap__language--activ') && j !== num) {
                    buttonLang[j].classList.remove('mobil-popap__language--activ')
                }
            }             
            buttonLang[i].classList.add('mobil-popap__language--activ');            
          };
    }
});