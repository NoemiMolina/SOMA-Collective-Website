// import React, { useState } from 'react';
// import { FiMenu } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import './Header.css';

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isArtistsDropdownOpen, setIsArtistsDropdownOpen] = useState(false);
//     const navigate = useNavigate();

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const handleNavigation = (path: string) => {
//         setIsMenuOpen(false);
//         navigate(path);
//     };

//     return (
//         <header className="header">
//             <div className="menu-button" onClick={toggleMenu}>
//                 <FiMenu style={{ fontSize: '25px' }} />
//             </div>
//             {isMenuOpen && (
//                 <div className="menu-list">
//                     <div className="menu-item" onClick={() => handleNavigation('/')}>
//                         Home
//                     </div>
//                     <div 
//                         className="menu-item"
//                         onMouseEnter={() => setIsArtistsDropdownOpen(true)} 
//                         onMouseLeave={() => setIsArtistsDropdownOpen(false)}
//                     >
//                         Artists
//                     </div>
//                     <div 
//                         className={`artists-names ${isArtistsDropdownOpen ? 'visible' : ''}`}
//                         onMouseEnter={() => setIsArtistsDropdownOpen(true)} 
//                         onMouseLeave={() => setIsArtistsDropdownOpen(false)} 
//                     >
//                         {isArtistsDropdownOpen && (
//                             <div className="sub-menu-list">
//                                 <div className="sub-menu-item" onClick={() => handleNavigation('/Polygon')}>Polygon1993</div>
//                                 <div className="sub-menu-item" onClick={() => handleNavigation('/LouisDazy')}>Louis Dazy</div>
//                                 <div className="sub-menu-item" onClick={() => handleNavigation('/Oelhantv')}>Oelhan</div>
//                                 <div className="sub-menu-item" onClick={() => handleNavigation('/Lightonart')}>Lighton</div>
//                                 <div className="sub-menu-item" onClick={() => handleNavigation('/Lukaswork')}>Lukas</div>
//                             </div>
//                         )}
//                     </div>
//                     <div className="menu-item" onClick={() => handleNavigation('/Exhibitions')}>
//                         Events & Exhibitions
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// };

// export default Header;
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isArtistsDropdownOpen, setIsArtistsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsArtistsDropdownOpen(false); // Fermer le dropdown si le menu principal est fermé
    };

    const handleNavigation = (path: string) => {
        setIsMenuOpen(false); // Fermer tout le menu
        setIsArtistsDropdownOpen(false);
        navigate(path);
    };

    const toggleArtistsDropdown = () => {
        setIsArtistsDropdownOpen(!isArtistsDropdownOpen);
    };

    return (
        <header className="header">
            {/* Bouton du menu hamburger */}
            <div className="menu-button" onClick={toggleMenu}>
                <FiMenu style={{ fontSize: "25px" }} />
            </div>
            
            {/* Liste des éléments du menu */}
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
                    
                    {/* Sous-menu des artistes */}
                    {isArtistsDropdownOpen && (
                        <div className="sub-menu-list">
                            <div className="sub-menu-item" onClick={() => handleNavigation("/Polygon")}>Polygon1993</div>
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
        </header>
    );
};

export default Header;
