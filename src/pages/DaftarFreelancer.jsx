// components/DaftarFreelancerForm.js
import React, { useState } from "react";

const DaftarFreelancer = () => {
  const [formData, setFormData] = useState({
    fotoProfil: "",
    nama: "",
    username: "",
    email: "",
    noHp: "",
    tglLahir: "",
    areaTempatTinggal: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, fotoProfil: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Pendaftaran Freelancer:", formData);
    setFormData({
      fotoProfil: "",
      nama: "",
      username: "",
      email: "",
      noHp: "",
      tglLahir: "",
      areaTempatTinggal: "",
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Daftar Sebagai Freelancer</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 text-center">
          <label htmlFor="fotoProfil" className="block text-gray-700 text-sm font-bold mb-2">
            Foto Profil:
          </label>
          <div className="relative inline-block">
            <div className="rounded-full overflow-hidden border-2 border-blue-500 w-20 h-20">
              <img
                src={formData.fotoProfil}
                alt="Foto Profil"
                className="w-full h-full object-cover"
              />
            </div>
            <input
              type="file"
              accept="image/*"
              name="fotoProfil"
              id="fotoProfil"
              onChange={handleFotoChange}
              className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="nama" className="block text-gray-700 text-sm font-bold mb-2">
            Nama:
          </label>
          <input
            type="text"
            name="nama"
            id="nama"
            value={formData.nama}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username:
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="noHp" className="block text-gray-700 text-sm font-bold mb-2">
            No HP:
          </label>
          <input
            type="tel"
            name="noHp"
            id="noHp"
            value={formData.noHp}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tglLahir" className="block text-gray-700 text-sm font-bold mb-2">
            Tanggal Lahir:
          </label>
          <input
            type="date"
            name="tglLahir"
            id="tglLahir"
            value={formData.tglLahir}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="areaTempatTinggal" className="block text-gray-700 text-sm font-bold mb-2">
            Area Tempat Tinggal:
          </label>
          <input
            type="text"
            name="areaTempatTinggal"
            id="areaTempatTinggal"
            value={formData.areaTempatTinggal}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Daftar
        </button>
      </form>
    </div>
  );
};

export default DaftarFreelancer;
