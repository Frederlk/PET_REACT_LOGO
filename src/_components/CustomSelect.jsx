import React, { useEffect, useState } from "react";
import { useEvent } from "../hooks/useEvent";
import { images } from "../constants";
import { _slideDown, _slideToggle, _slideUp } from "../js/files/functions";

const CustomSelect = ({ passedState, setPassedState, children, className, speed = 200, name }) => {
    const [activeOption, setActiveOption] = useState("");
    const [activeValue, setActiveValue] = useState("");
    const [selectOpen, setSelectOpen] = useState(false);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setActiveOption(children[0].props.children);
        if (setPassedState) {
            setPassedState(children[0].props.value);
        } else {
            setActiveValue(children[0].props.value);
        }
    }, []);

    const onUserMenuClick = (e) => {
        const target = e.target;
        const selectBodies = document.querySelectorAll(".select__options");
        if (target.closest(".select__title")) {
            _slideToggle(target.nextSibling, speed);
        } else if (!target.closest(".select__options") && selectOpen) {
            setSelectOpen(false);
            selectBodies.forEach((body, i) => {
                _slideUp(body, speed);
            });
        }
    };

    useEvent("click", onUserMenuClick);

    const onOptionClicked = (e, value, content) => {
        const target = e.target;
        setActiveOption(content);
        setSelectOpen(false);
        if (setPassedState) {
            setPassedState(value);
        } else {
            setActiveValue(value);
        }
        if (target.classList.contains("select__option")) {
            _slideUp(target.parentElement, speed);
        }
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

    const handeChange = () => {};

    return (
        <div className={`${className} select`}>
            <select value={passedState || activeValue} name={name} onChange={() => handeChange()} hidden>
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
                                onClick={(e) => onOptionClicked(e, value, content)}>
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
