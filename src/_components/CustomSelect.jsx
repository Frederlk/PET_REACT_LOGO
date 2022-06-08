import React, { useEffect, useState } from "react";
import { images } from "../constants";
import { _slideDown, _slideToggle, _slideUp } from "../js/files/functions";

const CustomSelect = ({ children, className, speed = 200, name }) => {
    const [activeOption, setActiveOption] = useState("");
    const [activeValue, setActiveValue] = useState("");
    const [selectOpen, setSelectOpen] = useState(true);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setActiveOption(children[0].props.children);
        setActiveValue(children[0].props.value);
    }, []);

    useEffect(() => {
        console.log(document.querySelector("select").value);
    }, [activeValue]);

    const onOptionClicked = (value, content) => () => {
        setActiveValue(value);
        setActiveOption(content);
        setSelectOpen(false);
    };

    const handleOpenOptions = (e) => {
        const target = e.target.closest(".select__title");
        setDisabled(true);
        setSelectOpen(!selectOpen);
        setTimeout(() => {
            setDisabled(false);
        }, speed);
        if (target) {
            _slideToggle(target.nextSibling, speed);
        }
    };

    return (
        <div className={`${className} select`}>
            <select value={activeValue} name={name} defaultValue hidden>
                {children}
            </select>
            <div className={`select__body ${selectOpen ? "_select-active" : ""}`}>
                <button disabled={disabled} type="button" className="select__title" onClick={(e) => handleOpenOptions(e)}>
                    <span className="select__value">{activeOption}</span>
                    <span className="select__arrow">
                        <img src={images.icons.triangle} alt="Стрелочка" />
                    </span>
                </button>
                <div hidden className="select__options">
                    {children.map((item, i) => {
                        const value = item.props.value;
                        const content = item.props.children;
                        return (
                            <button
                                type="button"
                                key={value + i}
                                className="select__option"
                                onClick={onOptionClicked(value, content)}>
                                {content}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CustomSelect;
