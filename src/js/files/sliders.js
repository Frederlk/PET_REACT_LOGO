import Swiper, { Navigation } from "swiper";
// Инициализация слайдеров
function initSliders() {
    if (document.querySelector(".images-product")) {
        let imagesMainSlider = new Swiper(".images-product__mainslider", {
            // Эффекты переключения слайдов.
            // Листание
            effect: "slide",
            thumbs: {
                // Свайпер с мениатюрами
                // и его настройки
                swiper: {
                    el: ".images-product__subslider",
                    slidesPerView: 4,
                },
            },

            observer: true,
            observeParents: true,
            // Количество слайдов для показа
            slidesPerView: 1,
            // Отступ между слайдами
            spaceBetween: 0,
            // Автовысота
            autoHeight: false,
            // Отключение функционала
            // если слайдов меньше чем нужно
            watchOverflow: true,
            adaptiveHeight: true,

            // Курсор перетаскивания
            grabCursor: true,
            // Переключение при клике на слайд
            slideToClickedSlide: false,

            // Навигация по хешу
            hashNavigation: {
                // Отслеживать состояние
                watchState: true,
            },

            // Управление клавиатурой

            // Количество пролистываемых слайдов
            slidesPerGroup: 1,

            // Активный слайд по центру
            centeredSlides: false,

            // Стартовый слайд.
            initialSlide: 0,

            // Мультирядность
            slidesPerColumn: 1,

            // Бесконечный слайдер

            // Кол-во дублирующих слайдов
            loopedSlides: 0,

            // Свободный режим
            freeMode: false,

            // Автопрокрутка

            // Скорость
            speed: 1000,

            // Вертикальный слайдер
            direction: "horizontal", //'vertical'

            // Отключить предзагрузка картинок
            preloadImages: false,
            // Lazy Loading
            // (подгрузка картинок)

            lazy: {
                // Подгружать на старте
                // переключения слайда
                loadOnTransitionStart: false,

                // Подгрузить предыдущую
                // и следующую картинки
                loadPrevNext: false,
            },

            // Слежка за видимыми слайдами
            watchSlidesProgress: false,

            // Добавление класса видимым слайдам
            watchSlidesVisibility: false,

            on: {
                lazyImageReady: function () {},
            },
        });
        let imagesSubSlider = new Swiper(".images-product__subslider", {
            // Эффекты переключения слайдов.
            // Листание
            effect: "slide",

            observer: true,
            observeParents: true,
            // Количество слайдов для показа
            slidesPerView: 4,
            // Отступ между слайдами
            spaceBetween: 0,
            // Автовысота
            autoHeight: false,
            // Отключение функционала
            // если слайдов меньше чем нужно
            watchOverflow: true,
            adaptiveHeight: true,

            // Курсор перетаскивания
            grabCursor: true,
            // Переключение при клике на слайд
            slideToClickedSlide: false,

            // Навигация по хешу
            hashNavigation: {
                // Отслеживать состояние
                watchState: true,
            },

            // Управление клавиатурой

            // Количество пролистываемых слайдов
            slidesPerGroup: 1,

            // Активный слайд по центру
            centeredSlides: false,

            // Стартовый слайд.
            initialSlide: 0,

            // Мультирядность
            slidesPerColumn: 1,

            // Бесконечный слайдер

            // Кол-во дублирующих слайдов
            loopedSlides: 0,

            // Свободный режим
            freeMode: false,

            // Автопрокрутка

            // Скорость
            speed: 1000,

            // Вертикальный слайдер
            direction: "horizontal", //'vertical'

            // Отключить предзагрузка картинок
            preloadImages: false,
            // Lazy Loading
            // (подгрузка картинок)

            lazy: {
                // Подгружать на старте
                // переключения слайда
                loadOnTransitionStart: false,

                // Подгрузить предыдущую
                // и следующую картинки
                loadPrevNext: false,
            },

            // Слежка за видимыми слайдами
            watchSlidesProgress: false,

            // Добавление класса видимым слайдам
            watchSlidesVisibility: false,

            on: {
                lazyImageReady: function () {},
            },
        });
    }
}
