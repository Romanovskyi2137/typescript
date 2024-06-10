import React from "react";
import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";

export default function Layout () {
    
    return (
        <div className="wrapper__layout">
            <header>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer></footer>
        </div>
    )
}