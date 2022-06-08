import React, { useEffect, useState } from "react";
import { images } from "../../constants";
import { CustomSelect } from "../../_components";
const ActionsCatalog = () => {
    const [sortType, setSortType] = useState("");

    const handleChange = (e) => {
        setSortType(e.target.value);
    };

    return (
        <div className="catalog__actions actions-catalog">
            <div className="actions-catalog__order">
                <div className="actions-catalog__label">Сортировать по:</div>
                <CustomSelect name="sort" className="actions-catalog__select">
                    <option value="default">По умолчанию</option>
                    <option value="name">По названию</option>
                    <option value="price">По цене</option>
                    <option value="date">По дате</option>
                </CustomSelect>
            </div>
            <div className="actions-catalog__view">
                <div className="actions-catalog__item">
                    <img src={images.icons.items_grid} alt="Отображение сеткой" />
                </div>
                <div className="actions-catalog__item">
                    <img src={images.icons.items_list} alt="Отображение списком" />
                </div>
            </div>
        </div>
    );
};

export default ActionsCatalog;
