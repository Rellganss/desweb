// components/PengembangCard.js
import React from 'react';

const PengembangCard = ({ nama, posisi, deskripsi, foto }) => {
  return (
    <div className="flex items-center mb-8">
      <img src={foto} alt={`Foto ${nama}`} className="w-16 h-16 rounded-full mr-4" />
      <div>
        <h3 className="text-lg font-semibold">{nama}</h3>
        <p className="text-gray-600">{posisi}</p>
        <p className="text-gray-700 mt-2">{deskripsi}</p>
      </div>
    </div>
  );
};

export default PengembangCard;
