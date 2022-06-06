import React from "react";
import { images } from "../../constants";

const ProductItem = ({ data }) => {
    const { title, label, previewImg, category, price, link, discount, options, inStock } = data;

    const formatNum = (number) => number.replace(/(\d{1,3})(?=((\d{3})*([^\d]|$)))/g, " $1 ");

    return (
        <article className="item-product">
            {label && (
                <div className="item-product__labels">
                    <div className="item-product__label">{label}</div>
                </div>
            )}
            <a href={link} className="item-product__image">
                <img src={previewImg} alt={title} />
            </a>
            <div className="item-product__body">
                <a href={link} className="item-product__title">
                    <h4>{title}</h4>
                    {category && category}
                </a>
                <div className="item-product__footer">
                    {discount && <div className="item-product__old-price rub">{formatNum(price)}</div>}
                    <button type="button" className="item-product__add">
                        <img src={images.icons.cart_3} alt="Добавить в корзину" />
                    </button>
                    <div className="item-product__price rub">
                        {discount ? formatNum((price * (1 - discount / 100)).toFixed(0)) : formatNum(price)}
                    </div>
                </div>
            </div>
            <div className="item-product__hover hover-item-product">
                <a href={title} className="hover-item-product__title">
                    <h4>{title}</h4>
                    {category && category}
                </a>
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
                <button type="button" className="hover-item-product__cart">
                    <img src={images.icons.cart_1} alt="Добавить в корзину" />
                </button>
                <div className="hover-item-product__footer">
                    {discount && <div className="hover-item-product__old-price rub">{formatNum(price)}</div>}
                    <div className={`hover-item-product__stock ${!inStock ? "hover-item-product__stock_no" : ""}`}>
                        {inStock ? "В наличии" : "Нет на складе"}
                    </div>
                    <div className="hover-item-product__price rub">
                        {discount ? formatNum((price * (1 - discount / 100)).toFixed(0)) : formatNum(price)}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProductItem;
