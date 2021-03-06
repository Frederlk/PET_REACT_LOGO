import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { data, images } from "../../constants";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const MainSlider = () => {
    const slides = data.homeMainSlides.map(({ title, img, text, price, buttonText, buttonLink }, i) => (
        <SwiperSlide className="mainslider__slide  slide-mainslider" key={title + i}>
            <div className="slide-mainslider__image-ibg">
                <img src={img} alt={title} />
            </div>
            <div className="slide-mainslider__content">
                {title && <div className="slide-mainslider__title">{parse(title)}</div>}
                {text && <div className="slide-mainslider__text text-mainslider">{parse(text)}</div>}
                {buttonLink && price && (
                    <div className="slide-mainslider__footer">
                        <div className="slide-mainslider__price">{parse(price)}</div>
                        <Link to={buttonLink} className="slide-mainslider__button">
                            <span>{buttonText}</span> <img src={images.icons.arrow} alt="Стрелка" />
                        </Link>
                    </div>
                )}
            </div>
        </SwiperSlide>
    ));

    return (
        <div className="page__slider mainslider">
            <Swiper
                className="mainslider__body"
                modules={[Pagination, EffectFade, Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    el: ".mainslider__dotts",
                    clickable: true,
                }}
                effect="fade"
                loop
                speed={1000}
                observer={true}
                observeParents={true}
                onSwiper={() => {
                    let mainsliderDotts = document.querySelectorAll(".mainslider__dotts .swiper-pagination-bullet");
                    data.homeMainSlides.forEach(({ img }, i) => {
                        mainsliderDotts[i].style.backgroundImage = "url('" + img + "')";
                    });
                }}>
                {slides}
            </Swiper>
            <div className="mainslider__dotts"></div>
        </div>
    );
};

export default MainSlider;
