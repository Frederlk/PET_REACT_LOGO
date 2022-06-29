import React, { useEffect, useState } from "react";
import { images } from "../constants";

const ToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 320) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <button type="button" onClick={scrollToTop} className={`to-top ${isVisible ? "_active" : ""}`}>
            <img src={images.icons.arrow} alt="К началу страницы" />
        </button>
    );
};

export default ToTop;
