import React from "react";
import { SearchBar } from "../_components";
import { BrandsSlider, HomeMainSlider, HomeText, ProductSlider, Side } from "../_containers";

const HomePage = () => {
    return (
        <>
            <div className="page__container">
                <div className="page__body">
                    <Side />
                    <div className="page__content">
                        <SearchBar />
                        <HomeMainSlider />
                        <ProductSlider />
                        <div className="page__info"></div>
                    </div>
                </div>
            </div>
            <BrandsSlider />
            <HomeText />

            {/* <div className="page__info-menu info-menu">
            <div className="info-menu__container _container">
                <div className="info-menu__body">
                    <div className="info-menu__line">
                        <div className="info-menu__label">Информация:</div>
                        <ul className="info-menu__list">
                            <li>
                                <a href="" className="info-menu__link">
                                    Бренды
                                </a>
                            </li>
                            <li>
                                <a href="" className="info-menu__link">
                                    Доставка
                                </a>
                            </li>
                            <li>
                                <a href="" className="info-menu__link">
                                    Распродажа
                                </a>
                            </li>
                            <li>
                                <a href="" className="info-menu__link">
                                    Контакты
                                </a>
                            </li>
                            <li>
                                <a href="" className="info-menu__link">
                                    Отзывы
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="info-menu__line">
                        <div className="info-menu__label">Помощь:</div>
                        <ul className="info-menu__list">
                            <li>
                                <a href="" className="info-menu__link">
                                    Как заказать
                                </a>
                            </li>
                            <li>
                                <a href="" className="info-menu__link">
                                    Доставка
                                </a>
                            </li>
                            <li>
                                <a href="" className="info-menu__link">
                                    Оплата
                                </a>
                            </li>
                            <li>
                                <a href="" className="info-menu__link">
                                    Гарантия и сборка
                                </a>
                            </li>
                            <li>
                                <a href="" className="info-menu__link">
                                    Возврат
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> */}
        </>
    );
};

export default HomePage;
