import React from "react";
import { CgMenuRightAlt } from "react-icons/cg";

const Nav = () => {
  return (
    <div className="top-0 left-0 fixed flex  items-center justify-between w-full px-6 py-2 text-white z-50 ">
      <div className=" cursor-pointer font-bold text-lg  ">
        <h1>PANTHER FITNESS</h1>
      </div>

      <div>
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-4" className="drawer-button btn ">
              <CgMenuRightAlt className="text-3xl" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
