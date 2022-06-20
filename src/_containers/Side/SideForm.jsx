import React, { useEffect, useState } from "react";
import { images, catalogFilter } from "../../constants";
import { Formik, Form as FormikForm, Field } from "formik";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import { _slideToggle } from "../../js/files/functions";
import { useMemo } from "react";

const PriceFilter = ({ min, max, setPriceArr }) => {
    const [rangeMin, setRangeMin] = useState(min);
    const [rangeMax, setRangeMax] = useState(max);
    const [rangeValue, setRangeValue] = useState([rangeMin, rangeMax]);

    useEffect(() => {
        setRangeValue([rangeMin, rangeMax]);
    }, [rangeMin, rangeMax]);

    useEffect(() => {
        setPriceArr(rangeValue);
    }, [rangeValue]);

    return (
        <div className="price-filter">
            <Slider
                allowCross={false}
                range
                min={min}
                max={max}
                defaultValue={[min, max]}
                value={rangeValue}
                onChange={setRangeValue}
            />
            <div className="price-filter__values values-price-filter">
                <div className="values-price-filter__column">
                    <div className="values-price-filter__label">от</div>
                    <div className="values-price-filter__input">
                        <input
                            autoComplete="off"
                            value={rangeValue[0]}
                            onChange={(e) => setRangeMin(e.target.value)}
                            name="from"
                            className="input"
                        />
                    </div>
                </div>
                <div className="values-price-filter__column">
                    <div className="values-price-filter__label">до</div>
                    <div className="values-price-filter__input">
                        <input
                            autoComplete="off"
                            value={rangeValue[1]}
                            onChange={(e) => setRangeMax(e.target.value)}
                            name="to"
                            className="input"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const SideForm = () => {
    const [compareList, setCompareList] = useState([]);
    const { manufacturer, angle, power, speed, weight, size, compare } = catalogFilter;
    const [priceArr, setPriceArr] = useState([]);

    const [menuOpen, setMenuOpen] = useState(true);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setCompareList(compare);
    }, [compare]);

    const FilterItem = ({ title, data, name }) => {
        return (
            <div className="filter__section section-filter ">
                <h5 data-spoller className="section-filter__title">
                    {title}:
                    <span className="section-filter__arrow">
                        <img src={images.icons.arrow_spoller} alt="Стрелка" />
                    </span>
                </h5>
                <div hidden className="section-filter__body">
                    {data.map((item, i) => {
                        return (
                            <label key={item + i} className="section-filter__checkbox">
                                <Field type="checkbox" name={name} value={item} className="checkbox__input" />
                                <span className="checkbox__text">{item}</span>
                            </label>
                        );
                    })}
                </div>
            </div>
        );
    };

    const onHandleCick = () => {
        if (window.innerWidth < 991.98) {
            setDisabled(true);
            setMenuOpen(!menuOpen);
            setTimeout(() => {
                setDisabled(false);
            }, 500);

            _slideToggle(document.querySelector(".filter__content"));
        }
    };

    const onHandleRemove = (id) => {
        setCompareList(compareList.filter((item) => item.id !== id));
    };

    const generateFilters = useMemo(() => {
        return (
            <>
                {manufacturer.length ? <FilterItem data={manufacturer} name="manufacturer" title="Производитель" /> : null}
                {power.length ? <FilterItem data={power} name="power" title="Мощность двигателя" /> : null}
                {size.length ? <FilterItem data={size} name="size" title="Размер бегового полотна" /> : null}
                {weight.length ? <FilterItem data={weight} name="weight" title="Вес пользователя (макс.)" /> : null}
                {speed.length ? <FilterItem data={speed} name="speed" title="Скорость (макс.)" /> : null}
                {angle.length ? <FilterItem data={angle} name="angle" title="Угол наклона" /> : null}
            </>
        );
    }, []);

    return (
        <Formik
            initialValues={{
                price: [],
                compare: [],
                manufacturer: "",
                power: "",
                size: "",
                weight: "",
                speed: "",
                angle: "",
                from: "",
                to: "",
            }}
            onSubmit={(values) => {
                values.price = priceArr;
                values.compare = compareList;
                values = {
                    ...values,
                };
                console.log(JSON.stringify(values, null, 2));
            }}>
            <FormikForm className="filter">
                <h2 disabled={disabled} onClick={(e) => onHandleCick(e)} className="filter__title">
                    Фильтр Товаров
                </h2>
                <div hidden={window.innerWidth < 991.98 && true} className="filter__content">
                    <div className="filter__body" data-spollers="">
                        <div className="filter__section section-filter">
                            <div className="section-filter__title">Цена (руб.):</div>
                            <div className="section-filter__body">
                                <PriceFilter min={0} max={200000} setPriceArr={setPriceArr} />
                            </div>
                        </div>
                        {compareList.length ? (
                            <div className="filter__section section-filter">
                                <h4 className="section-filter__title">Товары для сравнения</h4>
                                <div className="section-filter__body">
                                    <div className="compare-filter">
                                        <div className="compare-filter__items">
                                            {compareList.map(({ title, link, id }, i) => (
                                                <div key={title + link + i} className="compare-filter__item">
                                                    <Link to={link} className="compare-filter__link">
                                                        {title}
                                                    </Link>
                                                    <button
                                                        onClick={() => {
                                                            onHandleRemove(id);
                                                        }}
                                                        type="button"
                                                        className="compare-filter__remove">
                                                        <img src={images.icons.remove} alt="Убрать" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="compare-filter__footer">
                                            <Link to="/compare" className="compare-filter__button">
                                                <img src={images.icons.compare_1} alt="Сравнить" />
                                                <span>Сравнить</span>
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() => setCompareList([])}
                                                className="compare-filter__clean">
                                                <img src={images.icons.trash} alt="Очистить список" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                        {generateFilters}
                    </div>
                    <div className="filter__footer">
                        <button type="submit" className="filter__btn btn">
                            Подобрать
                        </button>
                        <button type="reset" className="filter__btn btn btn_grey">
                            Сбросить
                        </button>
                    </div>
                </div>
            </FormikForm>
        </Formik>
    );
};

export default SideForm;
