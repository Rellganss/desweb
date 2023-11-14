import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 w-full top-0 fixed">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">FreeDers</div>
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
          <li><a href="/" className="text-white hover:text-gray-300">Beranda</a></li>
          <li><a href="/tentang" className="text-white hover:text-gray-300">Tentang</a></li>
          <li><a href="/layanan" className="text-white hover:text-gray-300">Layanan</a></li>
          <li><a href="/kontak" className="text-white hover:text-gray-300">Kontak</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
