import React, { useEffect, useState } from "react";
import { CustomSelect } from "../../_components";
import { Formik, Form as FormikForm, useField } from "formik";
import * as Yup from "yup";
import * as flsFunctions from "../../js/functions";
import YourOrder from "./YourOrder";

const FormCheckoutInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div
            className={`form-checkout__line ${props.className || ""} ${
                meta.touched && meta.error ? "_error" : ""
            }`}
        >
            <div className="form-checkout__label">
                {label}: <span className="red-star">*</span>
            </div>
            <div className="form-checkout__input">
                <input {...props} {...field} className="input" />
            </div>
            {meta.touched && meta.error ? <div className="form-checkout__error">{meta.error}</div> : null}
        </div>
    );
};

const FormCheckoutCheckbox = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className={`form-checkout__line ${props.className || ""}`}>
            <div className="form-checkout__label">{label}</div>
            <div className="form-checkout__input">
                <label className="checkbox__label">
                    <input {...props} {...field} type="checkbox" className="checkbox__input" />
                    <span className="checkbox__text">
                        <span>Подписаться на новости и скидки</span>
                    </span>
                </label>
            </div>
        </div>
    );
};

const FormCheckoutTextarea = ({ label, ...props }) => {
    const [field, meta] = useField({ ...props, type: "textarea" });

    return (
        <div className={`form-checkout__line ${props.className || ""}`}>
            <div className="form-checkout__label">{label}:</div>
            <div className="form-checkout__input">
                <textarea {...props} {...field} className="input"></textarea>
            </div>
        </div>
    );
};

const Form = ({ contextProp }) => {
    const [fastOrder, setFastOrder] = useState(true);
    const [paymentType, setPaymentType] = useState("Сбербанк");
    let [total, setTotal] = useState(0);
    const formatNum = (number) => number.replace(/(\d{1,3})(?=((\d{3})*([^\d]|$)))/g, " $1 ");
    const [cartList, setCartList] = contextProp;

    useEffect(() => {
        flsFunctions.tabs();
    }, []);

    const fastValidate = {
        firstName: Yup.string().min(2, "Минимум 2 символа").required("Обязательное поле!"),
        tel: Yup.string()
            .matches(
                /^(1[ \-+]{0,3}|\+[0-9][ -+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-.]{0,3}[0-9]{2,4}))?([ \-.][0-9])?([ \-.]{0,3}[0-9]{2,4}){2,3}$/g,
                "Введите Телефон"
            )
            .required("Обязательное поле!"),
        email: Yup.string().email("Неправильный email адрес").required("Обязательное поле!"),
    };

    const regionValidate = {
        firstName: Yup.string().min(2, "Минимум 2 символа").required("Обязательное поле!"),
        lastName: Yup.string().min(2, "Минимум 2 символа").required("Обязательное поле!"),
        middleName: Yup.string().min(2, "Минимум 2 символа").required("Обязательное поле!"),
        tel: Yup.string()
            .matches(
                /^(1[ \-+]{0,3}|\+[0-9][ -+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-.]{0,3}[0-9]{2,4}))?([ \-.][0-9])?([ \-.]{0,3}[0-9]{2,4}){2,3}$/g,
                "Введите Телефон"
            )
            .required("Обязательное поле!"),
        email: Yup.string().email("Неправильный email адрес").required("Обязательное поле!"),
        index: Yup.string().min(2, "Минимум 2 символа").required("Обязательное поле!"),
        city: Yup.string().min(2, "Минимум 2 символа").required("Обязательное поле!"),
        address: Yup.string().min(2, "Минимум 2 символа").required("Обязательное поле!"),
    };

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                middleName: "",
                tel: "",
                email: "",
                payment: "",
                index: "",
                city: "",
                address: "",
                comment: "",
                sign: false,
                cart: [],
                total: 0,
            }}
            validationSchema={fastOrder ? Yup.object(fastValidate) : Yup.object(regionValidate)}
            onSubmit={(values, { resetForm }) => {
                values = {
                    ...values,
                    tel: values.tel.replace(/[-() ]/g, ""),
                    payment: paymentType,
                    cart: cartList,
                    total: total.length
                        ? total.reduce((a, b) => {
                              return (a || 0) + (b || 0);
                          })
                        : 0,
                };
                resetForm();
                console.log(JSON.stringify(values, null, 2));
            }}
        >
            <FormikForm className="checkout">
                <h2 className="checkout__title">Оформление заказа</h2>
                <div data-tabs className="checkout__content content-checkout">
                    <nav data-tabs-titles className="content-checkout__nav">
                        <button
                            type="button"
                            onClick={() => (fastOrder ? null : setFastOrder(true))}
                            className="content-checkout__item _tab-active"
                        >
                            <span>Быстрый заказ</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => (fastOrder ? setFastOrder(false) : null)}
                            className="content-checkout__item"
                        >
                            <span>Доставка в регионы</span>
                        </button>
                    </nav>
                    <div data-tabs-body className="content-checkout__body">
                        <div className="content-checkout__block">
                            <div className="content-checkout__form form-checkout">
                                <div className="form-checkout__column">
                                    <FormCheckoutInput label="Имя" type="text" name="firstName" />
                                    <FormCheckoutInput label="Моб. телефон" type="text" name="tel" />
                                    <FormCheckoutInput label="Ваш E-mail" type="text" name="email" />
                                    <FormCheckoutCheckbox label="" name="sign" />
                                </div>
                                <div className="form-checkout__column">
                                    <div className="form-checkout__text">
                                        <p>
                                            <span className="red-star">*</span> Поля, обязательные для
                                            заполнения
                                        </p>
                                        <p>
                                            Отправка товара производится только после 100% оплаты товара.
                                            Стоимость доставки возможно оплатить при получении заказа.
                                        </p>
                                        <p>
                                            <span className="red-star">*</span> Интернет-магазин не несет
                                            ответственности за задержку доставки заказа, связанную с работой
                                            курьерских служб DPD и EMS Почты России.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-checkout__block">
                            <div className="content-checkout__form form-checkout">
                                <div className="form-checkout__column">
                                    <FormCheckoutInput label="Фамилия" type="text" name="lastName" />
                                    <FormCheckoutInput label="Имя" type="text" name="firstName" />
                                    <FormCheckoutInput label="Отчество" type="text" name="middleName" />
                                    <FormCheckoutInput label="Моб. телефон" type="text" name="tel" />
                                    <FormCheckoutInput label="Ваш E-mail" type="text" name="email" />

                                    <div className="form-checkout__line">
                                        <div className="form-checkout__label">
                                            Способ оплаты: <span className="red-star">*</span>
                                        </div>
                                        <div className="form-checkout__input">
                                            <CustomSelect
                                                name="payment"
                                                passedState={paymentType}
                                                setPassedState={setPaymentType}
                                            >
                                                <option value="Сбербанк">Через Сбербанк</option>
                                                <option value="Альфабанк">Через Альфабанк</option>
                                                <option value="МТБанк">Через МТБанк</option>
                                                <option value="Беларусбанк">Через Беларусбанк</option>
                                            </CustomSelect>
                                        </div>
                                    </div>

                                    <FormCheckoutInput label="Индекс" type="text" name="index" />
                                    <FormCheckoutInput label="Город" type="text" name="city" />
                                    <FormCheckoutInput label="Адрес доставки" type="text" name="address" />
                                    <FormCheckoutTextarea
                                        className="form-checkout__line_textarea"
                                        label="Комментарии"
                                        type="text"
                                        name="comment"
                                    />
                                    <FormCheckoutCheckbox label="" name="sign" />
                                </div>
                                <div className="form-checkout__column">
                                    <div className="form-checkout__text">
                                        <p>
                                            <span className="red-star">*</span>Поля, обязательные для
                                            заполнения
                                        </p>
                                        <p>
                                            Отправка товара производится только после 100% оплаты товара.
                                            Стоимость доставки возможно оплатить при получении заказа.
                                        </p>
                                        <p>
                                            Доставка в регионы осуществляется EMS Почтой России (в течение
                                            5-14 дней) и курьерской службой DPD (в течение 3-5 дней) с момента
                                            передачи заказа в службу доставки. Стоимость зависит от веса
                                            заказа и расстояния. В некоторые регионы доставка возможна только
                                            посредством EMS Почты России, способ доставки уточняйте у
                                            оператора при оформлении заказа*.
                                        </p>
                                        <p>
                                            * Интернет-магазин не несет ответственности за задержку доставки
                                            заказа, связанную с работой курьерских служб DPD и EMS Почты
                                            России.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkout__order order-checkout">
                    <h2 className="order-checkout__title">Ваш заказ</h2>
                    <YourOrder contextProp={contextProp} setTotal={setTotal} />
                    <div className="order-checkout__footer">
                        <div className="order-checkout__total">
                            Итого:
                            <span className="rub">
                                {total.length > 0
                                    ? formatNum(
                                          total
                                              .reduce((a, b) => {
                                                  return (a || 0) + (b || 0);
                                              })
                                              .toString()
                                      )
                                    : " 0"}
                            </span>
                        </div>
                        <button type="submit" className="order-checkout__btn">
                            Оформить заказ
                        </button>
                    </div>
                </div>
            </FormikForm>
        </Formik>
    );
};

export default Form;
