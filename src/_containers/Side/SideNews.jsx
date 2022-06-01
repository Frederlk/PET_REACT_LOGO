import { format } from "date-fns";
import React from "react";
import parse from "html-react-parser";
import { data } from "../../constants";
import { ru } from "date-fns/locale";

const SideNews = () => {
    const newsItems = data.newsItems
        .slice()
        .sort((a, b) => b.date - a.date)
        .map(({ title, text, link, date }, i) => {
            if (i > 2) return;
            return (
                <article key={title + date + i} className="side-news__item">
                    <a href={link} className="side-news__subtitle">
                        {title}
                    </a>
                    <div className="side-news__body">
                        <div className="side-news__date">
                            <span>{format(date, "d")}</span>
                            {format(date, "LLL", { locale: ru })}
                        </div>
                        <div className="side-news__text">{parse(text)}</div>
                    </div>
                </article>
            );
        });

    return (
        <>
            {data.newsItems.length && (
                <div className="side__news side-news">
                    <a href="#" className="side-news__title side-title">
                        <h3>Новости</h3>
                    </a>
                    <div className="side-news__items">{newsItems}</div>
                </div>
            )}
        </>
    );
};

export default SideNews;
