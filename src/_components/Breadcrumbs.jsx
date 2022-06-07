import React from "react";

const Breadcrumbs = () => {
    return (
        <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
                <li>
                    <a href="" className="breadcrumbs__link">
                        Главная
                    </a>
                </li>
                <li>
                    <span className="breadcrumbs__item">Каталог товара</span>
                </li>
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
