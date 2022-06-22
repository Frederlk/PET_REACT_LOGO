import { lazy, Suspense, useEffect, useState } from "react";
import * as flsFunctions from "./js/files/functions";
import dynamicAdaptive from "./js/libs/dynamic_adapt";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import { Header, Footer } from "./_containers";
import { Spinner } from "./_components";
import { data } from "./constants";

const Page404 = lazy(() => import("./_pages/Page404")),
    Home = lazy(() => import("./_pages/HomePage")),
    Product = lazy(() => import("./_pages/ProductPage")),
    Cart = lazy(() => import("./_pages/CartPage")),
    Catalog = lazy(() => import("./_pages/CatalogPage"));

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        flsFunctions.menuClose();
    }, [pathname]);
    return null;
};

const App = () => {
    const [cartList, setCartList] = useState([data.productsItems[0], data.productsItems[1]]);
    const [compareList, setCompareList] = useState([]);

    useEffect(() => {
        flsFunctions.menuInit();
        dynamicAdaptive();
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <Header passedState={cartList} />
            <main className="page">
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/catalog"
                            element={
                                <Catalog
                                    passedState={{ cartList, compareList }}
                                    setPassedState={{ setCartList, setCompareList }}
                                />
                            }
                        />
                        <Route
                            path="/catalog/:id"
                            element={
                                <Product
                                    passedState={{ cartList, compareList }}
                                    setPassedState={{ setCartList, setCompareList }}
                                />
                            }
                        />
                        <Route path="/cart" element={<Cart passedState={cartList} setPassedState={setCartList} />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
