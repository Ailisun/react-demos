import {Routes, Route, Navigate} from "react-router-dom";
import './App.css';

import {MoviePage} from "./pages/MoviePage/MoviePage";
import {MainLayout} from "./layout/MainLayout";
import {MoviesListPage} from "./pages/MovieListPage/MoviesListPage";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesListPage/>}/>
                <Route path={'movie'} element={<MoviePage/>}/>
            </Route>
        </Routes>

    );
}

export default App;