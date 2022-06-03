import images from "./images";

const { deliveryImages } = images;
const deliveryItems = [
    {
        img: deliveryImages.delivery01,
        alt: "Деловые Линии",
    },
    {
        img: deliveryImages.delivery02,
        alt: "НЭК",
    },
    {
        img: deliveryImages.delivery03,
        alt: "Автотрейдинг",
    },
    {
        img: deliveryImages.delivery04,
        alt: "ЖелДор",
    },
    {
        img: deliveryImages.delivery05,
        alt: "Кит",
    },
    {
        img: deliveryImages.delivery06,
        alt: "Байкал Сервис",
    },
];

const { payCardsImages } = images;
const payCardsItems = [
    {
        img: payCardsImages.payCard01,
        alt: "Visa",
    },
    {
        img: payCardsImages.payCard02,
        alt: "Mastercard",
    },
    {
        img: payCardsImages.payCard03,
        alt: "Мир",
    },
    {
        img: payCardsImages.payCard04,
        alt: "PayPal",
    },
    {
        img: payCardsImages.payCard05,
        alt: "Qivi",
    },
];

const { socialIcons } = images;
const socialItems = [
    {
        img: socialIcons.vkSoclial,
        alt: "Профиль во Вконтакте",
        link: "vk.com/LOGO",
    },
    {
        img: socialIcons.fbSocial,
        alt: "Профиль в Facebook",
        link: "facebook.com/LOGO",
    },
    {
        img: socialIcons.instSocial,
        alt: "Профиль в Instagram",
        link: "instagram.com/LOGO",
    },

    {
        img: socialIcons.okSocial,
        alt: "Профиль в Одноклассниках",
        link: "ok.com/LOGO",
    },
];

const sideMenu = [
    {
        title: "Беговые дорожки",
        link: "Treadmills",
        submenu: [
            {
                subtitle: "Всепогодный",
                sublink: "All-weather",
            },
            {
                subtitle: "Для помещений",
                sublink: "For-premises",
            },
            {
                subtitle: "Профессиональный",
                sublink: "Professional",
            },
            {
                subtitle: "Любительский",
                sublink: "Amateur",
            },
        ],
    },
    {
        title: "Эллиптические тренажеры",
        link: "Elliptical-simulators",
        submenu: [
            {
                subtitle: "Всепогодный",
                sublink: "All-weatherы",
            },
            {
                subtitle: "Профессиональный",
                sublink: "Professionals",
            },
            {
                subtitle: "Любительский",
                sublink: "Amateusr",
            },
        ],
    },
    {
        title: "Велотренажеры",
        link: "Велотренажеры",
    },
    {
        title: "Гребные тренажеры",
        link: "Rowing-simulators",
        submenu: [
            {
                subtitle: "Для помещений",
                sublink: "For-premisess",
            },
            {
                subtitle: "Профессиональный",
                sublink: "Professionals",
            },
            {
                subtitle: "Любительский",
                sublink: "Amateusr",
            },
        ],
    },
    {
        title: "Вибромассажеры",
        link: "Vibration-massagers",
    },
    {
        title: "Теннисные столы",
        link: "Tennis-tables",
    },
    {
        title: "Баскетбол",
        link: "Basketball",
    },
    {
        title: "Массажные кресла",
        link: "Massage-chairs",
    },
    {
        title: "Массажные столы",
        link: "Massage-tables",
    },
    {
        title: "Силовые тренажеры",
        link: "Power-simulators",
    },
    {
        title: "Батуты",
        link: "Stopper",
    },
    {
        title: "Детские городки",
        link: "Children's-towns",
    },
    {
        title: "Дачная мебель",
        link: "Country-furniture",
    },
    {
        title: "Уличные спортивные комплексы",
        link: "Street-sports-complexes",
    },
    {
        title: "Аксессуары",
        link: "Accessories",
    },
];

const newsItems = [
    {
        title: "Снижение цен на игровые площадки Jungle Gym",
        text: ` Уважаемые покупатели! <br />
                Мы рады сообщить вам о снижении цены с 27 июля на детский игровой комплекс`,
        date: new Date(2021, 7, 12),
        link: "news/jungle-gym",
    },
    {
        title: "Поступление батутов Eclipse!",
        text: ` Уважаемые покупатели! <br />
                Мы рады сообщить вам о снижении цены с 27 июля на детский игровой комплекс`,
        date: new Date(2021, 7, 19),
        link: "news/eclipse",
    },
];

const lastReviewsItems = [
    {
        name: "Павел Никифоров",
        text: "Ради экономии места в тренажерном зале приобрел многофункциональный силовой тренажер Life Gear. За такую небольшую стоимость и с такими возможностями, он просто не заменим.",
        date: new Date(2021, 9, 12),
    },
    {
        name: "Степан Николаевич",
        text: "Спасибо за прекрасный совет, велосипед всей семье понравился и цену за него достойную запросили.",
        date: new Date(2021, 9, 15),
    },
];

const { mainSlidesImages } = images;
const homeMainSlides = [
    {
        title: `<span>Мега</span>распродажа`,
        text: ` <p>
                    <span>Успей купить </span>тренажеры
                </p>
                <p>
                    <span>по старой цене</span>
                </p>
                <p>
                    до их<span> повышения</span>
                </p>`,
        img: mainSlidesImages.mainSlide01,
        price: "от 45 000 ₽",
        buttonText: "Подробнее",
        buttonLink: "More_Mega-Sales",
    },
    {
        title: `<span>Мы</span>перезжаем`,
        text: ` <p>
                    <span>Успей раскупить </span>товары
                </p>
                <p>
                    <span>по сниженной цене</span>
                </p>`,
        img: mainSlidesImages.mainSlide02,
        price: "Скидки до 60%",
        buttonText: "Подробнее",
        buttonLink: "More_Mega-Sales",
    },
    {
        title: `<span>Мега</span>распродажа`,
        text: ` <p>
                    <span>Самые новые </span>тренажеры
                </p>
                <p>
                    <span>по самым приятным</span>
                </p>
                <p>
                    ценам
                </p>`,
        img: mainSlidesImages.mainSlide03,
        buttonText: "Подробнее",
        buttonLink: "More_Mega-Sales",
    },
    {
        title: `Распродажа`,
        text: ` <p>
                    <span>По старой цене</span>
                </p>`,
        img: mainSlidesImages.mainSlide04,
        price: "от 25 000 ₽",
        buttonText: "Подробнее",
        buttonLink: "More_Mega-Sales",
    },
    {
        title: `<span>Супер</span>скидки`,
        text: ` <p>
                    <span>Успей купить </span>тренажеры
                </p>`,
        img: mainSlidesImages.mainSlide05,
        price: "от 105 000 ₽",
        buttonText: "Подробнее",
        buttonLink: "More_Mega-Sales",
    },
];

export default { deliveryItems, payCardsItems, socialItems, sideMenu, newsItems, lastReviewsItems, homeMainSlides };
