import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import FavoritesProvider from "./contexts/Favorites";
import Favorites from "./pages/Favotires";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import VideoCadastre from "./pages/VideoCadastre";

function AppRoutes() {
    return (
        <BrowserRouter>
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home />} ></Route>
                    <Route path="/watch/:id" element={<Watch />} ></Route>
                    <Route path="/search" element={<Search />} ></Route>
                    <Route path="/favorites" element={<Favorites />} ></Route>
                    <Route path="/cadastre" element={<VideoCadastre />} ></Route>
                    <Route path="*" element={<PageNotFound />} ></Route>
                </Routes>
            </FavoritesProvider>
        </BrowserRouter>
    );
}

export default AppRoutes;