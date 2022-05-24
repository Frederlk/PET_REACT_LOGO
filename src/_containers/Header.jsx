import React from "react";
import { images } from "../constants";

const MenuItem = ({ title, link }) => {
    return (
        <li className="menu__item">
            <a href={link} className="menu__link">
                {title}
            </a>
        </li>
    );
};

const ActionsHeaderItem = ({ title, link, img, alt }) => {
    return (
        <li className="actions-header__item">
            <a href={link} className="actions-header__link">
                <div className="actions-header__icon">
                    <img src={img} alt={alt} />
                </div>
                <span>{title}</span>
            </a>
        </li>
    );
};

const Header = () => {
    const { icons, defaultImages } = images;

    return (
        <header className="header">
            <div className="header__top top-header">
                <div className="top-header__container">
                    <div className="top-header__column">
                        <div className="top-header__menu menu">
                            <button type="button" className="menu__icon icon-menu">
                                <span></span>
                            </button>
                            <nav className="menu__body">
                                <ul className="menu__list">
                                    <MenuItem title="Бренды" link="#" />
                                    <MenuItem title="Распродажа" link="#" />
                                    <MenuItem title="Доставка и Сборка" link="#" />
                                    <MenuItem title="Гарантия" link="#" />
                                    <MenuItem title="Оплата" link="#" />
                                    <MenuItem title="Контакты" link="#" />
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="top-header__column">
                        <a href="#" className="top-header__logo">
                            <img src={defaultImages.logo} alt="Логотип" />
                        </a>
                    </div>
                    <div className="top-header__column ">
                        <div className="top-header__contacts contacts-header">
                            <a href="tel:84991234567" className="contacts-header__column">
                                <div className="contacts-header__icon">
                                    <img src={icons.phone_2} alt="Позвонить" />
                                </div>
                                <div className="contacts-header__item contacts-header__item_icon">
                                    <div className="contacts-header__label">Москва</div>
                                    <span className="contacts-header__phone">8-499-123-45-67</span>
                                </div>
                            </a>
                            <div className="contacts-header__column contacts-header__column_forcart">
                                <div className="contacts-header__item contacts-header__item_second-phone">
                                    <div className="contacts-header__label">Бесплатно для России</div>
                                    <a href="tel:88001234567" className="contacts-header__phone">
                                        8-800-123-45-67
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header__bottom bottom-header">
                <div className="bottom-header__container ">
                    <div className="bottom-header__row">
                        <div className="bottom-header__column">
                            <ul data-da=".menu__body,640,last" className="bottom-header__actions actions-header">
                                <ActionsHeaderItem title="Вход" link="#" img={icons.key} alt="Вход" />
                                <ActionsHeaderItem title="Регистрация" link="#" img={icons.head} alt="Регистрация" />
                                <ActionsHeaderItem
                                    title="sport@gmail.com"
                                    link="mailto:sport@gmail.com"
                                    img={icons.mail}
                                    alt="Почта"
                                />
                            </ul>
                        </div>
                        <div className="bottom-header__column">
                            <div className="bottom-header__info info-header">
                                <div className="info-header__column">
                                    <a href="#" data-da=".menu__body,640,last" className="info-header__callback">
                                        <div className="info-header__icon">
                                            <img src={icons.phone_3} alt="Обратный звонок" />
                                        </div>
                                        <span>Обратный звонок</span>
                                    </a>
                                </div>
                                <div className="info-header__column info-header__column_phone">
                                    <div className="info-header__icon">
                                        <img src={icons.date} alt="График работы" />
                                    </div>
                                    <div className="info-header__schedule">
                                        <p>
                                            Пн–Пт:<span> 09:00–21:00</span>
                                        </p>
                                        <p>
                                            Сб–Вс:<span> 10:00–20:00</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="info-header__column">
                                    <a data-da=".contacts-header__column_forcart,640,last" href="#" className="info-header__cart">
                                        <div className="info-header__cart-icon">
                                            <img src={icons.cart_2} alt="Корзина" />
                                        </div>
                                        <span>12</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header__bg">
                <img src={defaultImages.bg_header} alt="Задний фон" />
            </div>
        </header>
    );
};

export default Header;
