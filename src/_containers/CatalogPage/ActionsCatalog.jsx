import React, { useState } from "react";
import { images } from "../../constants";
import { CustomSelect } from "../../_components";

const ActionsCatalog = ({ viewType, setViewType }) => {
    const [sortType, setSortType] = useState("");

    return (
        <div className="catalog__actions actions-catalog">
            <div className="actions-catalog__order">
                <div className="actions-catalog__label">Сортировать по:</div>
                <CustomSelect sortType={sortType} setSortType={setSortType} name="sort" className="actions-catalog__select">
                    <option value="default">По умолчанию</option>
                    <option value="name">По названию</option>
                    <option value="price">По цене</option>
                    <option value="date">По дате</option>
                </CustomSelect>
            </div>
            <div className="actions-catalog__view">
                <button
                    type="button"
                    onClick={() => setViewType("list")}
                    className={`actions-catalog__item ${viewType === "list" ? "_active" : ""}`}>
                    <img src={images.icons.items_grid} alt="Отображение сеткой" />
                </button>
                <button
                    type="button"
                    onClick={() => setViewType("grid")}
                    className={`actions-catalog__item ${viewType === "grid" ? "_active" : ""}`}>
                    <img src={images.icons.items_list} alt="Отображение списком" />
                </button>
            </div>
        </div>
    );
};

export default ActionsCatalog;
