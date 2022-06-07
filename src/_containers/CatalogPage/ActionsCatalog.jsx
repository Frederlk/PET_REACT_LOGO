import React, { useState } from "react";
import { images } from "../../constants";

const ActionsCatalog = () => {
    const [sortType, setSortType] = useState("default");

    return (
        <div className="catalog__actions actions-catalog">
            <div className="actions-catalog__order">
                <div className="actions-catalog__label">Сортировать по:</div>
                <div className="actions-catalog__select">
                    <select name="sort" onChange={(e) => setSortType(e.target.value)}>
                        <option value="default" defaultValue>
                            По умолчанию
                        </option>
                        <option value="price">По цене</option>
                        <option value="name">По названию</option>
                    </select>
                </div>
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
