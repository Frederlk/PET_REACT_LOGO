import React, { useEffect, useState } from "react";
import { images, data } from "../../constants";
import { isMobile, _slideDown, _slideToggle, _slideUp, spollers } from "../../js/files/functions";
import { ProductItem } from "../../_components";
import dynamicAdaptive from "../../js/libs/dynamic_adapt";

import SideReviews from "./SideReviews";
import SideNews from "./SideNews";
import SideForm from "./SideForm";
import { Link } from "react-router-dom";

const SideMenuItem = ({ dataLi }) => {
    const [openedLi, setOpenedLi] = useState(false);
    const { submenu, link, title } = dataLi;

    return (
        <li
            onMouseEnter={!isMobile.any() && submenu ? () => setOpenedLi(true) : null}
            onMouseLeave={!isMobile.any() && submenu ? () => setOpenedLi(false) : null}
            className={`side-menu__item ${openedLi && submenu ? "_active" : ""}`}>
            <Link to={link} className="side-menu__link">
                {title}
            </Link>
            {submenu && (
                <>
                    <button data-spoller type="button" className="side-menu__arrow">
                        <img src={images.icons.arrow} alt="Стрелка" />
                    </button>
                    <div className="side-menu__submenu submenu-side">
                        <div className="submenu-side__body">
                            <ul className="submenu-side__menu">
                                {submenu.map(({ subtitle, sublink }, i) => (
                                    <li key={subtitle + sublink + i} className="submenu-side__item">
                                        <Link to={sublink} className="submenu-side__link">
                                            {subtitle}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="submenu-side__product">
                                <ProductItem data={data.productsItems[0]} />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </li>
    );
};

export default React.memo(function Side({ catalog }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const sideMenuItems = data.sideMenu.map((item, i) => <SideMenuItem key={item.title + i} dataLi={item} />);

    useEffect(() => {
        dynamicAdaptive();
        spollers();
    }, []);

    const onHandleCick = () => {
        setDisabled(true);
        setMenuOpen(!menuOpen);
        setTimeout(() => {
            setDisabled(false);
        }, 500);

        _slideToggle(document.querySelector(".side-menu__list"));
    };

    return (
        <aside className="page__side side">
            <nav className={`side__menu side-menu ${menuOpen ? "_side-menu-open" : ""}`}>
                <div className="side-menu__header">
                    <h2 className="side-menu__title">
                        <Link to="/catalog"> Каталог товаров</Link>
                    </h2>
                    <button disabled={disabled} onClick={(e) => onHandleCick(e)} type="button" className="side-menu__burger">
                        <div className="side-menu__lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
                <ul className="side-menu__list" hidden data-spollers="991.98,max">
                    {sideMenuItems}
                </ul>
                <div className="side__bg-ibg">
                    <img src={images.defaultImages.bg_side} alt="Задний Фон" />
                </div>
            </nav>
            {catalog ? (
                <SideForm />
            ) : (
                <div data-da=".page__info,991.98,last" className="side__bottom">
                    <SideNews />
                    <SideReviews />
                </div>
            )}
        </aside>
    );
});
