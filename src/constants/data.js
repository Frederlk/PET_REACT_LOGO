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
        link: "Elliptical simulators",
    },
    {
        title: "Велотренажеры",
        link: "Велотренажеры",
    },
    {
        title: "Гребные тренажеры",
        link: "Rowing-simulators",
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

export default { deliveryItems, payCardsItems, socialItems, sideMenu };
