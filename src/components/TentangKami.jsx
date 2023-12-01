// components/TentangKami.js
import React from 'react';

const TentangKami = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-md shadow-md mb-8 relative group">
      <h2 className="text-2xl font-bold mb-4">Tentang Kami</h2>
      <p className="text-gray-700">
        FreeDers adalah platform yang diciptakan untuk mempertemukan para freelancer dengan pengguna yang membutuhkan jasa mereka.
      </p>
      <p className="text-gray-700 mt-4">
        Dengan visi untuk mendukung pertumbuhan profesionalisme di kalangan freelancer dan memudahkan pencarian jasa bagi pengguna, FreelanceHub menyediakan wadah yang aman dan efisien untuk berkolaborasi.
      </p>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity">
        <p className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          
        </p>
      </div>
    </div>
  );
};

export default TentangKami;
