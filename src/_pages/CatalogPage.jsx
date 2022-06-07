import React from "react";
import Helmet from "react-helmet";
import { Breadcrumbs, HelpInfo, SearchBar } from "../_components";
import { Side } from "../_containers";

const CatalogPage = () => {
    return (
        <>
            <Helmet>
                <meta name="Каталог" content="Каталог" />
                <title>Каталог</title>
            </Helmet>

            <div className="page__container">
                <div className="page__body">
                    <Side catalog />
                    <div className="page__content">
                        <SearchBar />

                        <Breadcrumbs />

                        {/*  <div className="catalog">
                            <h1 className="catalog__title">Каталог</h1>
                            <div className="catalog__actions actions-catalog">
                                <div className="actions-catalog__order order-catalog">
                                    <div className="order-catalog__label">Сортировать по:</div>
                                    <div className="order-catalog__select">
                                        <select name="form[]" className="form">
                                            <option value="1" selected="selected">
                                                По умолчанию
                                            </option>
                                            <option value="2">По цена</option>
                                            <option value="3">По названию</option>
                                            <option value="4">По дате</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="actions-catalog__view view-catalog">
                                    <div className="view-catalog__item_grid view-catalog__item"></div>
                                    <div className="view-catalog__item_list view-catalog__item"></div>
                                </div>
                            </div>
                            <div className="catalog__navi navi-catalog navi-catalog_top">
                                <div className="navi-catalog__show show-catalog">
                                    <div className="show-catalog__label">На странице:</div>
                                    <div className="show-catalog__select">
                                        <select name="form[]" className="_show">
                                            <option value="1" selected="selected">
                                                9
                                            </option>
                                            <option value="2">1</option>
                                            <option value="3">5</option>
                                            <option value="4">6</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="navi-catalog__pages"></div>
                            </div>
                            <div className="catalog__products items-products">
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
                                                    <div className="options-item-product__label">Скорость движения (км/ч):</div>
                                                    <div className="options-item-product__value">22</div>
                                                </div>
                                                <div className="options-item-product__item">
                                                    <div className="options-item-product__label">Складывание:</div>
                                                    <div className="options-item-product__value">Есть</div>
                                                </div>
                                                <a href className="hover-item-product__compare">
                                                    <span>Сравнить</span>
                                                </a>
                                            </div>
                                            <div className="hover-item-product__footer">
                                                <a
                                                    href=""
                                                    className="hover-item-product__cart hover-item-product__cart_catalog"></a>
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
                                                    <div className="options-item-product__label">Скорость движения (км/ч):</div>
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
                                                    <div className="options-item-product__label">Скорость движения (км/ч):</div>
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
                                                    <div className="options-item-product__label">Скорость движения (км/ч):</div>
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
                                                    <div className="options-item-product__label">Скорость движения (км/ч):</div>
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
                                                    <div className="options-item-product__label">Скорость движения (км/ч):</div>
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
                                                    <div className="options-item-product__label">Скорость движения (км/ч):</div>
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
                                                    <div className="options-item-product__label">Скорость движения (км/ч):</div>
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
                                                    <div className="options-item-product__label">Скорость движения (км/ч):</div>
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
                            <div className="catalog__navi navi-catalog navi-catalog_bottom">
                                <div className="navi-catalog__show show-catalog">
                                    <div className="show-catalog__label">На странице:</div>
                                    <div className="show-catalog__select">
                                        <select name="form[]" className="_show">
                                            <option value="1" selected="selected">
                                                9
                                            </option>
                                            <option value="2">1</option>
                                            <option value="3">5</option>
                                            <option value="4">6</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="navi-catalog__pages"></div>
                            </div>
                        </div> */}

                        <div className="page__info"></div>
                    </div>
                </div>
            </div>
            <HelpInfo />
        </>
    );
};

export default CatalogPage;
