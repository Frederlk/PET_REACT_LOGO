import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { images, routes } from "../constants";

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs(routes);

    return (
        <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
                {breadcrumbs.map(({ match, breadcrumb }, i) => {
                    if (i == breadcrumbs.length - 1) {
                        return (
                            <li key={match.pathname} className="breadcrumbs__item">
                                <span className="breadcrumbs__link">{breadcrumb}</span>
                            </li>
                        );
                    } else {
                        return (
                            <li key={match.pathname} className="breadcrumbs__item">
                                <Link to={match.pathname} className="breadcrumbs__link">
                                    {breadcrumb}
                                </Link>
                                <span>
                                    <img src={images.icons.arrow_spoller} alt="Стрелка" />
                                </span>
                            </li>
                        );
                    }
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
