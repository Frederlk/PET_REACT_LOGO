import React from "react";
import { data } from "../../constants";
import { ProductItem } from "../../_components";
import ActionsCatalog from "./ActionsCatalog";
import Pagination from "./Pagination";

const Catalog = () => {
    return (
        <div className="catalog">
            <h1 className="catalog__title">Каталог</h1>
            <ActionsCatalog />
            {/* <Pagination /> */}
            <div className="catalog__products items-products">
                <ProductItem catalog data={data.productsItems[0]} />
                <ProductItem catalog data={data.productsItems[1]} />
                <ProductItem catalog data={data.productsItems[2]} />
            </div>
        </div>
    );
};

export default Catalog;
