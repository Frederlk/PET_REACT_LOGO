import React, { useState, useEffect } from "react";
import { images, data } from "../constants";
import { Formik, Form as FormikForm, useField, Field } from "formik";
import * as Yup from "yup";
import * as flsFunctions from "../js/files/functions";

const FormSearchItem = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={`searchbar__input ${props.className || ""} ${meta.touched && meta.error ? "_error" : ""}`}>
            <input {...props} {...field} className="input" />
            {meta.touched && meta.error ? <div className="searchbar__error">{meta.error}</div> : null}
        </div>
    );
};

const SearchBar = () => {
    let [activeCategories, setActiveCategories] = useState([]);
    const [categoriesMenu, setCategoriesMenu] = useState([]);

    useEffect(() => {
        flsFunctions.spollers();
    }, []);

    useEffect(() => {
        setCategoriesMenu(data.sideMenu.slice());
    }, [data.sideMenu]);

    const CategoriesList = ({ offset }) => {
        return (
            <div className="categories-search__column">
                <ul className="categories-search__list">
                    {categoriesMenu.slice(offset).map(({ title, link }, i) => {
                        if (i > 4) return;

                        const handleChange = (value) => {
                            if (!activeCategories.includes(value)) {
                                return setActiveCategories((activeCategories = [...activeCategories, link]));
                            } else {
                                setActiveCategories(
                                    (activeCategories = activeCategories.filter((i) => {
                                        return i != value;
                                    }))
                                );
                            }
                        };

                        return (
                            <li key={title + link + i} className="categories-search__checkbox checkbox">
                                <label className="checkbox__label">
                                    <Field
                                        type="checkbox"
                                        onClick={(e) => handleChange(e.target.value)}
                                        name="activeCategories"
                                        value={link}
                                        className="checkbox__input"
                                    />
                                    <span className="checkbox__text">{title}</span>
                                </label>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };

    const [sortType, setSortType] = useState("");

    const handleChange = (e) => {
        setSortType(e.target.value);
    };

    return (
        <Formik
            initialValues={{
                search: "",
                sort: "",
                form: "",
                activeCategories: [],
            }}
            validationSchema={Yup.object({
                search: Yup.string().min(2, "Минимум 2 символа").required("Обязательное поле!"),
            })}
            onSubmit={(values, { resetForm }) => {
                values = {
                    ...values,
                };
                resetForm();
                setActiveCategories((activeCategories = []));
                console.log(JSON.stringify(values, null, 2));
            }}>
            <FormikForm data-spollers="" className="page__search searchbar">
                <button data-spoller type="button" className="searchbar__title">
                    <span className="searchbar__icon">
                        <img src={images.icons.search} alt="Иконка поиска" />
                    </span>
                    <span className="searchbar__text">
                        {activeCategories.length === 0 ? "Везде" : `Выбрано: ${activeCategories.length}`}
                    </span>
                    <span className="searchbar__arrow">
                        <img src={images.icons.arrow_search} alt="Стрелка" />
                    </span>
                </button>
                <div className="searchbar__categories categories-search">
                    <div role="group" aria-labelledby="checkbox-group" className="categories-search__row">
                        <CategoriesList offset={0} />
                        <CategoriesList offset={5} />
                        <CategoriesList offset={10} />
                    </div>
                </div>
                <FormSearchItem autoComplete="off" type="text" name="search" />
                <button type="submit" className="searchbar__btn btn">
                    Найти
                </button>
            </FormikForm>
        </Formik>
    );
};

export default SearchBar;
