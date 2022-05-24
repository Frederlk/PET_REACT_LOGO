import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="header__top top-header">
                <div className="top-header__content _container">
                    <div className="top-header__column">
                        <div className="top-header__menu menu">
                            <div className="menu__icon icon-menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <nav className="menu__body">
                                <ul className="menu__list">
                                    <li>
                                        <a href="#" className="menu__link">
                                            Бренды
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="menu__link">
                                            Распродажа
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="menu__link">
                                            Доставка и Сборка
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="menu__link">
                                            Гарантия
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="menu__link">
                                            Оплата
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="menu__link">
                                            Контакты
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="top-header__column">
                        <a href="#" className="top-header__logo">
                            <img src="img/main/header/logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="top-header__column ">
                        <div className="top-header__contacts contacts-header">
                            <div className="contacts-header__column">
                                <div className="contacts-header__item contacts-header__item_icon">
                                    <div className="contacts-header__label">Москва</div>
                                    <a href="tel:84991234567" className="contacts-header__phone">
                                        8-499-123-45-67
                                    </a>
                                </div>
                            </div>
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
                <div className="bottom-header__container _container">
                    <div className="bottom-header__row">
                        <div className="bottom-header__column">
                            <ul data-da=".menu__body,640,0" className="bottom-header__actions actions-header">
                                <li>
                                    <a href="#" className="actions-header__item actions-header__item_login">
                                        <span>Вход</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="actions-header__item actions-header__item_reg">
                                        <span>Регистрация</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:sport@gmail.com" className="actions-header__item actions-header__item_email">
                                        <span>sport@gmail.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom-header__column">
                            <div className="bottom-header__info info-header">
                                <div className="info-header__column">
                                    <a href="#" data-da=".menu__body,640,2" className="info-header__callback">
                                        <span>Обратный звонок</span>
                                    </a>
                                </div>
                                <div className="info-header__column">
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
                                    <a data-da=".contacts-header__column_forcart,640,2" href="#" className="info-header__cart">
                                        <span>12</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
