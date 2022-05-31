import React, { useState } from "react";
import { images } from "../constants";
import data from "../constants/data";

const Side = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const sideMenuItems = data.sideMenu.map(({ title, link, submenu }, i) => {
        return (
            <li key={title + link + i} className="side-menu__item">
                <a href={link} className="side-menu__link">
                    {title}
                </a>
                {submenu && (
                    <div className="side-menu__arrow">
                        <img src={images.icons.arrow} alt="" />
                    </div>
                )}
                {submenu && (
                    <div className="side-menu__submenu submenu-side">
                        <div className="submenu-side__body">
                            <ul className="submenu-side__menu">
                                {submenu.map(({ subtitle, sublink }, i) => (
                                    <li key={subtitle + sublink + i} className="submenu-side__item">
                                        <a href={sublink} className="submenu-side__link">
                                            {subtitle}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            {/* <div className="submenu-side__product">
                                <div className="item-product">
                                    <div className="item-product__labels">
                                        <div className="item-product__label">Товар Дня</div>
                                    </div>
                                    <a href="#" className="item-product__image item-product__image_side">
                                        <img src="img/main/offer/01_side.jpg" alt="Тенисный стол" />
                                    </a>
                                    <div className="item-product__body">
                                        <a href="" className="item-product__title">
                                            Домашний теннисный стол Donic Indoor Roller 800 Green
                                        </a>
                                        <div className="item-product__footer">
                                            <div className="item-product__old-price rub">64 990</div>
                                            <a href="#" className="item-product__add"></a>
                                            <div className="item-product__price rub">64 990</div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                )}
            </li>
        );
    });

    return (
        <aside data-spollers="768,min" className="side">
            <nav className={`side__menu side-menu ${menuOpen ? "_side-menu-open" : ""}`}>
                <button data-spoller type="button" className="side-menu__header">
                    <h2 className="side-menu__title">Каталог товаров</h2>
                    <div onClick={() => setMenuOpen(!menuOpen)} className="side-menu__burger">
                        <div className="side-menu__lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </button>
                <ul className="side-menu__list">{sideMenuItems}</ul>
            </nav>
            <div className="side__bg-ibg">
                <img src={images.defaultImages.bg_side} alt="Задний Фон" />
            </div>

            {/* <div data-da=".page__info,992,last" className="page__content-side">
                <div className="page__news-side news-side">
                    <a href="" className="news-side__title side-title">
                        Новости
                    </a>
                    <div className="news-side__items">
                        <div className="news-side__item">
                            <a href="" className="news-side__subtitle">
                                Снижение цен на игровые площадки Jungle Gym
                            </a>
                            <div className="news-side__body">
                                <div className="news-side__date">
                                    <span>12</span>
                                    авг
                                </div>
                                <div className="news-side__text">
                                    Уважаемые покупатели! <br />
                                    Мы рады сообщить вам о снижении цены с 27 июля на детский игровой комплекс
                                </div>
                            </div>
                        </div>
                        <div className="news-side__item">
                            <a href="" className="news-side__subtitle">
                                Поступление батутов Eclipse!
                            </a>
                            <div className="news-side__body">
                                <div className="news-side__date">
                                    <span>19</span>
                                    авг
                                </div>
                                <div className="news-side__text">
                                    Уважаемые покупатели! <br />
                                    Мы рады сообщить вам о снижении цены с 27 июля на детский игровой комплекс
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page__rewiews-side rewiews-side">
                    <a href="" className="rewiews-side__title side-title">
                        Отзывы
                    </a>
                    <div className="rewiews-side__items">
                        <div className="rewiews-side__item">
                            <div className="rewiews-side__row">
                                <div className="rewiews-side__name">Павел Никифоров</div>
                                <div className="rewiews-side__date">12.09.2015</div>
                            </div>
                            <div className="rewiews-side__body">
                                <div className="rewiews-side__icon">”</div>
                                <div className="rewiews-side__text">
                                    Ради экономии места в тренажерном зале приобрел многофункциональный силовой тренажер Life
                                    Gear. За такую небольшую стоимость и с такими возможностями, он просто не заменим.
                                </div>
                            </div>
                        </div>
                        <div className="rewiews-side__item">
                            <div className="rewiews-side__row">
                                <div className="rewiews-side__name">Степан Николаевич</div>
                                <div className="rewiews-side__date">12.09.2015</div>
                            </div>
                            <div className="rewiews-side__body">
                                <div className="rewiews-side__icon">”</div>
                                <div className="rewiews-side__text">
                                    Спасибо за прекрасный совет, велосипед всей семье понравился и цену за него достойную
                                    запросили.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </aside>
    );
};

export default Side;
