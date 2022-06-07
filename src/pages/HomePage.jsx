import React from "react";
import { SearchBar } from "../_components";
import { BrandsSlider, HelpInfo, HomeMainSlider, HomeText, ProductSlider, Side } from "../_containers";

const HomePage = () => {
    return (
        <>
            <div className="page__container">
                <div className="page__body">
                    <Side />
                    <div className="page__content">
                        <SearchBar />
                        <HomeMainSlider />
                        <ProductSlider />
                        <div className="page__info"></div>
                    </div>
                </div>
            </div>
            <BrandsSlider />
            <HomeText />
            <HelpInfo />
        </>
    );
};

export default HomePage;
