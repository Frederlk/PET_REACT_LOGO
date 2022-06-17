import React, { useEffect, useState } from "react";
import { data } from "../../constants";
import { ProductItem } from "../../_components";
import ActionsCatalog from "./ActionsCatalog";
import Pagination from "./Pagination";

const Catalog = () => {
    const [viewType, setViewType] = useState("grid");
    const [sortType, setSortType] = useState("default");
    const [itemsPerPage, setItemsPerPage] = useState(9);

    const [defaultItems, setDefaultItems] = useState(data.productsItems);
    const [productItems, setProductItems] = useState(defaultItems.slice());
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    console.log(data.productsItems);

    useEffect(() => {
        switch (sortType) {
            case "default":
                setProductItems(defaultItems);
                break;
            case "price":
                setProductItems(
                    productItems.sort(function (a, b) {
                        let nameA = a.price.toLowerCase(),
                            nameB = b.price.toLowerCase();
                        if (nameA < nameB) return -1;
                        if (nameA > nameB) return 1;
                        return 0;
                    })
                );
                break;
            case "name":
                setProductItems(
                    productItems.sort(function (a, b) {
                        let nameA = a.title.toLowerCase(),
                            nameB = b.title.toLowerCase();
                        if (nameA < nameB) return -1;
                        if (nameA > nameB) return 1;
                        return 0;
                    })
                );
                break;
            default:
                break;
        }
    }, [sortType]);

    useEffect(() => {
        setPageCount(Math.ceil(productItems.length / itemsPerPage));
    }, [itemsPerPage, sortType]);

    useEffect(() => {
        const endOffset = +itemOffset + +itemsPerPage;
        setCurrentItems(productItems.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(productItems.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, sortType]);

    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % productItems.length;
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
