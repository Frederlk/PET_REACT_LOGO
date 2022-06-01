import React from "react";
import { format } from "date-fns";
import { data } from "../../constants";

const SideReviews = () => {
    const lastReviewsItems = data.lastReviewsItems
        .slice()
        .sort((a, b) => b.date - a.date)
        .map(({ name, text, date }, i) => {
            if (i > 2) return;
            return (
                <article key={name + date + i} className="side-reviews__item">
                    <div className="side-reviews__row">
                        <h5 className="side-reviews__name">{name}</h5>
                        <div className="side-reviews__date">{format(date, "dd.MM.yyyy")}</div>
                    </div>
                    <div className="side-reviews__body">
                        <div className="side-reviews__icon">”</div>
                        <p className="side-reviews__text">{text}</p>
                    </div>
                </article>
            );
        });

    return (
        <>
            {lastReviewsItems.length && (
                <div className="side__reviews side-reviews">
                    <a href="#" className="side-reviews__title side-title">
                        <h3>Отзывы</h3>
                    </a>
                    <div className="side-reviews__items">{lastReviewsItems}</div>
                </div>
            )}
        </>
    );
};

export default SideReviews;
