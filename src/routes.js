import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favotires";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={ <Home /> } ></Route>
                <Route  path="/watch/:id" element={ <Watch /> } ></Route>
                <Route  path="/search" element={ <Search /> } ></Route>
                <Route  path="/favorites" element={ <Favorites /> } ></Route>
                <Route  path="*" element={ <PageNotFound /> } ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;