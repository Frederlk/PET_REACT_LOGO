import React from "react";
import { Helmet } from "react-helmet";
import { Breadcrumbs, HelpInfo, SearchBar } from "../_components";
import { Form, Side } from "../_containers";

const CartPage = ({ passedState, setPassedState }) => {
    return (
        <>
            <Helmet>
                <meta name="Оформление заказа" content="Оформление заказа" />
                <title>Оформление заказа</title>
            </Helmet>

            <div className="page__container">
                <div className="page__body">
                    <Side />
                    <div className="page__content">
                        <SearchBar />
                        <Breadcrumbs />
                        <Form passedState={passedState} setPassedState={setPassedState} />
                        <div className="page__info"></div>
                    </div>
                </div>
            </div>
            <HelpInfo />
        </>
    );
};

export default CartPage;
