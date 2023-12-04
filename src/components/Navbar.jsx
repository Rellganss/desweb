import React, { useState } from "react";
import { Link } from "react-router-dom";
import freedersLogo from "../assets/logo freeders.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-teal-700 p-1 w-full  top-0 fixed">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo FreeDers */}
          <img src={freedersLogo} alt="logo freeders" className="w-20 h-20 mr-2" />

          {/* Tulisan FreeDers */}
          <Link to="/" className="text-white font-bold text-xl">
            FreeDers
          </Link>
        </div>
        
        <div className="ml-20">
          {/* Kotak Pencarian dengan logo kaca lensa */}
          <div className="relative">
            <input
              type="text"
              placeholder=""
              className="p-2 pl-8 border rounded-full focus:outline-none w-64"
            />
            <svg
              className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-4.35-4.35M15 10.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0z"></path>
            </svg>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-20">
          <ul className="md:flex md:space-x-20">
            <li>
              <Link to="/daftarfreelancer" className="text-white hover:text-gray-300">
                Daftar sebagai Freelancer
              </Link>
            </li>
            <li>
              <Link to="/tentang" className="text-white hover:text-gray-300">
                Tentang
              </Link>
            </li>
            <li>
              <Link to="/kontak" className="text-white hover:text-gray-300">
                Kontak
              </Link>
            </li>
            <li>
              <Link to="http://localhost:5173/" className="text-white hover:text-gray-300">
                Logout
              </Link>
            </li>
          </ul>
        </div>


        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
