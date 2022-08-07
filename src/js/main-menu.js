const buttonCheck = document.querySelector('.main-menu__list');
const menuElement = document.querySelectorAll('.main-menu__elem');

buttonCheck.addEventListener('input', function () {
    let checkbox = document.querySelectorAll('.main-menu__checker');
    for (let i = 0; i < menuElement.length; i++) {
        checkbox[i].onchange = function() {
            let numElem = i;
            for (let j = 0; j < menuElement.length; j++) {
                if (menuElement[j].classList.contains('main-menu__elem--activ') && j !== numElem) {
                    menuElement[j].classList.remove('main-menu__elem--activ')
                }
            }             
            menuElement[i].classList.add('main-menu__elem--activ');            
          };
    }
});