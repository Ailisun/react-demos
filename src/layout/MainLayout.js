import React from 'react';
import css from "./MainLayout.module.css"
import {NavLink, Outlet} from "react-router-dom"


const MainLayout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/movie">Movie</NavLink>
                <h6>User_2235</h6>
            </div>
            <Outlet/>
        </div>
    );
};

export default MainLayout;