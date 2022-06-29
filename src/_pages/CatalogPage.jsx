import React from "react";
import Helmet from "react-helmet";
import { Breadcrumbs, HelpInfo, SearchBar } from "../_components";
import { Catalog, Side } from "../_containers";

const CatalogPage = () => {
    return (
        <>
            <Helmet>
                <meta name="Каталог" content="Каталог" />
                <title>Каталог</title>
            </Helmet>

            <div className="page__container">
                <div className="page__body">
                    <Side catalog />
                    <div className="page__content">
                        <SearchBar />
                        <Breadcrumbs />
                        <Catalog />
                        <div className="page__info"></div>
                    </div>
                </div>
            </div>
            <HelpInfo />
        </>
    );
};

export default CatalogPage;
