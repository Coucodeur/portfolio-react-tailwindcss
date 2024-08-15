import React from "react";
import { Outlet } from "react-router-dom";
import Leftside from "../leftside/leftside";
import Rightside from "../rightside/rightside";
import Navbar from "../navbar/navbar";

const Layout = () => {
    return (
        <div className="layout w-full h-full">
            <Navbar />
            <div className="layout-content md:flex mt-6">
                <Leftside />
                <div className="childrens-layout basis-auto grow mx-4 p-1 border-2 border-sky-200">
                    {<Outlet />}
                </div>
                <Rightside />
            </div>
        </div>
    );
};

export default Layout;
