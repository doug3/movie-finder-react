import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="bg-gray-300 flex align-middle justify-between p-4">
        <div className="align-middlep-4">
          <img
            className="h-12"
            src="../src/assets/cover_1.png"
            alt="MovieFinder Logo"
          />
        </div>
        <div className="flex align-middle p-4">
          <Link className='text-red-600 underline' to='/'>Home</Link>
          <Link className='text-red-600 underline' to='/contact'>Contact</Link>
        </div>
        {/* <div className="modal">
                <button className="btn__menu" onClick="openMenu()">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick="closeMenu()">
                        <i className="fa-solid fa-times"></i>
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                        <Link to="/" className="menu__link" onClick="closeMenu()">Home</Link>
                        </li>
                        <li className="menu__list">
                        <Link to="/movies" className="menu__link" onClick="closeMenu()">Movies</Link>
                        </li>
                        <li className="menu__list">
                        <Link to="/contact" className="menu__link no-cursor" onClick="closeMenu()">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div> */}
      </div>
    </nav>
  );
}

export default Nav;
