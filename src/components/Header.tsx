import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isExhibitionsTabOpen, setIsExhibitionTabOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (path: string) => {
        setIsMenuOpen(false);
        navigate(path);
    };

    return (
        <header className="header">
            <div className="menu-button" onClick={toggleMenu}>
                <FiMenu style={{ fontSize: '25px' }} />
            </div>
            {isMenuOpen && (
                <div className="menu-list">
                    <div className="menu-item" onClick={() => handleNavigation('/')}>
                        Home <IoIosArrowForward style={{ fontSize: '14px' }} />
                    </div>
                    <div className="menu-item" onClick={() => handleNavigation('/Polygon')}>
                        Polygon1993 <IoIosArrowForward style={{ fontSize: '14px' }} />
                    </div>
                    <div className="menu-item" onClick={() => handleNavigation('/LouisDazy')}>
                        Louis Dazy <IoIosArrowForward style={{ fontSize: '14px' }} />
                    </div>
                    <div className="menu-item" onClick={() => handleNavigation('/Oelhantv')}>
                        Oelhan <IoIosArrowForward style={{ fontSize: '14px' }} />
                    </div>
                    <div className="menu-item" onClick={() => handleNavigation('/Lightonart')}>
                        Lighton <IoIosArrowForward style={{ fontSize: '14px' }} />
                    </div>
                    <div className="menu-item" onClick={() => handleNavigation('/Lukaswork')}>
                        Lukas <IoIosArrowForward style={{ fontSize: '14px' }} />
                    </div>
                    <div className="menu-item" onClick={() => handleNavigation('/Exhibitions')}>
                       Events & Exhibitions<IoIosArrowForward style={{ fontSize: '14px' }} />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
