import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data, images } from "../../constants";

const OrderItem = ({ itemId, onHandleDelete, localList, setLocalList, cartList }) => {
    const { previewImg, title, price, discount, category, link, id } = data.productsItems
        .slice()
        .find((item) => item.id == itemId);
    const [quantity, setQuantity] = useState(1);
    const formatNum = (number) => number.replace(/(\d{1,3})(?=((\d{3})*([^\d]|$)))/g, " $1 ");
    const discounted = discount ? (price * (1 - discount / 100)).toFixed(0) : price;
    const summary = formatNum((quantity * discounted).toString());

    console.log(summary, quantity, discounted);

    useEffect(() => {
        const localList = JSON.parse(localStorage.getItem("cartList") || "[]");
        const localQuantity = localList.find((item) => item.id == id);
        if (localQuantity) {
            setQuantity(localQuantity.quantity);
        } else {
            const item = cartList.find((item) => item.id == id);
            item ? setQuantity(item.quantity) : setQuantity(1);
        }
    }, [cartList]);

    useEffect(() => {
        const item = localList.find((item) => item.id == id);
        item.quantity = quantity;
        item.price = +summary.replace(/\s/g, "");
        setLocalList(localList.slice());
    }, [quantity]);

    const handleQuantityChange = (e) => {
        const value = +e.target.value.replace(/\D/g, "");
        if (quantity > 100 || value > 100) return;
        if (quantity < 1 || value < 1) {
            setQuantity(1);
        } else {
            setQuantity(value);
        }
    };

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
            <div className="item-order__quantity quantity">
                <button
                    type="button"
                    onClick={() =>
                        quantity >= 1 && quantity <= 100
                            ? quantity <= 1
                                ? setQuantity(1)
                                : setQuantity(+quantity - 1)
                            : null
                    }
                    className="quantity__button quantity__button_minus"
                >
                    <img src={images.icons.arrow_nav_hv} alt="-" />
                </button>
                <div className="quantity__input">
                    <input
                        autoComplete="off"
                        onChange={(e) => handleQuantityChange(e)}
                        type="text"
                        name="quantity"
                        value={quantity}
                    />
                </div>
                <button
                    type="button"
                    onClick={() => (quantity >= 1 && quantity < 100 ? setQuantity(+quantity + 1) : null)}
                    className="quantity__button quantity__button_plus"
                >
                    <img src={images.icons.arrow_nav_hv} alt="+" />
                </button>
            </div>
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

export default React.memo(function YourOrder({ contextProp, setTotal }) {
    const [cartList, setCartList] = contextProp;
    const [localList, setLocalList] = useState(cartList.slice());

    useEffect(() => {
        localStorage.setItem("cartList", JSON.stringify(localList));
        setTotal(localList.map((item) => item.price));
    }, [localList]);

    const onHandleDelete = (id) => {
        setLocalList(localList.filter((item) => item.id !== id));
        setCartList(cartList.filter((item) => item.id !== id));
    };

    return (
        <div className="order-checkout__items">
            {cartList.map(({ id }, i) => (
                <OrderItem
                    itemId={id}
                    key={i}
                    onHandleDelete={onHandleDelete}
                    cartList={cartList}
                    localList={localList}
                    setLocalList={setLocalList}
                />
            ))}
        </div>
    );
});
