import React, { useMemo } from "react";
import ReactPaginate from "react-paginate";
import { images } from "../../constants";
import { CustomSelect } from "../../_components";

export default React.memo(function Pagination({ passedState, setPassedState, pageCount, handlePageClick }) {
    const memoSel = useMemo(() => {
        return (
            <CustomSelect passedState={passedState} setPassedState={setPassedState} name="sort" className="show-catalog__select">
                <option value="9">9</option>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="6">6</option>
            </CustomSelect>
        );
    }, [passedState]);

    return (
        <div className="catalog__navi navi-catalog navi-catalog_top">
            <div className="navi-catalog__show show-catalog">
                <div className="show-catalog__label">На странице:</div>
                {memoSel}
            </div>
            {pageCount !== 1 && (
                <div className="navi-catalog__pages">
                    <ReactPaginate
                        className="news-page__paggination pagging"
                        pageLinkClassName="pagging__item"
                        breakClassName="pagging__item"
                        activeLinkClassName="_active"
                        breakLabel="..."
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        marginPagesDisplayed={2}
                        pageCount={pageCount}
                        previousLabel={
                            <img
                                src={images.icons.arrow_sl}
                                className="pagging__arrow pagging__arrow_prev"
                                alt="Предыдущая страница"
                            />
                        }
                        nextLabel={
                            <img
                                src={images.icons.arrow_sl}
                                className="pagging__arrow pagging__arrow_next"
                                alt="Следующая страница"
                            />
                        }
                    />
                </div>
            )}
        </div>
    );
});
