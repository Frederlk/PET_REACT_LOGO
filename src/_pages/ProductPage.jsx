import React from "react";
import { Helmet } from "react-helmet";
import { context } from "../constants";
import { Breadcrumbs, HelpInfo, ProductItemPage, SearchBar } from "../_components";
import { Side } from "../_containers";

const ProductPage = ({ compare }) => {
    const { CartListContext } = context;

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
                        <CartListContext.Consumer>
                            {(context) => <ProductItemPage context={context} compare={compare} />}
                        </CartListContext.Consumer>
                        <div className="page__info"></div>
                    </div>
                </div>
            </div>
            <HelpInfo />
        </>
    );
};

export default ProductPage;
