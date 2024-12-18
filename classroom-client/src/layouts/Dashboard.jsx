import { CgFormatColor } from "react-icons/cg";
import { FaBars, FaFan, FaGear } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <div>
          <nav className="py-2 px-1 bg-base-200 flex justify-between lg:hidden">
            <label
              htmlFor="my-drawer-2"
              className="drawer-button lg:hidden cursor-pointer"
            >
              <FaBars className="text-3xl"></FaBars>
            </label>
            <div className="flex items-center gap-2 justify-center">
              <FaFan className="text-3xl text-primary animate-spin"></FaFan>
              <h2 className="text-xl font-bold">Board</h2>
            </div>
            <div></div>
          </nav>
          <main className="">
            <Outlet></Outlet>
          </main>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4 space-y-3">
          {/* Sidebar content here */}
          <Link to="/" className="flex items-center gap-2 py-5 ">
            <FaFan className="text-3xl text-primary animate-spin"></FaFan>
            <h2 className="text-xl font-bold">Board</h2>
          </Link>
          <li className="">
            <NavLink to="/dashboard/me">
              <FaGear></FaGear>User Setting
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/dashboard/theme">
              <CgFormatColor></CgFormatColor>Theme Setting
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
