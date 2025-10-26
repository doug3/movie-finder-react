import React, { useState, useEffect, use } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav>
      <div className="relative bg-[url('../src/assets/il_3a.jpg')] flex justify-between p-2">
        <div className="align-middle p-4">
          <img
            className="h-8 md:h-12 pl-10"
            src="../src/assets/cover_1.png"
            alt="MovieFinder Logo"
          />
        </div>
        <div id="nav-links" className="text-center align-middle pr-4">
          {isMobile ? (
            <div>
            <div className="text-4xl mt-2">
              <button className="border-none" onClick={openMenu}>
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
            {showMenu && (
              <div className="absolute top-0 right-0 bg-gray-200 rounded-lg shadow-lg z-50">
                <div className="flex flex-col p-2 space-y-4">
                  <button className="text-black text-4xl rounded-2xl p-1 m-1 " onClick={closeMenu}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                  <Link className="text-black bg-gradient-to-br from-red-200 to-blue-200 rounded-2xl p-1 m-1 border-2 border-gray-500" to="/" onClick={closeMenu}>
                    Home
                  </Link>
                  <Link className="text-black bg-gradient-to-br from-red-200 to-blue-200 rounded-2xl p-1 m-1 border-2 border-gray-500" to="/search" onClick={closeMenu}>
                    Search
                  </Link>
                  <Link className="text-black bg-gradient-to-br from-red-200 to-blue-200 rounded-2xl p-1 m-1 border-2 border-gray-500" to="/contact" onClick={closeMenu}>
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </div>
          ) : (
            <>
              <div className="text-black bg-gradient-to-br from-red-200 to-blue-200 rounded-2xl p-1 m-1 border-2 border-gray-500">
                <Link className="" to="/">
                  Home
                </Link>
              </div>
              <div className="text-black bg-gradient-to-br from-red-200 to-blue-200 rounded-2xl p-1 m-1 border-2 border-gray-500">
                <Link className="" to="/search">
                  Search
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
