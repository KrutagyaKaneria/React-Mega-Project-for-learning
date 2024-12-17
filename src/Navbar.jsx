import React from "react";
import { NavLink,Outlet} from "react-router-dom";
import './index.css'
import AboutUs from "./Aboutus/aboutus";
export default function Navbar(){

    return(
        <>
       <nav className="bg-blue-400 text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md ${
                    isActive ? "bg-blue-500 text-white" : "hover:bg-blue-800"
                  }`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/api1"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md ${
                    isActive ? "bg-blue-500 text-white" : "hover:bg-blue-800"
                  }`
                }
              >
                The Meals
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/api2"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md ${
                    isActive ? "bg-blue-500 text-white" : "hover:bg-blue-800"
                  }`
                }
              >
                Cocktails
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/api3"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md ${
                    isActive ? "bg-blue-500 text-white" : "hover:bg-blue-800"
                  }`
                }
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/api4"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md ${
                    isActive ? "bg-blue-500 text-white" : "hover:bg-blue-800"
                  }`
                }
              >
                Banks Details
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container mx-auto mt-6 p-4">
        <Outlet />
      </main>
        </>
    );
}

