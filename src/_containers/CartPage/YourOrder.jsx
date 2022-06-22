import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import { Quantity } from "../../_components";

const OrderItem = ({ data, onHandleDelete }) => {
    const [quantity, setQuantity] = useState("");
    const { previewImg, title, price, discount, category, link, id } = data;
    const formatNum = (number) => number.replace(/(\d{1,3})(?=((\d{3})*([^\d]|$)))/g, " $1 ");
    const discounted = discount ? (price * (1 - discount / 100)).toFixed(0) : price;
    const summary = formatNum((quantity * discounted).toString());

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
            <button type="button" onClick={() => onHandleDelete(id)} className="item-order__delete">
                <img src={images.icons.cross} alt="Удалить из корзины" />
            </button>
        </div>
    );
};

export default React.memo(function YourOrder({ cartList, setCartList, total, setTotal }) {
    const onHandleDelete = (id) => {
        setCartList(cartList.filter((item) => item.id !== id));
    };

    return (
        <div className="order-checkout__items">
            {cartList.map((item, i) => {
                // setTotal((total = total.splice(2, 0, summary)));
                return <OrderItem key={i} data={item} onHandleDelete={onHandleDelete} />;
            })}
        </div>
    );
});
