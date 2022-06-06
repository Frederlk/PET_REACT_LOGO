import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper";
import { data } from "../../constants";
import { SliderArrows, ProductItem } from "../../_components";

const ProductSlider = () => {
    return (
        <div className="page__products products-slider">
            <div className="products-slider__header">
                <h2 className="products-slider__title">Популярные товары</h2>
                <SliderArrows info className={"products-slider__controll"} />
            </div>
            <Swiper
                className="products-slider__swiper"
                modules={[Navigation, Keyboard, Pagination]}
                speed={1000}
                observer={true}
                autoHeight={true}
                observeParents={true}
                pagination={{
                    el: ".products-slider__controll .slider-controll__info",
                    type: "fraction",
                }}
                keyboard
                spaceBetween={30}
                touchRatio={0}
                navigation={{
                    prevEl: ".products-slider__controll .slider-controll__arrow_prev",
                    nextEl: ".products-slider__controll .slider-controll__arrow_next",
                }}>
                <SwiperSlide className="products-slider__slide items-products">
                    {data.productsItems.map((data, i) => {
                        if (i > 5) return;
                        return <ProductItem key={i} data={data} />;
                    })}
                </SwiperSlide>
                <SwiperSlide className="products-slider__slide items-products">
                    {data.productsItems.map((data, i) => {
                        if (i < 5) return;
                        return <ProductItem key={i} data={data} />;
                    })}
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ProductSlider;
