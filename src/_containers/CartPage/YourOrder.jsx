import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import { Quantity } from "../../_components";

const OrderItem = ({ data, onHandleDelete, i }) => {
    const [quantity, setQuantity] = useState(1);
    const { previewImg, title, price, discount, category, link, id } = data;
    const formatNum = (number) => number.replace(/(\d{1,3})(?=((\d{3})*([^\d]|$)))/g, " $1 ");
    const discounted = discount ? (price * (1 - discount / 100)).toFixed(0) : price;
    const summary = formatNum((quantity * discounted).toString());
    // const sliced = total.slice().splice(i, 1, +summary.replace(/\s/g, ""));
    console.log(quantity, i);

    return (
        <div className="order-checkout__item item-order">
            <div className="item-order__content">
                <Link to={`/catalog/${link}`} className="item-order__image">
                    <img src={previewImg} alt={title} />
                </Link>
                <div className="item-order__body">
                    <Link to={`/catalog/${link}`} className="item-order__title">
                        {title}
                        <span> {category}</span>
                    </Link>
                    <div className="item-order__price rub">{formatNum(discounted)}</div>
                </div>
            </div>
            <Quantity setPassedState={setQuantity} className="item-order__quantity" />
            <div className="item-order__total">
                <div className="item-order__label">Всего:</div>
                <div className="item-order__price rub">{summary}</div>
            </div>
            <button type="button" onClick={() => onHandleDelete(id, i)} className="item-order__delete">
                <img src={images.icons.cross} alt="Удалить из корзины" />
            </button>
        </div>
    );
};

export default React.memo(function YourOrder({ contextProp }) {
    const [cartList, setCartList] = contextProp;

    const onHandleDelete = (id, i) => {
        setCartList(cartList.slice().filter((item) => item.id !== id));
    };

    console.log("render");

    const items = useMemo(() => {
        return cartList.map((item, i) => <OrderItem data={item} key={i} i={i} onHandleDelete={onHandleDelete} />);
    }, [cartList]);

    return <div className="order-checkout__items">{items}</div>;
});
