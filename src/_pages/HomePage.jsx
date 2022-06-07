import React from "react";
import Helmet from "react-helmet";
import { HelpInfo, SearchBar } from "../_components";
import { BrandsSlider, MainSlider, AboutText, ProductSlider, Side } from "../_containers";

const HomePage = () => {
    return (
        <>
            <Helmet>
                <meta name="Logo - спортивный магазин" content="Logo - спортивный магазин" />
                <title>Logo - спортивный магазин</title>
            </Helmet>

            <div className="page__container">
                <div className="page__body">
                    <Side />
                    <div className="page__content">
                        <SearchBar />
                        <MainSlider />
                        <ProductSlider />
                        <div className="page__info"></div>
                    </div>
                </div>
            </div>
            <BrandsSlider />
            <AboutText />
            <HelpInfo />
        </>
    );
};

export default HomePage;
