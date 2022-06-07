import React from "react";

const Pagination = () => {
    return (
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
    );
};

export default Pagination;
