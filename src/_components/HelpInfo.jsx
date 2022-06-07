import React from "react";
import { Link } from "react-router-dom";

const InfoArr = ({ title, arr }) => {
    return (
        <div className="info-menu__line">
            <div className="info-menu__label">{title}:</div>
            <ul className="info-menu__list">
                {arr.map(({ name, link }, i) => (
                    <li key={name + i} className="info-menu__item">
                        <Link to={link} className="info-menu__link">
                            {name}
                        </Link>
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
            link: "/brands",
        },
        {
            name: "Доставка",
            link: "/delivery",
        },
        {
            name: "Распродажа",
            link: "/sale",
        },
        {
            name: "Контакты",
            link: "/contacts",
        },
        {
            name: "Отзывы",
            link: "/reviews",
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
