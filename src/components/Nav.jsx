import React, { useState, useEffect, use } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
      <div className="relative bg-[url('../src/assets/il_3a.jpg')] flex justify-between h-16 md:h-24">
        <div className="align-middle ml-0 p-4">
          <img
            className="h-8 md:h-16 pl-10"
            src="../src/assets/cover_1.png"
            alt="MovieFinder Logo"
          />
        </div>
        <div id="nav-links" className="text-center align-middle mr-4 pt-2">
          {isMobile ? (
            <div>
              <div className="text-3xl md:text-5xl mt-2">
                <button
                  className="border-none hover:scale-115"
                  onClick={openMenu}
                >
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
              {showMenu && (
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: '0%' }}
                  exit={{ x: "0%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    width: "30%",
                    height: "100vh",
                    background: "linear-gradient(to bottom, #e0e0e0, #ffffff)",
                    zIndex: 1000,
                  }}
                >
                  <div className="absolute w-full rounded-lg z-50">
                    <div className="flex flex-col p-4">
                      <button
                        className="text-black hover:scale-110 text-4xl md:text-6xl rounded-2xl border-2 border-gray-500 m-1"
                        onClick={closeMenu}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                      <Link
                        className="text-black hover:scale-105 bg-gradient-to-br from-red-200 to-blue-200 rounded-2xl p-1 m-1 border-2 border-gray-500"
                        to="/"
                        onClick={closeMenu}
                      >
                        Home
                      </Link>
                      <Link
                        className="text-black hover:scale-105 bg-gradient-to-br from-red-200 to-blue-200 rounded-2xl p-1 m-1 border-2 border-gray-500"
                        to="/search"
                        onClick={closeMenu}
                      >
                        Search
                      </Link>
                      <Link
                        className="text-black hover:scale-105 bg-gradient-to-br from-red-200 to-blue-200 rounded-2xl p-1 m-1 border-2 border-gray-500"
                        to="/contact"
                        onClick={closeMenu}
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ) : (
            <>
              <div className="text-black hover:scale-110 bg-gradient-to-br from-red-200 to-blue-200 rounded-2xl p-1 m-1 border-2 border-gray-500">
                <Link className="" to="/">
                  Home
                </Link>
              </div>
              <div className="text-black hover:scale-110 bg-gradient-to-br from-red-200 to-blue-200 rounded-2xl p-1 m-1 border-2 border-gray-500">
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
