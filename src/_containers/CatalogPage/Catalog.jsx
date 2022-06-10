import React, { useEffect, useState } from "react";
import { data } from "../../constants";
import { ProductItem } from "../../_components";
import ActionsCatalog from "./ActionsCatalog";
import Pagination from "./Pagination";

const Catalog = () => {
    const [viewType, setViewType] = useState("grid");
    const [sortType, setSortType] = useState("");
    const [itemsPerPage, setItemsPerPage] = useState(9);

    const [currentData, setCurrentData] = useState(data.productsItems.slice());
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        setPageCount(Math.ceil(currentData.length / itemsPerPage));
    }, [itemsPerPage]);

    useEffect(() => {
        const endOffset = +itemOffset + +itemsPerPage;
        setCurrentItems(currentData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(currentData.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % currentData.length;
        setItemOffset(newOffset);
    };

    return (
        <div className="catalog">
            <h1 className="catalog__title">Каталог</h1>
            <ActionsCatalog passedState={sortType} setPassedState={setSortType} viewType={viewType} setViewType={setViewType} />
            <Pagination
                passedState={itemsPerPage}
                setPassedState={setItemsPerPage}
                handlePageClick={handlePageClick}
                pageCount={pageCount}
            />
            <div
                className={`catalog__products catalog__products_${viewType} ${
                    currentItems !== null && currentItems.length == 1 ? "_one" : ""
                }`}>
                {currentItems && currentItems.map((item) => <ProductItem catalog key={item.id} data={item} />)}
            </div>
        </div>
    );
};

export default Catalog;
