import React, { useState } from "react";
import { data } from "../../constants";
import { ProductItem } from "../../_components";
import ActionsCatalog from "./ActionsCatalog";
import Pagination from "./Pagination";

const Catalog = () => {
    const [viewType, setViewType] = useState("list");

    console.log(viewType);

    return (
        <div className="catalog">
            <h1 className="catalog__title">Каталог</h1>
            <ActionsCatalog viewType={viewType} setViewType={setViewType} />
            {/* <Pagination /> */}
            <div className={`catalog__products catalog__products_${viewType}`}>
                <ProductItem catalog data={data.productsItems[0]} />
                <ProductItem catalog data={data.productsItems[1]} />
                <ProductItem catalog data={data.productsItems[2]} />
            </div>
        </div>
    );
};

export default Catalog;
