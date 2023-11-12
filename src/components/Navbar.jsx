import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 w-full top-0 fixed">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">FreeDers</div>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white hover:text-gray-300">Beranda</a></li>
          <li><a href="/tentang" className="text-white hover:text-gray-300">Tentang</a></li>
          <li><a href="/layanan" className="text-white hover:text-gray-300">Layanan</a></li>
          <li><a href="/kontak" className="text-white hover:text-gray-300">Kontak</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
