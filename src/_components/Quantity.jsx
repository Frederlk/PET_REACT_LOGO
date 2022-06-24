import React, { useEffect, useState } from "react";
import { images } from "../constants";

export default React.memo(function Quantity({ className, setPassedState }) {
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (setPassedState) {
            setPassedState(quantity);
        }
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
        <div className={`${className || ""} quantity`}>
            <button
                type="button"
                onClick={() =>
                    quantity >= 1 && quantity <= 100
                        ? setQuantity(() => (quantity <= 1 ? setQuantity(1) : setQuantity(+quantity - 1)))
                        : null
                }
                className="quantity__button quantity__button_minus">
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
                onClick={() => (quantity >= 1 && quantity < 100 ? setQuantity(() => setQuantity(+quantity + 1)) : null)}
                className="quantity__button quantity__button_plus">
                <img src={images.icons.arrow_nav_hv} alt="+" />
            </button>
        </div>
    );
});
