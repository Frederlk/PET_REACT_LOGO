import React from "react";
import { Link } from "react-router-dom";
import { context, images } from "../../constants";

const ProductItemWrap = ({ data, catalog, context }) => {
    const { title, label, previewImg, category, price, link, discount, options, inStock, id } = data;
    const formatNum = (number) => number.replace(/(\d{1,3})(?=((\d{3})*([^\d]|$)))/g, " $1 ");
    const [cartList, setCartList] = context;
    const itemPrice = discount ? (price * (1 - discount / 100)).toFixed(0) : price;

    const onAddToCart = () => {
        if (!cartList.find((item) => item.id == id)) {
            const item = {
                id: id,
                quantity: 1,
                price: Number(itemPrice),
            };
            cartList.splice(0, 0, item);
            setCartList(cartList);
        }
    };

    return (
        <article className={`item-product ${catalog ? "item-product_catalog" : ""}`}>
            {label && (
                <div className="item-product__labels">
                    <div className="item-product__label">{label}</div>
                </div>
            )}
            <Link to={"/catalog/" + link} className="item-product__image">
                <img src={previewImg} alt={title} />
            </Link>
            <div className="item-product__body">
                <Link to={"/catalog/" + link} className="item-product__title">
                    <h4>{title}</h4>
                    {category && category}
                </Link>
                {catalog && options && (
                    <>
                        <div className="hover-item-product__options options-item-product_catalog">
                            {options.map(({ label, value }, i) => {
                                if (i > 2) return;
                                return (
                                    <div key={label + value + i} className="options-item-product__item">
                                        <div className="options-item-product__label">{label}</div>
                                        <div className="options-item-product__value">{value}</div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="hover-item-product__compare hover-item-product__compare_catalog">
                            <span>
                                <img src={images.icons.compare_1} alt="Сравнить" />
                            </span>
                            <button type="button">Сравнить</button>
                        </div>
                    </>
                )}
                <div className="item-product__footer">
                    {discount && <div className="item-product__old-price rub">{formatNum(price)}</div>}
                    <button
                        type="button"
                        onClick={() => {
                            onAddToCart();
                        }}
                        className="item-product__add">
                        <img src={images.icons.cart_3} alt="Добавить в корзину" />
                    </button>
                    <div className="item-product__price rub">{formatNum(itemPrice)}</div>
                </div>
            </div>
            <div className="item-product__hover hover-item-product">
                <Link to={"/catalog/" + link} className="hover-item-product__title">
                    <h4>{title}</h4>
                    {category && category}
                </Link>
                {options && (
                    <div className="hover-item-product__options options-item-product">
                        {options.map(({ label, value }, i) => {
                            if (i > 2) return;
                            return (
                                <div key={label + value + i} className="options-item-product__item">
                                    <div className="options-item-product__label">{label}</div>
                                    <div className="options-item-product__value">{value}</div>
                                </div>
                            );
                        })}
                    </div>
                )}
                {catalog ? (
                    <div className="hover-item-product__compare">
                        <span>
                            <img src={images.icons.compare_1} alt="Сравнить" />
                        </span>
                        <button type="button">Сравнить</button>
                    </div>
                ) : (
                    <button
                        onClick={() => {
                            onAddToCart();
                        }}
                        type="button"
                        className="hover-item-product__cart">
                        <img src={images.icons.cart_1} alt="Добавить в корзину" />
                    </button>
                )}
                <div className="hover-item-product__footer">
                    {discount && <div className="hover-item-product__old-price rub">{formatNum(price)}</div>}
                    {catalog ? (
                        <button
                            onClick={() => {
                                onAddToCart();
                            }}
                            type="button"
                            className="hover-item-product__add">
                            <img src={images.icons.cart_1} alt="Добавить в корзину" />
                        </button>
                    ) : (
                        <div className={`hover-item-product__stock ${!inStock ? "hover-item-product__stock_no" : ""}`}>
                            {inStock ? "В наличии" : "Нет на складе"}
                        </div>
                    )}
                    <div className="hover-item-product__price rub">{formatNum(itemPrice)}</div>
                </div>
            </div>
        </article>
    );
};

const ProductItem = (props) => {
    const { CartListContext } = context;

    return <CartListContext.Consumer>{(context) => <ProductItemWrap {...props} context={context} />}</CartListContext.Consumer>;
};

export default ProductItem;
