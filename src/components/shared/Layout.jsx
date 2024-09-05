import React from 'react';
import { Outlet } from 'react-router-dom';
import Leftside from '../leftside/leftside';
import Rightside from '../rightside/rightside';
import Navbar from '../navbar/navbar';

const Layout = () => {
  return (
    <div className="layout w-full h-full">
      <Navbar />
      <div className="layout-content md:flex mt-6">
        <Leftside />
        <div className="childrens-layout-container basis-auto grow  p-1 border-sky-200 border-">
          {<Outlet />}
        </div>
        <Rightside />
      </div>
    </div>
  );
};

export default Layout;
