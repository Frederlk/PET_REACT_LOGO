import React from "react";
import { SliderArrows } from "../../_components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { data } from "../../constants";

const BrandsSlider = () => {
    const brandsSlides = data.brandsSlidesLogos.map(({ img, alt }, i) => (
        <SwiperSlide key={alt + i} className="brands-slider__slide">
            <img src={img} alt={alt} />
        </SwiperSlide>
    ));

    return (
        <div className="page__brands brands-slider">
            <div className="brands-slider__container">
                <Swiper
                    className="brands-slider__body"
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop
                    speed={1000}
                    observer={true}
                    slidesPerView={5}
                    observeParents={true}
                    navigation={{
                        prevEl: ".brands-slider__controll .slider-controll__arrow_prev",
                        nextEl: ".brands-slider__controll .slider-controll__arrow_next",
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        479.98: {
                            slidesPerView: 2,
                        },
                        767.98: {
                            slidesPerView: 3,
                        },
                        991.98: {
                            slidesPerView: 4,
                        },
                        1170: {
                            slidesPerView: 5,
                        },
                    }}>
                    {brandsSlides}
                </Swiper>
                <SliderArrows className="brands-slider__controll" />
            </div>
        </div>
    );
};

export default BrandsSlider;
