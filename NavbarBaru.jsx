import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import freedersLogo from '../assets/logo freeders.png';

const NavbarBaru = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLandingClick = () => {
        // Navigate to the Landing page
        window.location.href = '/landing';
    };

    const handleDaftarClick = () => {
        // Handle Daftar click action
    };

    const handleTentangClick = () => {
        // Handle Tentang click action
    };

    const handleKontakClick = () => {
        // Handle Kontak click action
    };

    const handleLogOutClick = () => {
        // Handle LogOut click action
    };

    return (
        <div>
        <div className="flex flex-col md:flex-row w-full  items-center bg-teal-700">
            <div className="flex flex-col md:flex-row items-center w-full  bg-teal-700">
            <div className="flex md:flex-row items-center sm:w-full xl:w-1/3 md:w-full lg:md-full w-full bg-teal-700 ">
                <img src={freedersLogo} alt="logo freeders" onClick={handleLandingClick} className="w-[100px] h-[100px] mr-2 cursor-pointer" />
                <input
                type="text"
                placeholder="Search"
                className="p-2 border rounded-full focus:outline-none w-64"
                />
                <div className="md:hidden ml-auto p-4 text-white cursor-pointer" onClick={toggleDropdown}>
                <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            <div className={`md:flex mr-auto flex-col md:flex-row gap-[30px]  w-full ${isDropdownOpen ? 'block' : 'hidden'}`}>
                <div className="md:flex p-4 text-white font-[Poppins] cursor-pointer" onClick={handleDaftarClick}>
                Daftar Sebagai Freelancer
                </div>
                <div className="md:flex p-4 text-white font-[Poppins] cursor-pointer" onClick={handleTentangClick}>
                Tentang
                </div>
                <div className="md:flex p-4 text-white font-[Poppins] cursor-pointer" onClick={handleKontakClick}>
                Kontak
                </div>
                <div className="md:flex p-4 text-white font-[Poppins] ml-auto cursor-pointer" onClick={handleLogOutClick}>
                LogOut
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default NavbarBaru;
