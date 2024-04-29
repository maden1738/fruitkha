import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  function changeBackground() {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={`wrapper fixed top-0 z-10 flex justify-between py-5 font-open text-white ${navbar ? "bg-primary " : " bg-transparent "} transition-colors  duration-500 ease-in-out`}
    >
      <div>
        <img src={logo} alt="" className=" w-[150px]" />{" "}
      </div>
      <nav className="my-auto font-bold">
        <ul className="flex items-center gap-7">
          <li className="hover:text-accent">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-accent">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-accent">
            <Link to="/pages">Pages</Link>
          </li>
          <li className="hover:text-accent">
            <Link to="/news">News</Link>
          </li>
          <li className="hover:text-accent">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-accent">
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-7 ">
        <FaShoppingCart className="cursor-pointer hover:text-accent" />
        <FaSearch className="cursor-pointer hover:text-accent" />
      </div>
    </div>
  );
}
