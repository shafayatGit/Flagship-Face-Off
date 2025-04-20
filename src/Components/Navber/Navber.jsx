import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import { Link, NavLink } from "react-router";

const Navber = () => {
  return (
    <>
      <div className="navbar p-0 bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "underline text-blue-500 translate-1 font-bold"
                      : "text-black"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "underline text-blue-500 translate-1"
                      : "text-black"
                  }
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "underline text-blue-500 translate-1"
                      : "text-black"
                  }
                  to={"/cart"}
                >
                  <FaShoppingCart size={18}></FaShoppingCart>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "underline text-blue-500 translate-1"
                      : "text-black"
                  }
                  to={"/favorites"}
                >
                  <MdBookmarkAdd size={20}></MdBookmarkAdd>
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="font-bold text-xl">
            FlagShipFaceOff
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className=" menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "underline text-blue-500 translate-1"
                    : "text-black"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "underline text-blue-500 translate-1"
                    : "text-black"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "underline text-blue-500 translate-1"
                    : "text-black"
                }
                to="/cart"
              >
                <FaShoppingCart size={18}></FaShoppingCart>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "underline text-blue-500 translate-1"
                    : "text-black"
                }
                to="/favorites"
              >
                <MdBookmarkAdd size={20}></MdBookmarkAdd>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navber;
