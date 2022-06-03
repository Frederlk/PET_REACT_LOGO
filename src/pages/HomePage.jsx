import React from "react";
import { SearchBar } from "../_components";
import { HomeMainSlider, Side } from "../_containers";

const HomePage = () => {
    return (
        <>
            <div className="page__container">
                <Side />
                <div className="page__content">
                    <SearchBar />
                    <HomeMainSlider />
                </div>
            </div>
            {/* <div className="page__content">
                    <div className="page__products products-slider">
                        <div className="products-slider__header">
                            <div className="products-slider__title">Популярные товары</div>
                            <div className="products-slider__control">
                                <div className="products-slider__arrow products-slider__arrow_prev  _arrow _arrow_prev"></div>
                                <div className="products-slider__info"></div>
                                <div className="products-slider__arrow products-slider__arrow_next  _arrow _arrow_next"></div>
                            </div>
                        </div>
                        <div className="products-slider__item _swiper">
                            <div className="products-slider__slide">
                                <div className="products-slider__items items-products">
                                    <div className="items-products__column">
                                        <div className="item-product">
                                            <div className="item-product__labels">
                                                <div className="item-product__label">Товар Дня</div>
                                            </div>
                                            <a href="#" className="item-product__image">
                                                <img src="img/main/catalog/01.jpg" alt="" />
                                            </a>
                                            <div className="item-product__body">
                                                <a href="" className="item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="item-product__footer">
                                                    <a href="#" className="item-product__add"></a>
                                                    <div className="item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                            <div className="item-product__hover hover-item-product">
                                                <a href="" className="hover-item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="hover-item-product__options options-item-product">
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Тип беговой дорожки:</div>
                                                        <div className="options-item-product__value">Электрическая</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">
                                                            Скорость движения (км/ч):
                                                        </div>
                                                        <div className="options-item-product__value">22</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Складывание:</div>
                                                        <div className="options-item-product__value">Есть</div>
                                                    </div>
                                                </div>
                                                <a href="" className="hover-item-product__cart"></a>
                                                <div className="hover-item-product__footer">
                                                    <div className="hover-item-product__stock">в наличии</div>
                                                    <div className="hover-item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="items-products__column">
                                        <div className="item-product">
                                            <div className="item-product__labels"></div>
                                            <a href="#" className="item-product__image">
                                                <img src="img/main/catalog/02.jpg" alt="" />
                                            </a>
                                            <div className="item-product__body">
                                                <a href="" className="item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="item-product__footer">
                                                    <div className="item-product__old-price rub">65 990</div>
                                                    <a href="#" className="item-product__add"></a>
                                                    <div className="item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                            <div className="item-product__hover hover-item-product">
                                                <a href="" className="hover-item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="hover-item-product__options options-item-product">
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Тип беговой дорожки:</div>
                                                        <div className="options-item-product__value">Электрическая</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">
                                                            Скорость движения (км/ч):
                                                        </div>
                                                        <div className="options-item-product__value">22</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Складывание:</div>
                                                        <div className="options-item-product__value">Есть</div>
                                                    </div>
                                                </div>
                                                <a href="" className="hover-item-product__cart"></a>
                                                <div className="hover-item-product__footer">
                                                    <div className="hover-item-product__old-price rub">65 990</div>
                                                    <div className="hover-item-product__stock">в наличии</div>
                                                    <div className="hover-item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="items-products__column">
                                        <div className="item-product">
                                            <div className="item-product__labels">
                                                <div className="item-product__label">Товар Дня</div>
                                            </div>
                                            <a href="#" className="item-product__image">
                                                <img src="img/main/catalog/01.jpg" alt="" />
                                            </a>
                                            <div className="item-product__body">
                                                <a href="" className="item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="item-product__footer">
                                                    <div className="item-product__old-price rub">65 990</div>
                                                    <a href="#" className="item-product__add"></a>
                                                    <div className="item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                            <div className="item-product__hover hover-item-product">
                                                <a href="" className="hover-item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="hover-item-product__options options-item-product">
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Тип беговой дорожки:</div>
                                                        <div className="options-item-product__value">Электрическая</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">
                                                            Скорость движения (км/ч):
                                                        </div>
                                                        <div className="options-item-product__value">22</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Складывание:</div>
                                                        <div className="options-item-product__value">Есть</div>
                                                    </div>
                                                </div>
                                                <a href="" className="hover-item-product__cart"></a>
                                                <div className="hover-item-product__footer">
                                                    <div className="hover-item-product__old-price rub">65 990</div>
                                                    <div className="hover-item-product__stock">в наличии</div>
                                                    <div className="hover-item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="items-products__column">
                                        <div className="item-product">
                                            <div className="item-product__labels"></div>
                                            <a href="#" className="item-product__image">
                                                <img src="img/main/catalog/02.jpg" alt="" />
                                            </a>
                                            <div className="item-product__body">
                                                <a href="" className="item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="item-product__footer">
                                                    <div className="item-product__old-price rub">65 990</div>
                                                    <a href="#" className="item-product__add"></a>
                                                    <div className="item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                            <div className="item-product__hover hover-item-product">
                                                <a href="" className="hover-item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="hover-item-product__options options-item-product">
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Тип беговой дорожки:</div>
                                                        <div className="options-item-product__value">Электрическая</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">
                                                            Скорость движения (км/ч):
                                                        </div>
                                                        <div className="options-item-product__value">22</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Складывание:</div>
                                                        <div className="options-item-product__value">Есть</div>
                                                    </div>
                                                </div>
                                                <a href="" className="hover-item-product__cart"></a>
                                                <div className="hover-item-product__footer">
                                                    <div className="hover-item-product__old-price rub">65 990</div>
                                                    <div className="hover-item-product__stock">в наличии</div>
                                                    <div className="hover-item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="items-products__column">
                                        <div className="item-product">
                                            <div className="item-product__labels">
                                                <div className="item-product__label">Товар Дня</div>
                                            </div>
                                            <a href="#" className="item-product__image">
                                                <img src="img/main/catalog/01.jpg" alt="" />
                                            </a>
                                            <div className="item-product__body">
                                                <a href="" className="item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="item-product__footer">
                                                    <div className="item-product__old-price rub">65 990</div>
                                                    <a href="#" className="item-product__add"></a>
                                                    <div className="item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                            <div className="item-product__hover hover-item-product">
                                                <a href="" className="hover-item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="hover-item-product__options options-item-product">
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Тип беговой дорожки:</div>
                                                        <div className="options-item-product__value">Электрическая</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">
                                                            Скорость движения (км/ч):
                                                        </div>
                                                        <div className="options-item-product__value">22</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Складывание:</div>
                                                        <div className="options-item-product__value">Есть</div>
                                                    </div>
                                                </div>
                                                <a href="" className="hover-item-product__cart"></a>
                                                <div className="hover-item-product__footer">
                                                    <div className="hover-item-product__old-price rub">65 990</div>
                                                    <div className="hover-item-product__stock">в наличии</div>
                                                    <div className="hover-item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="items-products__column">
                                        <div className="item-product">
                                            <div className="item-product__labels">
                                                <div className="item-product__label">Товар Дня</div>
                                            </div>
                                            <a href="#" className="item-product__image">
                                                <img src="img/main/catalog/01.jpg" alt="" />
                                            </a>
                                            <div className="item-product__body">
                                                <a href="" className="item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="item-product__footer">
                                                    <div className="item-product__old-price rub">65 990</div>
                                                    <a href="#" className="item-product__add"></a>
                                                    <div className="item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                            <div className="item-product__hover hover-item-product">
                                                <a href="" className="hover-item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="hover-item-product__options options-item-product">
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Тип беговой дорожки:</div>
                                                        <div className="options-item-product__value">Электрическая</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">
                                                            Скорость движения (км/ч):
                                                        </div>
                                                        <div className="options-item-product__value">22</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Складывание:</div>
                                                        <div className="options-item-product__value">Есть</div>
                                                    </div>
                                                </div>
                                                <a href="" className="hover-item-product__cart"></a>
                                                <div className="hover-item-product__footer">
                                                    <div className="hover-item-product__old-price rub">65 990</div>
                                                    <div className="hover-item-product__stock">в наличии</div>
                                                    <div className="hover-item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="products-slider__slide">
                                <div className="products-slider__items items-products">
                                    <div className="items-products__column">
                                        <div className="item-product">
                                            <div className="item-product__labels">
                                                <div className="item-product__label">Товар Дня</div>
                                            </div>
                                            <a href="#" className="item-product__image">
                                                <img src="img/main/catalog/01.jpg" alt="" />
                                            </a>
                                            <div className="item-product__body">
                                                <a href="" className="item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="item-product__footer">
                                                    <a href="#" className="item-product__add"></a>
                                                    <div className="item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                            <div className="item-product__hover hover-item-product">
                                                <a href="" className="hover-item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="hover-item-product__options options-item-product">
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Тип беговой дорожки:</div>
                                                        <div className="options-item-product__value">Электрическая</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">
                                                            Скорость движения (км/ч):
                                                        </div>
                                                        <div className="options-item-product__value">22</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Складывание:</div>
                                                        <div className="options-item-product__value">Есть</div>
                                                    </div>
                                                </div>
                                                <a href="" className="hover-item-product__cart"></a>
                                                <div className="hover-item-product__footer">
                                                    <div className="hover-item-product__stock">в наличии</div>
                                                    <div className="hover-item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="items-products__column">
                                        <div className="item-product">
                                            <div className="item-product__labels"></div>
                                            <a href="#" className="item-product__image">
                                                <img src="img/main/catalog/02.jpg" alt="" />
                                            </a>
                                            <div className="item-product__body">
                                                <a href="" className="item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="item-product__footer">
                                                    <div className="item-product__old-price rub">65 990</div>
                                                    <a href="#" className="item-product__add"></a>
                                                    <div className="item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                            <div className="item-product__hover hover-item-product">
                                                <a href="" className="hover-item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="hover-item-product__options options-item-product">
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Тип беговой дорожки:</div>
                                                        <div className="options-item-product__value">Электрическая</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">
                                                            Скорость движения (км/ч):
                                                        </div>
                                                        <div className="options-item-product__value">22</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Складывание:</div>
                                                        <div className="options-item-product__value">Есть</div>
                                                    </div>
                                                </div>
                                                <a href="" className="hover-item-product__cart"></a>
                                                <div className="hover-item-product__footer">
                                                    <div className="hover-item-product__old-price rub">65 990</div>
                                                    <div className="hover-item-product__stock">в наличии</div>
                                                    <div className="hover-item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="items-products__column">
                                        <div className="item-product">
                                            <div className="item-product__labels">
                                                <div className="item-product__label">Товар Дня</div>
                                            </div>
                                            <a href="#" className="item-product__image">
                                                <img src="img/main/catalog/01.jpg" alt="" />
                                            </a>
                                            <div className="item-product__body">
                                                <a href="" className="item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="item-product__footer">
                                                    <div className="item-product__old-price rub">65 990</div>
                                                    <a href="#" className="item-product__add"></a>
                                                    <div className="item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                            <div className="item-product__hover hover-item-product">
                                                <a href="" className="hover-item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="hover-item-product__options options-item-product">
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Тип беговой дорожки:</div>
                                                        <div className="options-item-product__value">Электрическая</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">
                                                            Скорость движения (км/ч):
                                                        </div>
                                                        <div className="options-item-product__value">22</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Складывание:</div>
                                                        <div className="options-item-product__value">Есть</div>
                                                    </div>
                                                </div>
                                                <a href="" className="hover-item-product__cart"></a>
                                                <div className="hover-item-product__footer">
                                                    <div className="hover-item-product__old-price rub">65 990</div>
                                                    <div className="hover-item-product__stock">в наличии</div>
                                                    <div className="hover-item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="items-products__column">
                                        <div className="item-product">
                                            <div className="item-product__labels"></div>
                                            <a href="#" className="item-product__image">
                                                <img src="img/main/catalog/02.jpg" alt="" />
                                            </a>
                                            <div className="item-product__body">
                                                <a href="" className="item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="item-product__footer">
                                                    <div className="item-product__old-price rub">65 990</div>
                                                    <a href="#" className="item-product__add"></a>
                                                    <div className="item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                            <div className="item-product__hover hover-item-product">
                                                <a href="" className="hover-item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="hover-item-product__options options-item-product">
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Тип беговой дорожки:</div>
                                                        <div className="options-item-product__value">Электрическая</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">
                                                            Скорость движения (км/ч):
                                                        </div>
                                                        <div className="options-item-product__value">22</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Складывание:</div>
                                                        <div className="options-item-product__value">Есть</div>
                                                    </div>
                                                </div>
                                                <a href="" className="hover-item-product__cart"></a>
                                                <div className="hover-item-product__footer">
                                                    <div className="hover-item-product__old-price rub">65 990</div>
                                                    <div className="hover-item-product__stock">в наличии</div>
                                                    <div className="hover-item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="items-products__column">
                                        <div className="item-product">
                                            <div className="item-product__labels">
                                                <div className="item-product__label">Товар Дня</div>
                                            </div>
                                            <a href="#" className="item-product__image">
                                                <img src="img/main/catalog/01.jpg" alt="" />
                                            </a>
                                            <div className="item-product__body">
                                                <a href="" className="item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="item-product__footer">
                                                    <div className="item-product__old-price rub">65 990</div>
                                                    <a href="#" className="item-product__add"></a>
                                                    <div className="item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                            <div className="item-product__hover hover-item-product">
                                                <a href="" className="hover-item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="hover-item-product__options options-item-product">
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Тип беговой дорожки:</div>
                                                        <div className="options-item-product__value">Электрическая</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">
                                                            Скорость движения (км/ч):
                                                        </div>
                                                        <div className="options-item-product__value">22</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Складывание:</div>
                                                        <div className="options-item-product__value">Есть</div>
                                                    </div>
                                                </div>
                                                <a href="" className="hover-item-product__cart"></a>
                                                <div className="hover-item-product__footer">
                                                    <div className="hover-item-product__old-price rub">65 990</div>
                                                    <div className="hover-item-product__stock">в наличии</div>
                                                    <div className="hover-item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="items-products__column">
                                        <div className="item-product">
                                            <div className="item-product__labels">
                                                <div className="item-product__label">Товар Дня</div>
                                            </div>
                                            <a href="#" className="item-product__image">
                                                <img src="img/main/catalog/01.jpg" alt="" />
                                            </a>
                                            <div className="item-product__body">
                                                <a href="" className="item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="item-product__footer">
                                                    <div className="item-product__old-price rub">65 990</div>
                                                    <a href="#" className="item-product__add"></a>
                                                    <div className="item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                            <div className="item-product__hover hover-item-product">
                                                <a href="" className="hover-item-product__title">
                                                    <span>BH Fitness F1 G6414V</span>
                                                    Беговая дорожка
                                                </a>
                                                <div className="hover-item-product__options options-item-product">
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Тип беговой дорожки:</div>
                                                        <div className="options-item-product__value">Электрическая</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">
                                                            Скорость движения (км/ч):
                                                        </div>
                                                        <div className="options-item-product__value">22</div>
                                                    </div>
                                                    <div className="options-item-product__item">
                                                        <div className="options-item-product__label">Складывание:</div>
                                                        <div className="options-item-product__value">Есть</div>
                                                    </div>
                                                </div>
                                                <a href="" className="hover-item-product__cart"></a>
                                                <div className="hover-item-product__footer">
                                                    <div className="hover-item-product__old-price rub">65 990</div>
                                                    <div className="hover-item-product__stock">в наличии</div>
                                                    <div className="hover-item-product__price rub">64 990</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page__info"></div>
                </div> */}
            {/* <div className="page__brands brands-slider">
                <div className="brands-slider__container _container">
                    <div className="brands-slider__body _swiper">
                        <div className="brands-slider__slide">
                            <img src="img/main/partners/04.png" alt="" />
                        </div>
                        <div className="brands-slider__slide">
                            <img src="img/main/partners/01.png" alt="" />
                        </div>
                        <div className="brands-slider__slide">
                            <img src="img/main/partners/02.png" alt="" />
                        </div>
                        <div className="brands-slider__slide">
                            <img src="img/main/partners/03.png" alt="" />
                        </div>
                        <div className="brands-slider__slide">
                            <img src="img/main/partners/05.png" alt="" />
                        </div>
                        <div className="brands-slider__slide">
                            <img src="img/main/partners/02.png" alt="" />
                        </div>
                        <div className="brands-slider__slide">
                            <img src="img/main/partners/03.png" alt="" />
                        </div>
                        <div className="brands-slider__slide">
                            <img src="img/main/partners/05.png" alt="" />
                        </div>
                        <div className="brands-slider__slide">
                            <img src="img/main/partners/04.png" alt="" />
                        </div>
                        <div className="brands-slider__slide">
                            <img src="img/main/partners/01.png" alt="" />
                        </div>
                    </div>
                    <div className="brands-slider__arrows">
                        <div className="brands-slider__arrow brands-slider__arrow_prev _arrow _arrow_prev"></div>
                        <div className="brands-slider__arrow brands-slider__arrow_next _arrow _arrow_next"></div>
                    </div>
                </div>
            </div>
            <section className="page__text text-block">
                <div className="text-block__container _container">
                    <div className="text-block__body">
                        <h1 className="text-block__title">О компании</h1>
                        <div className="text-block__row">
                            <div className="text-block__column">
                                <p>
                                    Компания «CLEAR FIT» была организована для создания и реализации качественного и надежного
                                    спортивного оборудования для домашнего и легкого коммерческого использования. Дефицит
                                    качественных тренажеров в среднем ценовом сегменте повлек за собой не мотивированный рост цен
                                    на надежное оборудование, создав дополнительный сегмент &quot;полукоммерческих&quot;
                                    тренажеров, что приблизило их стоимость к профессиональному оборудованию. А заполнение
                                    среднего ценового сегмента сложилось из роста количества брендов и производителей недорогих
                                    тренажеров с невысокими техническими характеристиками, за счет увеличения количества
                                    дополнительных опций. Главными критериями для выпуска продукции с маркой «CLEAR FIT» являются:
                                    высокое качество, разумная цена и комфорт тренировок. Осуществить эту непростую задачу
                                    позволил тандем европейских разработок и размещение основного производства на Тайване. Узкая
                                    специализация на кардио-тренажеры для дома позволяет поддерживать высокий контроль качества на
                                    всех ступенях производства.
                                </p>

                                <p>
                                    Разумный показатель «цена/качество» среди предлагаемых разными компаниями спортивных
                                    тренажеров в последние годы – довольно редкое явление. Мы достаточно кропотливо потрудились
                                    над тренажерами CLEAR FIT, чтобы продемонстрировать новый подход к выпуску доступной, красивой
                                    и надежной продукции. Современные технологии обеспечивают комфорт и легкость управления
                                    тренажерами CLEAR FIT.Многочисленные отзывы от наших покупателей поступили и продолжают
                                    поступать feedbacks от конечных потребителей. И теперь мы с гордостью можем заявить, что учли
                                    многие Ваши пожелания предложения в обновленных версиях тренажеров CLEAR FIT. Мы рады
                                    представить Вам новое поколение наших тренажеров. Теперь оборудование стало не только «умнее»,
                                    удобнее, комфортнее, но и сохранило прежние показатели цены, оставаясь доступным спортивным
                                    оборудованием для тех, кто ценит качество.
                                </p>
                            </div>
                            <div className="text-block__column">
                                <h2 className="text-block__label">Концепция CLEAR FIT строится на следующих тезисах:</h2>
                                <ul className="text-block__list">
                                    <li>
                                        Спортивное оборудование для дома не отличается по эффективности и безопасности от
                                        профессионального оборудования - от пользователя не требуется специальная подготовка и
                                        первичные навыки, наличие индивидуального профессионального тренера, соответственно
                                        требует более тщательного контроля.
                                    </li>
                                    <li>
                                        Тренажеры CLEAR FIT просты в управлении, легко адаптируются под индивидуальные особенности
                                        пользователя, эффективны и безопасны, рассчитаны на самостоятельные тренировки. Основное
                                        требование к тренажерам под маркой «CLEAR FIT» высокое качество по разумной стоимости -
                                        сохранить это равновесие основная задача профессионалов из всех областей производства
                                        CLEAR FIT.
                                    </li>
                                    <li>
                                        Мир не стоит на месте - каждое поколение оборудования соответствует современным
                                        технологиям. Продукция CLEAR FIT производится с учетом новейших разработок по современной
                                        технологии, совершенствуя и улучшая популярные серии оборудования и создавая принципиально
                                        новые актуальные модели.
                                    </li>
                                    <li>
                                        Прежде всего оборудование CLEAR FIT ориентировано на конечного пользователя - компания
                                        открыта для диалога, мы рады всем вашим отзывам и замечаниям, это основной фактор создания
                                        комфортной и удобной продукции.
                                    </li>
                                    <li>
                                        Качественный продукт не мыслим без качественного <br />
                                        сервисного обслуживания - официальный сервисный <br />
                                        центр CLEAR FIT обеспечивает техническую поддержку <br />
                                        в течение всего времени эксплуатации тренажера, <br />
                                        качественные услуги сервисного обслуживания <br />
                                        как в течение гарантийного срока, так и в <br />
                                        постгарантийный период. <br />
                                    </li>
                                </ul>
                                <div className="text-block__image">
                                    <img src="img/main/about/01.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="page__info-menu info-menu">
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
