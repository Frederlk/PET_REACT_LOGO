import { lazy, Suspense, useEffect, useState } from "react";
import * as flsFunctions from "./js/files/functions";
import dynamicAdaptive from "./js/libs/dynamic_adapt";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import { Header, Footer } from "./_containers";
import { Spinner } from "./_components";
import { context } from "./constants";

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
    const [cartList, setCartList] = useState([
        { id: "aab525d2d6-5769-4f79-9baa-2469d676321f", quantity: 1, price: 0 },
        { id: "aab5d2d6-2145769-4f79-9baa-2469d676321f", quantity: 1, price: 0 },
        { id: "aab225d2d6-5769-4f72469d676321f", quantity: 1, price: 0 },
    ]);

    const [compareList, setCompareList] = useState([]);
    const { CartListContext, CompareList } = context;

    useEffect(() => {
        flsFunctions.menuInit();
        dynamicAdaptive();
    }, []);

    return (
        <Router>
            <CartListContext.Provider value={[cartList, setCartList]}>
                <ScrollToTop />
                <Header cartList={cartList} />
                <main className="page">
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/catalog" element={<Catalog />} />
                            <Route path="/catalog/:id" element={<Product />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer />
            </CartListContext.Provider>
        </Router>
    );
};

export default App;
