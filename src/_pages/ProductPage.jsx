import React from "react";
import { Breadcrumbs, HelpInfo, ProductItemPage, SearchBar } from "../_components";
import { Side } from "../_containers";

const ProductPage = () => {
    return (
        <>
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
