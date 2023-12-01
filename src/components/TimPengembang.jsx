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
      foto: "link/foto-john-doe.jpg",
    },
    {
      id: 2,
      nama: "Fatahillah Alif Arif",
      posisi: "Front-end Developer",
      deskripsi:
        "Ahli di bidang pengembangan server dan database, dengan fokus pada keamanan data.",
      foto: "link/foto-jane-smith.jpg",
    },
    {
      id: 3,
      nama: "Shafa Putri Sasmito",
      posisi: "Front-end Developer",
      deskripsi:
        "Spesialis dalam merancang antarmuka pengguna yang intuitif dan estetis.",
      foto: "link/foto-bob-johnson.jpg",
    },
    {
      id: 4,
      nama: "Yossi Ezra Afriani",
      posisi: "Front-end Developer",
      deskripsi:
        "Pengembang yang memiliki keahlian di kedua sisi, baik front-end maupun back-end.",
      foto: "link/foto-eva-gonzalez.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 p-8 rounded-md shadow-md mb-8 relative group">
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

      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity">
        <p className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></p>
      </div>
    </div>
  );
};

export default TimPengembang;
