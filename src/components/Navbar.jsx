import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Pastikan Anda sudah menginstal dan mengonfigurasi React Router

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 w-full top-0 fixed">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-xl">FreeDers</Link>
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
        <ul className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <li><Link to="/beranda" className="text-white hover:text-gray-300">Beranda</Link></li>
          <li><Link to="/tentang" className="text-white hover:text-gray-300">Tentang</Link></li>
          <li><Link to="/layanan" className="text-white hover:text-gray-300">Layanan</Link></li>
          <li><Link to="/kontak" className="text-white hover:text-gray-300">Kontak</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
