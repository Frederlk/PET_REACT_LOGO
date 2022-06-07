import React from "react";

const SideForm = () => {
    return (
        <form action="#" className="filter">
            <div className="filter__title">Фильтр Товаров</div>
            {/* <div className="filter__content">
                <div className="filter__body _spollers">
                    <div className="filter__section section-filter">
                        <div className="section-filter__title">Цена (руб.):</div>
                        <div className="section-filter__body">
                            <div className="price-filter">
                                <div className=" price-filter__slider" id="slider-start"></div>
                                <div className="price-filter__values values-price-filter">
                                    <div className="values-price-filter__column">
                                        <div className="values-price-filter__label">от</div>
                                        <div className="values-price-filter__input">
                                            <input
                                                id="price-start"
                                                autoComplite="off"
                                                type="text"
                                                name="form[]"
                                                className="input"
                                            />
                                        </div>
                                    </div>
                                    <div className="values-price-filter__column">
                                        <div className="values-price-filter__label">до</div>
                                        <div className="values-price-filter__input">
                                            <input
                                                id="price-end"
                                                autoComplite="off"
                                                type="text"
                                                name="form[]"
                                                className="input"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter__section section-filter">
                        <div className="section-filter__title">Товары для сравнения</div>
                        <div className="section-filter__body">
                            <div className="compare-filter">
                                <div className="compare-filter__items">
                                    <div className="compare-filter__item">
                                        <a href="#" className="compare-filter__link">
                                            NordicTrack C100
                                        </a>
                                        <a href="#" className="compare-filter__remove"></a>
                                    </div>
                                    <div className="compare-filter__item">
                                        <a href="#" className="compare-filter__link">
                                            Clear Fit Luxury LT.20
                                        </a>
                                        <a href="#" className="compare-filter__remove"></a>
                                    </div>
                                    <div className="compare-filter__item">
                                        <a href="#" className="compare-filter__link">
                                            Ammity ATM 720 TFT+
                                        </a>
                                        <a href="#" className="compare-filter__remove"></a>
                                    </div>
                                </div>
                                <div className="compare-filter__footer">
                                    <a href="#" className="compare-filter__button">
                                        <span>Сравнить</span>
                                    </a>
                                    <a href="#" className="compare-filter__clean"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter__section section-filter ">
                        <div className="section-filter__title _spoller">Производитель:</div>
                        <div className="section-filter__body">
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>Сlear-fit</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>Diadora</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>Hasttings</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>Carbon-fitness</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>Nordic Track</span>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="filter__section section-filter ">
                        <div className="section-filter__title _spoller">Мощность двигателя:</div>
                        <div className="section-filter__body">
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>12</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>14</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>16</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>18</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>20</span>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="filter__section section-filter ">
                        <div className="section-filter__title _spoller">Размер бегового полотна:</div>
                        <div className="section-filter__body">
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>12</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>14</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>16</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>18</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>20</span>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="filter__section section-filter ">
                        <div className="section-filter__title _spoller">Вес пользователя (макс.):</div>
                        <div className="section-filter__body">
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>12</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>14</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>16</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>18</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>20</span>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="filter__section section-filter ">
                        <div className="section-filter__title _spoller">Скорость (макс.):</div>
                        <div className="section-filter__body">
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>12</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>14</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>16</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>18</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>20</span>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="filter__section section-filter ">
                        <div className="section-filter__title _spoller">Угол наклона :</div>
                        <div className="section-filter__body">
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>нет регулировки</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>механическая</span>
                                </span>
                            </label>
                            <label className="section-filter__checkbox checkbox">
                                <input data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
                                <span className="checkbox__text">
                                    <span>электронная</span>
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="filter__footer">
                    <button type="submit" className="filter__btn btn">
                        Подобрать
                    </button>
                    <button type="reset" className="filter__btn btn btn_grey">
                        Сбросить
                    </button>
                </div>
            </div> */}
        </form>
    );
};

export default SideForm;
