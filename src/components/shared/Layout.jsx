import { Outlet } from "react-router-dom";
import Leftside from "../leftside/leftside";
import Rightside from "../rightside/rightside";
import Navbar from "../navbar/navbar";

const Layout = () => {
  return (
    <div className="layout-container w-full h-full bg-primary">
      <div className="layout w-full h-full bg-primary">
        <Navbar />
        <div className="layout-content md:flex mt-6">
          <Leftside />
          <div className="childrens-layout-container basis-auto grow  p-1 border-sky-200 border-">
            {<Outlet />}
          </div>
          <Rightside />
        </div>
      </div>
    </div>
  );
};

export default Layout;
