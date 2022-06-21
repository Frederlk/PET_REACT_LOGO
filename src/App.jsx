import { lazy, Suspense, useEffect } from "react";
import * as flsFunctions from "./js/files/functions";
import dynamicAdaptive from "./js/libs/dynamic_adapt";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import { Header, Footer } from "./_containers";
import { Spinner } from "./_components";

const Page404 = lazy(() => import("./_pages/Page404")),
    Home = lazy(() => import("./_pages/HomePage")),
    Product = lazy(() => import("./_pages/ProductPage")),
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
    useEffect(() => {
        flsFunctions.menuInit();
        dynamicAdaptive();
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <Header />
            <main className="page">
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/aab5d2d6-51769-4f79-9baa-2469d676321f" element={<Product />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
