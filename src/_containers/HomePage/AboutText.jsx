import React from "react";
import { images } from "../../constants";

const AboutText = () => {
    return (
        <section className="page__text text-block">
            <div className="text-block__container">
                <div className="text-block__body">
                    <h2 className="text-block__title">О компании</h2>
                    <div className="text-block__row">
                        <div className="text-block__column">
                            <p>
                                Компания «CLEAR FIT» была организована для создания и реализации качественного и надежного
                                спортивного оборудования для домашнего и легкого коммерческого использования. Дефицит качественных
                                тренажеров в среднем ценовом сегменте повлек за собой не мотивированный рост цен на надежное
                                оборудование, создав дополнительный сегмент &quot;полукоммерческих&quot; тренажеров, что
                                приблизило их стоимость к профессиональному оборудованию. А заполнение среднего ценового сегмента
                                сложилось из роста количества брендов и производителей недорогих тренажеров с невысокими
                                техническими характеристиками, за счет увеличения количества дополнительных опций. Главными
                                критериями для выпуска продукции с маркой «CLEAR FIT» являются: высокое качество, разумная цена и
                                комфорт тренировок. Осуществить эту непростую задачу позволил тандем европейских разработок и
                                размещение основного производства на Тайване. Узкая специализация на кардио-тренажеры для дома
                                позволяет поддерживать высокий контроль качества на всех ступенях производства.
                            </p>

                            <p>
                                Разумный показатель «цена/качество» среди предлагаемых разными компаниями спортивных тренажеров в
                                последние годы – довольно редкое явление. Мы достаточно кропотливо потрудились над тренажерами
                                CLEAR FIT, чтобы продемонстрировать новый подход к выпуску доступной, красивой и надежной
                                продукции. Современные технологии обеспечивают комфорт и легкость управления тренажерами CLEAR
                                FIT.Многочисленные отзывы от наших покупателей поступили и продолжают поступать feedbacks от
                                конечных потребителей. И теперь мы с гордостью можем заявить, что учли многие Ваши пожелания
                                предложения в обновленных версиях тренажеров CLEAR FIT. Мы рады представить Вам новое поколение
                                наших тренажеров. Теперь оборудование стало не только «умнее», удобнее, комфортнее, но и сохранило
                                прежние показатели цены, оставаясь доступным спортивным оборудованием для тех, кто ценит качество.
                            </p>
                        </div>
                        <div className="text-block__column">
                            <h3 className="text-block__label">Концепция CLEAR FIT строится на следующих тезисах:</h3>
                            <ul className="text-block__list">
                                <li>
                                    <span>
                                        <img src={images.icons.arrow_li} alt="Стрелка" />
                                    </span>
                                    Спортивное оборудование для дома не отличается по эффективности и безопасности от
                                    профессионального оборудования - от пользователя не требуется специальная подготовка и
                                    первичные навыки, наличие индивидуального профессионального тренера, соответственно требует
                                    более тщательного контроля.
                                </li>
                                <li>
                                    <span>
                                        <img src={images.icons.arrow_li} alt="Стрелка" />
                                    </span>
                                    Тренажеры CLEAR FIT просты в управлении, легко адаптируются под индивидуальные особенности
                                    пользователя, эффективны и безопасны, рассчитаны на самостоятельные тренировки. Основное
                                    требование к тренажерам под маркой «CLEAR FIT» высокое качество по разумной стоимости -
                                    сохранить это равновесие основная задача профессионалов из всех областей производства CLEAR
                                    FIT.
                                </li>
                                <li>
                                    <span>
                                        <img src={images.icons.arrow_li} alt="Стрелка" />
                                    </span>
                                    Мир не стоит на месте - каждое поколение оборудования соответствует современным технологиям.
                                    Продукция CLEAR FIT производится с учетом новейших разработок по современной технологии,
                                    совершенствуя и улучшая популярные серии оборудования и создавая принципиально новые
                                    актуальные модели.
                                </li>
                                <li>
                                    <span>
                                        <img src={images.icons.arrow_li} alt="Стрелка" />
                                    </span>
                                    Прежде всего оборудование CLEAR FIT ориентировано на конечного пользователя - компания открыта
                                    для диалога, мы рады всем вашим отзывам и замечаниям, это основной фактор создания комфортной
                                    и удобной продукции.
                                </li>
                                <li>
                                    <span>
                                        <img src={images.icons.arrow_li} alt="Стрелка" />
                                    </span>
                                    Качественный продукт не мыслим без качественного <br />
                                    сервисного обслуживания - официальный сервисный <br />
                                    центр CLEAR FIT обеспечивает техническую поддержку <br />
                                    в течение всего времени эксплуатации тренажера, <br />
                                    качественные услуги сервисного обслуживания <br />
                                    как в течение гарантийного срока, так и в <br />
                                    постгарантийный период. <br />
                                </li>
                            </ul>
                            <div className="text-block__image">
                                <img src={images.defaultImages.woman} alt="Девушка на тренажёре" />
                            </div>
                        </div>
                    </div>
                    <div className="text-block__bg-ibg">
                        <img src={images.defaultImages.bg} alt="Задний фон" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutText;
