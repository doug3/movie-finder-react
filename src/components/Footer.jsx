import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-300 p-4 text-center text-gray-800 invisible md:visible">
        <Link to="/contact">
          <span className="text-lg">Contact Us</span>
        </Link>
      </div>
      <div>
        <p className="text-xs absolute bottom-0 right-0">
          Copyright © MovieFinder 2025
        </p>
      </div>
    </>
  );
};

export default Footer;
