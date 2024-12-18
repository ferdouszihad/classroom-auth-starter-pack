import { Link, NavLink } from "react-router-dom";
import { FaFan } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navlinks = (
    <>
      <li>
        <NavLink className="flex rounded-none" to="/">
          Home
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink className="flex rounded-none" to="/add-student">
            Add Student
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink className="flex rounded-none" to="/my-student">
            Manage Student
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <nav className="border-b-2 bg-base-200 border-base-200">
      <div className="navbar  md:w-11/12 mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu-sm border-0 dropdown-content bg-base-100 z-[1] mt-3 w-80 p-2 shadow space-y-4"
            >
              {navlinks}
            </ul>
          </div>
          <Link className="logo flex text-xl gap-1 items-end" to={"/"}>
            Classroom
            <FaFan className="text-2xl text-primary animate-spin "></FaFan>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-5 ">{navlinks}</ul>
        </div>
        <div className="navbar-end space-x-2">
          {user && user?.email ? (
            <div className="flex gap-2 ">
              <div className="dropdown dropdown-hover">
                <div
                  role="button"
                  tabIndex={0}
                  className="w-12 h-12 p-[2px] border-2 border-green-400 rounded-full relative"
                >
                  <div className="absolute inset-1 bg-primary text-primary-content rounded-full flex items-center justify-center ">
                    {user?.email && user?.email[0]}
                  </div>
                  <img
                    className="rounded-full w-full h-full relative z-10"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
              </div>
              <div className="space-y-1">
                <h2 className="text-sm">{user.displayName}</h2>
                <button onClick={logOut} className="btn btn-xs btn-primary ">
                  Log-Out
                </button>
              </div>
            </div>
          ) : (
            <>
              <NavLink
                to={"/login"}
                className="btn btn-outline  btn-primary btn-sm"
              >
                Login
              </NavLink>
              <NavLink
                to={"/register"}
                className="btn btn-outline btn-primary btn-sm"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
