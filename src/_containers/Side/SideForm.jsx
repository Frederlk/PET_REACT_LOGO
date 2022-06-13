import React, { useEffect, useState } from "react";
import { images, catalogFilter } from "../../constants";
import { Formik, Form as FormikForm, useField, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import useDebounce from "../../hooks/useDebounce";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const FormInput = ({ changeFunc, label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            {label ? <div className="values-price-filter__label">{label}</div> : null}
            <div className="values-price-filter__input">
                <input onChange={changeFunc} {...props} {...field} className="input" />
            </div>
        </>
    );
};

const SideForm = () => {
    const [compareList, setCompareList] = useState([]);
    const { manufacturer, angle, power, speed, weight, size, compare } = catalogFilter;
    const [rangeValue, setRangeValue] = useState([0, 200000]);
    const debouncedCallback = useDebounce(setRangeValue, 100);

    useEffect(() => {
        setCompareList(compare);
    }, []);

    const FilterItem = ({ title, data, name }) => {
        return (
            <div className="filter__section section-filter ">
                <h5 data-spoller className="section-filter__title">
                    {title}:
                    <span>
                        <img src={images.icons.arrow_spoller} alt="Стрелка" />
                    </span>
                </h5>
                <div className="section-filter__body">
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

    console.log(rangeValue);

    const handleChange = (e) => {
        console.log(e);
    };

    return (
        <Formik
            initialValues={{
                price: "",
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
            onSubmit={(values, { resetForm }) => {
                values = {
                    ...values,
                };
                resetForm();
                console.log(JSON.stringify(values, null, 2));
            }}>
            <FormikForm
                className="filter"
                // onChange={(e) => {
                //     const target = e.target;
                //     if (target.getAttribute("name") === "from") {
                //         console.log(rangeValue[0]);
                //         // setRangeValue(rangeValue.splice(0, 1, +target.value));
                //     } else if (target.getAttribute("name") === "to") {
                //         console.log("до");
                //     }
                // }}
            >
                <h2 className="filter__title">Фильтр Товаров</h2>
                <div className="filter__content">
                    <div className="filter__body" data-spollers="">
                        <div className="filter__section section-filter">
                            <div className="section-filter__title">Цена (руб.):</div>
                            <div className="section-filter__body">
                                <div className="price-filter">
                                    <Slider
                                        allowCross={false}
                                        tip
                                        range
                                        min={0}
                                        max={200000}
                                        defaultValue={rangeValue}
                                        onChange={debouncedCallback}
                                    />
                                    <div className="price-filter__values values-price-filter">
                                        <div className="values-price-filter__column">
                                            <div className="values-price-filter__label">от</div>
                                            <div className="values-price-filter__input">
                                                <Field autoComplete="off" name="from" className="input" />
                                            </div>
                                        </div>
                                        <div className="values-price-filter__column">
                                            <div className="values-price-filter__label">до</div>
                                            <div className="values-price-filter__input">
                                                <Field autoComplete="off" name="to" className="input" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {compareList.length ? (
                            <div className="filter__section section-filter">
                                <h4 className="section-filter__title">Товары для сравнения</h4>
                                <div className="section-filter__body">
                                    <div className="compare-filter">
                                        <div className="compare-filter__items">
                                            {compareList.map(({ title, link }, i) => (
                                                <div key={title + link + i} className="compare-filter__item">
                                                    <Link to={link} className="compare-filter__link">
                                                        {title}
                                                    </Link>
                                                    <button type="button" className="compare-filter__remove"></button>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="compare-filter__footer">
                                            <Link to="/compare" className="compare-filter__button">
                                                <span>Сравнить</span>
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() => setCompareList([])}
                                                className="compare-filter__clean"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                        {manufacturer.length ? (
                            <FilterItem data={manufacturer} name="manufacturer" title="Производитель" />
                        ) : null}
                        {power.length ? <FilterItem data={power} name="power" title="Мощность двигателя" /> : null}
                        {size.length ? <FilterItem data={size} name="size" title="Размер бегового полотна" /> : null}
                        {weight.length ? <FilterItem data={weight} name="weight" title="Вес пользователя (макс.)" /> : null}
                        {speed.length ? <FilterItem data={speed} name="speed" title="Скорость (макс.)" /> : null}
                        {angle.length ? <FilterItem data={angle} name="angle" title="Угол наклона" /> : null}
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
