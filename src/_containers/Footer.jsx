import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content _container">
                <div className="footer__body">
                    <div className="footer__column">
                        <div className="footer__block block-footer">
                            <div className="block-footer__column">
                                <div className="block-footer__contact contact-footer">
                                    <a href="" className="contact-footer__logo">
                                        <img src="img/main/about/logo_footer.png" alt="" />
                                    </a>
                                    <div className="contact-footer__phones">
                                        <p>
                                            <a href="tel:84991234567" className="contact-footer__phone">
                                                8-499-123-45-67
                                            </a>
                                        </p>
                                        <p>
                                            <a href="tel:84991234567" className="contact-footer__phone">
                                                8-800-123-45-67
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="block-footer__column">
                                <div className="block-footer__delivery delivery-footer">
                                    <div className="delivery-footer__title">Доставка транспортными компаниями:</div>
                                    <div className="delivery-footer__items">
                                        <div className="delivery-footer__item">
                                            <img src="img/main/about/02.png" alt="" />
                                        </div>
                                        <div className="delivery-footer__item">
                                            <img src="img/main/about/03.png" alt="" />
                                        </div>
                                        <div className="delivery-footer__item">
                                            <img src="img/main/about/04.png" alt="" />
                                        </div>
                                        <div className="delivery-footer__item">
                                            <img src="img/main/about/05.png" alt="" />
                                        </div>
                                        <div className="delivery-footer__item">
                                            <img src="img/main/about/06.png" alt="" />
                                        </div>
                                        <div className="delivery-footer__item">
                                            <img src="img/main/about/07.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer__cards">
                            <div className="footer__icon">
                                <img src="img/main/about/cards/01.png" alt="" />
                            </div>
                            <div className="footer__icon">
                                <img src="img/main/about/cards/02.png" alt="" />
                            </div>
                            <div className="footer__icon">
                                <img src="img/main/about/cards/03.png" alt="" />
                            </div>
                            <div className="footer__icon">
                                <img src="img/main/about/cards/04.png" alt="" />
                            </div>
                            <div className="footer__icon">
                                <img src="img/main/about/cards/05.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="footer__column">
                        <div className="footer__widgets">
                            <div className="footer__widget-item">
                                <img src="img/main/about/vidget.png" alt="" />
                            </div>
                            <div className="footer__widget-item">
                                <img src="img/main/about/vidget.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <a href="" className="footer__copy">
                        ©2015 Все права защищены.
                    </a>
                    <div className="footer__socials social-footer">
                        <a href="#" className="social-footer__item">
                            <img src="img/main/about/social/01.png" alt="" />
                        </a>
                        <a href="#" className="social-footer__item">
                            <img src="img/main/about/social/02.png" alt="" />
                        </a>
                        <a href="#" className="social-footer__item">
                            <img src="img/main/about/social/03.png" alt="" />
                        </a>
                        <a href="#" className="social-footer__item">
                            <img src="img/main/about/social/04.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
