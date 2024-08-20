import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function MainNavigation() {
  // const [isActive, setIsActive] = useState(false);


  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
  //   });
  // });

  let [showNav, setShowNav] = useState(false);

  function handleShowNav(action) {

    if (action === "open"){
        setShowNav((i) => true);
        // navRef.current.close

    } else if (action === "close"){
        setShowNav( (i) => false);
        
    }
  }

  return (
    <div>
      <header>
        <div className="md:hidden bg-gray-800 flex gap-5">
          <div >
            {!showNav ? (
              <button className="relative m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={() => handleShowNav("open")}>
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              </button>
            ) : (
              <button className="relative m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={() => handleShowNav("close")}>
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
       <div className= {`bg-gray-800 md:block ${showNav ? 'block' : 'hidden' }` }>
          <ul className="flex flex-col gap-3 md:flex-row md:gap-10 p-6 justify-center ">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "bg-gray-900 py-2 text-white rounded px-4"
                    : !isActive
                    ? "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    : ""
                }
              >
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/categories"}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "bg-gray-900 py-2 text-white rounded px-4"
                    : !isActive
                    ? "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    : ""
                }
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "bg-gray-900 py-2 text-white rounded px-4"
                    : !isActive
                    ? "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    : ""
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

