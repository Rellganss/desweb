// components/TimPengembang.js
import React from "react";
import PengembangCard from "./PengembangCard";

const TimPengembang = () => {
  const pengembangList = [
    {
      id: 1,
      nama: "Darel Timothy Nasarani",
      posisi: "Front-end Developer",
      deskripsi:
        "Memiliki pengalaman dalam mengembangkan antarmuka pengguna yang responsif dan menarik.",
      foto: "link/darel.jpg",
    },
    {
      id: 2,
      nama: "Fatahillah Alif Arif",
      posisi: "Front-end Developer",
      deskripsi:
        "Memiliki pengalaman dalam mengembangkan antarmuka pengguna yang responsif dan menarik.",
      foto: "link/patel.jpg",
    },
    {
      id: 3,
      nama: "Shafa Putri Sasmito",
      posisi: "Front-end Developer",
      deskripsi:
        "Memiliki pengalaman dalam mengembangkan antarmuka pengguna yang responsif dan menarik.",
      foto: "link/shafa.jpg",
    },
    {
      id: 4,
      nama: "Yossi Ezra Afriani",
      posisi: "Front-end Developer",
      deskripsi:
        "Memiliki pengalaman dalam mengembangkan antarmuka pengguna yang responsif dan menarik.",
      foto: "link/yossi.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 p-8 rounded-md shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Tim Pengembang</h2>

      <div className="mt-8">
        {pengembangList.map((pengembang) => (
          <PengembangCard
            key={pengembang.id}
            nama={pengembang.nama}
            posisi={pengembang.posisi}
            deskripsi={pengembang.deskripsi}
            foto={pengembang.foto}
          />
        ))}
      </div>
    </div>
  );
};

export default TimPengembang;
