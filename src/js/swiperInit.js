import Swiper, { Pagination, Manipulation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';

//Инициализация swiper
const initSize = 320;
const swipBrends = document.querySelector('.brends__swiper');
const swipTech = document.querySelector('.technics__swiper');
const swipPrice = document.querySelector('.prices__swiper');

let swiperBrend;
let swiperTech;
let swiperPrice;

function mobileSlider () {
  if (window.innerWidth <= initSize && swipBrends.dataset.mobile == 'false') {
    swiperBrend = new Swiper(swipBrends, {
      modules: [Pagination],
      slideClass: 'brends__slide',
      wrapperClass: 'brends__wrapper',
      pagination: {
          el: ".brends-pagination",
      },
    });

    swiperTech = new Swiper(swipTech, {
      modules: [Pagination],
      slideClass: 'technics__slide',
      wrapperClass: 'technics__wrapper',
      pagination: {
        el: '.technics-pagination',
      },
    });

    swiperPrice = new Swiper(swipPrice, {
      slidesPerView: 1,
      spaceBetween: 16,
      modules: [Pagination, Manipulation],
      slideClass: 'prices__slide',
      wrapperClass: 'prices__wrapper',
      pagination: {
        el: ".prices-pagination",
      }
    })
    swipBrends.dataset.mobile = 'true';

    if (swipBrends.classList.contains('swiper-initialized')) {
      swiperPrice.appendSlide([
        `<div class="prices__slide">
        <div class="prices__element"><span>Ремонтные услуги</span><p>Тестирование с выдачей технического заключения</p></div>
        <div class="prices__element"><span>Цена</span><p>Бесплатно</p></div>
        <div class="prices__element"><span>Срок</span><p>30-120 мин</p><button type="button"><img src="img/icon-order.svg" alt="Заказать услугу"></button></div>
        </div>`,
        `<div class="prices__slide">
        <div class="prices__element"><span>Ремонтные услуги</span><p>Диагностика</p></div>
        <div class="prices__element"><span>Цена</span><p>Бесплатно</p></div>
        <div class="prices__element"><span>Срок</span><p>30 мин</p><button type="button"><img src="img/icon-order.svg" alt="Заказать услугу"></button></div>
        </div>`,
        `<div class="prices__slide">
        <div class="prices__element"><span>Ремонтные услуги</span><p>Замена дисплея</p></div>
        <div class="prices__element"><span>Цена</span><p>1 000 ₽</p></div>
        <div class="prices__element"><span>Срок</span><p>30-120 мин</p><button type="button"><img src="img/icon-order.svg" alt="Заказать услугу"></button></div>
        </div>`,
        `<div class="prices__slide">
        <div class="prices__element"><span>Ремонтные услуги</span><p>Замена полифонического динамика</p></div>
        <div class="prices__element"><span>Цена</span><p>1 000 ₽</p></div>
        <div class="prices__element"><span>Срок</span><p>30-120 мин</p><button type="button"><img src="img/icon-order.svg" alt="Заказать услугу"></button></div>
        </div>`,
        `<div class="prices__slide">
        <div class="prices__element"><span>Ремонтные услуги</span><p>Замена программного обеспечения</p></div>
        <div class="prices__element"><span>Цена</span><p>1 000 ₽</p></div>
        <div class="prices__element"><span>Срок</span><p>30-120 мин</p><button type="button"><img src="img/icon-order.svg" alt="Заказать услугу"></button></div>
        </div>`
       ]);
       removePriceContent ();
    }
           
    
  };
  
  if (window.innerWidth > initSize) {
    swipBrends.dataset.mobile = 'false';
    if (swipBrends.classList.contains('swiper-initialized')) {
      swiperPrice.removeSlide([0, 1, 2, 3, 4]);
      swiperBrend.destroy();
      swiperTech.destroy();
      swiperPrice.destroy();
      addPriceContent ()
    }
    
  }

}

function addPriceContent () {
  swipPrice.insertAdjacentHTML(
    'afterbegin',
    `<table class="prices__table">                    
    <tr>
        <th>Ремонтные услуги</th>
        <th>Цена</th>
        <th>Срок</th>
        <th></th>
    </tr>
    <tr>
        <td>Диагностика</td>
        <td>Бесплатно</td>
        <td>30 мин</td>
        <td><button type="button"><img src="img/icon-order.svg" alt="Заказать услугу"></button></td>
    </tr>
    <tr>
        <td>Замена дисплея</td>
        <td>1 000 ₽</td>
        <td>30-120 мин</td>
        <td><button type="button"><img src="img/icon-order.svg" alt="Заказать услугу"></button></td>
    </tr>
    <tr>
        <td>Замена полифонического динамика</td>
        <td>1 000 ₽</td>
        <td>30-120 мин</td>
        <td><button type="button"><img src="img/icon-order.svg" alt="Заказать услугу"></button></td>
    </tr>
    <tr>
        <td>Тестирование с выдачей технического заключения</td>
        <td>1 000 ₽</td>
        <td>30-120 мин</td>
        <td><button type="button"><img src="img/icon-order.svg" alt="Заказать услугу"></button></td>
    </tr>
    <tr>
        <td>Замена программного обеспечения</td>
        <td>1 000 ₽</td>
        <td>30-120 мин</td>
        <td><button type="button"><img src="img/icon-order.svg" alt="Заказать услугу"></button></td>
    </tr>
    </table>`
  );

}
function removePriceContent () {
  if (document.querySelector('.prices__table')) {
    document.querySelector('.prices__table').remove();
  }
}



window.addEventListener('resize', function() {
  mobileSlider ();
})

if (window.innerWidth > initSize) {
  addPriceContent (); 
} else {
  mobileSlider ();
}