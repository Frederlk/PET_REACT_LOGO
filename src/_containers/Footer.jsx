import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { images, data } from "../constants";
import useVkInfo from "../services/useVkInfo";

const Footer = () => {
    const { icons, defaultImages } = images;
    const { process, setProcess, getGroup, getMembers, clearError } = useVkInfo();

    const [char, setChar] = useState(null);

    useEffect(() => {
        updateChar();
    }, []);

    const updateChar = () => {
        clearError();
        const charID = 31480508;
        if (!charID) {
            return;
        }
        getMembers(charID)
            // .then(onCharLoaded)
            .then((res) => console.log(res));
    };

    return (
        <footer className="footer">
            <div className="footer__container ">
                <div className="footer__body">
                    <div className="footer__column">
                        <div className="footer__block block-footer">
                            <div className="block-footer__column">
                                <div className="block-footer__contact contact-footer">
                                    <a href="" className="contact-footer__logo">
                                        <img src={defaultImages.logo_footer} alt="Логотип Logo" />
                                    </a>
                                    <div className="contact-footer__phones">
                                        <div className="contact-footer__icon">
                                            <img src={icons.phone_1} alt="Иконка телефона" />
                                        </div>
                                        <div className="contact-footer__phones-items">
                                            <a href="tel:84991234567" className="contact-footer__phone">
                                                8-499-123-45-67
                                            </a>
                                            <a href="tel:84991234567" className="contact-footer__phone">
                                                8-800-123-45-67
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-footer__column">
                                <div className="block-footer__delivery delivery-footer">
                                    <div className="delivery-footer__title">Доставка транспортными компаниями:</div>
                                    <div className="delivery-footer__items">
                                        {data.deliveryItems &&
                                            data.deliveryItems.map(({ img, alt }, i) => (
                                                <div key={img + i} className="delivery-footer__item">
                                                    <img src={img} alt={alt} />
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer__cards">
                            {data.payCardsItems &&
                                data.payCardsItems.map(({ img, alt }, i) => (
                                    <div key={img + i} className="footer__icon">
                                        <img src={img} alt={alt} />
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="footer__column">
                        <div id="vk_groups" className="footer__widgets"></div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <a href="#" className="footer__copy">
                        @{format(new Date(), "yyyy")} Все права защищены.
                    </a>
                    <div className="footer__socials social-footer">
                        {data.socialItems &&
                            data.socialItems.map(({ img, alt, link }, i) => (
                                <a href={link} key={img + i} className="social-footer__item">
                                    <img src={img} alt={alt} />
                                </a>
                            ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
