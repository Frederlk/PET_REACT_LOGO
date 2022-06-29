import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import { data, images } from "../../constants";
import { ProductItem, Quantity } from "../../_components";
import parse from "html-react-parser";
import * as flsFunctions from "../../js/files/functions";

const ProductItemPage = ({ context }) => {
    const { pathname } = useLocation();
    const [productData, setProductData] = useState(data.productsItems.find((a) => a.link === pathname.slice(9, pathname.length)));
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { title, category, desription, inStock, options, price, discount, productImages, id } = productData;

    const formatNum = (number) => number.replace(/(\d{1,3})(?=((\d{3})*([^\d]|$)))/g, " $1 ");
    const itemPrice = discount ? (price * (1 - discount / 100)).toFixed(0) : price;
    const [cartList, setCartList] = context;

    const onAddToCart = () => {
        if (!cartList.find((item) => item.id == id)) {
            const item = {
                id: id,
                quantity: quantity,
                price: Number(itemPrice),
            };
            cartList.splice(0, 0, item);
            setCartList(cartList.slice());
        }
    };

    useEffect(() => {
        flsFunctions.tabs();
    }, []);

    const slides = productImages.map((item, i) => (
        <SwiperSlide className="images-product__mainslide" key={i}>
            <img src={item} alt={`Фото номер ${1}`} />
        </SwiperSlide>
    ));

    return (
        <section className="product">
            <h1 className="product__title">
                {title}
                <div>{category}</div>
            </h1>
            <div className="product__content">
                <div className="product__images images-product">
                    {discount ? <div className="images-product__discount">{`-${discount}%`}</div> : null}
                    <Swiper
                        className="images-product__mainslider"
                        speed={500}
                        modules={[Thumbs]}
                        observer={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        observeParents={true}>
                        {slides}
                    </Swiper>
                    <Swiper
                        className="images-product__subslider"
                        modules={[Thumbs]}
                        watchSlidesProgress
                        slidesPerView={4}
                        spaceBetween={10}
                        onSwiper={setThumbsSwiper}
                        speed={500}
                        observer={true}
                        observeParents={true}>
                        {slides}
                    </Swiper>
                </div>
                <div className="product__body body-product">
                    <div className="body-product__top">
                        <button className="body-product__compare">
                            <span className="body-product__compare-img">
                                <img src={images.icons.compare_2} alt="Сравнить" />
                            </span>
                            Сравнить
                        </button>
                        {inStock ? (
                            <div className="body-product__stock">в наличии</div>
                        ) : (
                            <div className="body-product__stock body-product__stock_no">Нет в наличии</div>
                        )}
                    </div>

                    <div className="body-product__actions actions-product">
                        <div className="actions-product__row">
                            <div className="actions-product__column">
                                {discount ? (
                                    <div className="actions-product__price actions-product__price_old rub">
                                        {formatNum(price)}
                                    </div>
                                ) : null}
                                <div className="actions-product__price rub">{formatNum(itemPrice)}</div>
                            </div>
                            <div className="actions-product__column">
                                <Quantity setPassedState={setQuantity} className="actions-product__quantity" />
                            </div>
                            <div className="actions-product__column">
                                <button
                                    type="button"
                                    onClick={() => {
                                        onAddToCart();
                                    }}
                                    className="actions-product__cart">
                                    В корзину
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="body-product__include include-product">
                        <div className="include-product__title">В стоимость товара включено:</div>
                        <div className="include-product__row">
                            <div className="include-product__column">
                                <div className="include-product__icon">
                                    <img src={images.icons.repair} alt="Бесплатная сборка" />
                                </div>
                                <div className="include-product__text">Бесплатная сборка</div>
                            </div>
                            <div className="include-product__column">
                                <div className="include-product__icon">
                                    <img src={images.icons.delivery} alt="Бесплатная доставка" />
                                </div>
                                <div className="include-product__text">Бесплатная доставка</div>
                            </div>
                            <div className="include-product__column">
                                <div className="include-product__icon">
                                    <img src={images.icons.tick} alt="Гарантия" />
                                </div>
                                <div className="include-product__text">Гарантия</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-tabs className="product__product-info info-product">
                <nav data-tabs-titles className="info-product__navigation">
                    <button type="button" className="info-product__title _tab-active">
                        <span>Описание</span>
                    </button>
                    <button type="button" className="info-product__title">
                        <span>Характеристики</span>
                    </button>
                </nav>
                <div data-tabs-body className="info-product__body">
                    <div className="info-product__block">{parse(desription)}</div>
                    <div className="info-product__block">
                        <table className="info-product__table">
                            <tbody>
                                {options.map(({ label, value }, i) => (
                                    <tr key={label + "" + value + "" + i}>
                                        <td>
                                            <div className="info-product__label">{label}</div>
                                        </td>
                                        <td>
                                            <div className="info-product__value">{value}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <section className="product__same same-products">
                <h3 className="same-products__title">Похожие товары</h3>
                <div className="same-products__items">
                    {data.productsItems.map((data, i) => {
                        if (i >= 3) return;
                        return <ProductItem key={i} data={data} />;
                    })}
                </div>
            </section>
        </section>
    );
};

export default ProductItemPage;
