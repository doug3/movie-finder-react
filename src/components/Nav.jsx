import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
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

  return (
    <nav>
      <div className="bg-[url('../src/assets/il_3a.jpg')] flex justify-between p-2">
        <div className="align-middle p-4">
          <img
            className="h-8 md:h-12 pl-10"
            src="../src/assets/cover_1.png"
            alt="MovieFinder Logo"
          />
        </div>
        <div id="nav-links" className="text-center pr-4">
          {isMobile ? (
            <div className="modal">
              <button className="btn__menu" onClick="openMenu()">
                <i className="fa-solid fa-bars"></i>
              </button>
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
