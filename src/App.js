import {Route,Routes, Navigate } from "react-router-dom"
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage/MoviePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path ={'home'} element={<HomePage/>}/>
                <Route path ={'movie'} element={<MoviePage/>}/>
                <Route path ={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;