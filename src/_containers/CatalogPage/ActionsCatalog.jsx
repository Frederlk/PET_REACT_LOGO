import React from "react";
import { images } from "../../constants";
import { CustomSelect } from "../../_components";

export default React.memo(function ActionsCatalog({ passedState, setPassedState, viewType, setViewType }) {
    return (
        <div className="catalog__actions actions-catalog">
            <div className="actions-catalog__order">
                <div className="actions-catalog__label">Сортировать по:</div>
                <CustomSelect
                    passedState={passedState}
                    setPassedState={setPassedState}
                    name="sort"
                    className="actions-catalog__select">
                    <option value="default">По умолчанию</option>
                    <option value="name">По названию</option>
                    <option value="price">По цене</option>
                </CustomSelect>
            </div>
            <div className="actions-catalog__view">
                <button
                    type="button"
                    onClick={() => setViewType("grid")}
                    className={`actions-catalog__item ${viewType === "grid" ? "_active" : ""}`}>
                    <img src={images.icons.items_grid} alt="Отображение сеткой" />
                </button>
                <button
                    type="button"
                    onClick={() => setViewType("list")}
                    className={`actions-catalog__item ${viewType === "list" ? "_active" : ""}`}>
                    <img src={images.icons.items_list} alt="Отображение списком" />
                </button>
            </div>
        </div>
    );
});
