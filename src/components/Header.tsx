import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import logo from '../assets/somalogo/logo.svg';
import { HiOutlineEnvelope } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isArtistsDropdownOpen, setIsArtistsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsArtistsDropdownOpen(false);
    };

    const handleNavigation = (path: string) => {
        setIsMenuOpen(false);
        setIsArtistsDropdownOpen(false);
        navigate(path);
    };


    const toggleArtistsDropdown = () => {
        setIsArtistsDropdownOpen(!isArtistsDropdownOpen);
    };

    const mail = 'somacollective75@gmail.com';

    return (
        <header className="header">
            <div className="menu-button" onClick={toggleMenu}>
                <FiMenu style={{ fontSize: "60px" }} />
            </div>
            {isMenuOpen && (
                <div className="menu-list">
                    <div className="menu-item" onClick={() => handleNavigation("/")}>
                        Home
                    </div>
                    <div
                        className="menu-item"
                        onClick={toggleArtistsDropdown}
                    >
                        Artists
                    </div>
                    {isArtistsDropdownOpen && (
                        <div className="sub-menu-list">
                            <div className="sub-menu-item" onClick={() => handleNavigation("/LouisDazy")}>Louis Dazy</div>
                            <div className="sub-menu-item" onClick={() => handleNavigation("/Oelhantv")}>Oelhan</div>
                            <div className="sub-menu-item" onClick={() => handleNavigation("/Lightonart")}>Lighton</div>
                            <div className="sub-menu-item" onClick={() => handleNavigation("/Lukaswork")}>Lukas</div>
                        </div>
                    )}
                    <div className="menu-item" onClick={() => handleNavigation("/Exhibitions")}>
                        Events & Exhibitions
                    </div>
                </div>
            )}
            <div className="logo-container">
                <img src={logo} alt="Soma Collective Logo" className="logo" />
            </div>
            <div className="contact-button">
                <a href={`mailto:${mail}`} className="contact-link">
                    Contact us
                </a>
            </div>
        </header>
    );
};

export default Header;
