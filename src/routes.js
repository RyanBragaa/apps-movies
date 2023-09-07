import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Watch from "./pages/Watch";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={ <Home /> } ></Route>
                <Route  path="/watch" element={ <Watch /> } ></Route>
                <Route  path="*" element={ <PageNotFound /> } ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;