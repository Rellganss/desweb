// components/TentangKami.js
import React from "react";

const VisiMisi = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-md shadow-md mb-8 relative group">
      <h2 className="text-2xl font-bold mb-4">Visi Misi</h2>
      <p className="text-gray-700">
        Menjadi platform yang terkemuka dalam mempertemukan para freelancer
        dengan pengguna yang membutuhkan jasa mereka, menciptakan ekosistem
        kolaboratif yang mendukung pertumbuhan profesionalisme di kalangan
        freelancer, dan menjadi solusi terpercaya untuk kebutuhan proyek dan
        layanan freelance.
      </p>

      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity">
        <p className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></p>
      </div>
    </div>
  );
};

export default VisiMisi;
