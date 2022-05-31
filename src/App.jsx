import { lazy, Suspense, useEffect } from "react";
import * as flsFunctions from "./js/files/functions";
import dynamicAdaptive from "./js/libs/dynamic_adapt";
// import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage";

import { Header, Footer } from "./_containers";
// import { Spinner } from "./_components";

// const Page404 = lazy(() => import("./_pages/Page404")),
//     Home = lazy(() => import("./_pages/HomePage"));
//     About = lazy(() => import("./_pages/About")),
//     Career = lazy(() => import("./_pages/Career")),
//     Contacts = lazy(() => import("./_pages/Contacts")),
//     Products = lazy(() => import("./_pages/Products"));

// const ScrollToTop = () => {
//     const { pathname } = useLocation();
//     useEffect(() => {
//         window.scrollTo(0, 0);
//         flsFunctions.menuClose();
//     }, [pathname]);
//     return null;
// };

const App = () => {
    useEffect(() => {
        flsFunctions.menuInit();
        flsFunctions.spollers();
        dynamicAdaptive();
    }, []);

    return (
        <>
            <Header />
            <main className="page">
                <HomePage />
            </main>
            <Footer />
        </>
    );
};

export default App;
