import React from "react";
import { images } from "../../constants";

const SliderArrows = ({ className, info }) => {
    return (
        <div className={`${className || ""} slider-controll`}>
            <button type="button" className="slider-controll__arrow slider-controll__arrow_prev">
                <img src={images.icons.arrow_sl} alt="" />
            </button>
            {info && <div className="slider-controll__info"></div>}
            <button type="button" className="slider-controll__arrow slider-controll__arrow_next">
                <img src={images.icons.arrow_sl} alt="" />
            </button>
        </div>
    );
};

export default SliderArrows;
