import React from "react";
import { Helmet } from "react-helmet";
import { Breadcrumbs, HelpInfo, ProductItemPage, SearchBar } from "../_components";
import { Side } from "../_containers";

const ProductPage = () => {
    return (
        <>
            <Helmet>
                <meta name="Товар" content="Товар" />
                <title>Товар</title>
            </Helmet>

            <div className="page__container">
                <div className="page__body">
                    <Side />
                    <div className="page__content">
                        <SearchBar />
                        <Breadcrumbs />
                        <ProductItemPage />
                        <div className="page__info"></div>
                    </div>
                </div>
            </div>
            <HelpInfo />
        </>
    );
};

export default ProductPage;
