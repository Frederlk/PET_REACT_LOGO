import React from "react";

const InfoArr = ({ title, arr }) => {
    return (
        <div className="info-menu__line">
            <div className="info-menu__label">{title}:</div>
            <ul className="info-menu__list">
                {arr.map(({ name, link }, i) => (
                    <li key={name + i} className="info-menu__item">
                        <a href={link} className="info-menu__link">
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const HelpInfo = () => {
    const infoArr = [
        {
            name: "Бренды",
            link: "info/brands",
        },
        {
            name: "Доставка",
            link: "info/delivery",
        },
        {
            name: "Распродажа",
            link: "info/sale",
        },
        {
            name: "Контакты",
            link: "info/contacts",
        },
        {
            name: "Отзывы",
            link: "info/reviews",
        },
    ];

    const helpArr = [
        {
            name: "Как заказать",
            link: "FAQ/order",
        },
        {
            name: "Доставка",
            link: "FAQ/delivery",
        },
        {
            name: "Оплата",
            link: "FAQ/payment",
        },
        {
            name: "Гарантия и сборка",
            link: "FAQ/garanty",
        },
        {
            name: "Возврат",
            link: "FAQ/refund",
        },
    ];

    return (
        <div className="page__info-menu info-menu">
            <div className="info-menu__container">
                <div className="info-menu__body">
                    <InfoArr title="Информация" arr={infoArr} />
                    <InfoArr title="Помощь" arr={helpArr} />
                </div>
            </div>
        </div>
    );
};

export default HelpInfo;
