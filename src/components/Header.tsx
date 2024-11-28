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
                    <div
                        className="menu-item"
                        onMouseEnter={() => setIsExhibitionTabOpen(true)}
                        onMouseLeave={() => setIsExhibitionTabOpen(false)}
                    >
                        Exhibitions and previous events<IoIosArrowForward style={{ fontSize: '14px' }} />
                        {isExhibitionsTabOpen && (
                            <div className="sub-menu-list">
                                <div className="sub-menu-item" onClick={() => handleNavigation('/nfccRoma')}>
                                    <span style={{ fontWeight: 'normal' }}>07/2024 :</span> <span style={{ fontWeight: 'bold' }}>NFCC ROME - DIGITAL FESTIVAL (ROMA)</span>
                                </div>
                                <div className="sub-menu-item" onClick={() => handleNavigation('/nfcLisbon')}>
                                    <span style={{ fontWeight: 'normal' }}>06/2024 :</span> <span style={{ fontWeight: 'bold' }}>NFC - DIGITAL FESTIVAL (LISBON)</span>
                                </div>
                                <div className="sub-menu-item" onClick={() => handleNavigation('/shinSekaInox')}>
                                    <span style={{ fontWeight: 'normal' }}>05/2024 :</span> <span style={{ fontWeight: 'bold' }}>SHIN SEKAI - NOX GALLERY (TOKYO)</span>
                                </div>
                                <div className="sub-menu-item" onClick={() => handleNavigation('/shinSekaiCourtyardHiro')}>
                                    <span style={{ fontWeight: 'normal' }}>05/2024 :</span> <span style={{ fontWeight: 'bold' }}>SHIN SEKAI - COURTYARD HIRO (TOKYO)</span>
                                </div>
                                <div className="sub-menu-item" onClick={() => handleNavigation('/shinSekaiSomsocGallery')}>
                                    <span style={{ fontWeight: 'normal' }}>05/2024 :</span> <span style={{ fontWeight: 'bold' }}>SHIN SEKAI - SOMSOC GALLERY (TOKYO)</span>
                                </div>
                                <div className="sub-menu-item" onClick={() => handleNavigation('/shinSekaiUltraSuperNew')}>
                                    <span style={{ fontWeight: 'normal' }}>05/2024 :</span> <span style={{ fontWeight: 'bold' }}>SHIN SEKAI - ULTRA SUPER NEW (TOKYO)</span>
                                </div>
                                <div className="sub-menu-item" onClick={() => handleNavigation('/echoUncommonGallery')}>
                                    <span style={{ fontWeight: 'normal' }}>04/2024 :</span> <span style={{ fontWeight: 'bold' }}>ECHO - UNCOMMON GALLERY (SEOUL)</span>
                                </div>
                                <div className="sub-menu-item" onClick={() => handleNavigation('/chromaCorGallery')}>
                                    <span style={{ fontWeight: 'normal' }}>03/2024 :</span> <span style={{ fontWeight: 'bold' }}>CHROMA - COR GALLERY (PARIS)</span>
                                </div>
                                <div className="sub-menu-item" onClick={() => handleNavigation('/EspritDeCorps')}>
                                    <span style={{ fontWeight: 'normal' }}>02/2024 :</span> <span style={{ fontWeight: 'bold' }}>ESPRIT DE CORPS - NFT FACTORY (PARIS)</span>
                                </div>
                                <div className="sub-menu-item" onClick={() => handleNavigation('/charitableSale')}>
                                    <span style={{ fontWeight: 'normal' }}>10/2023 :</span> <span style={{ fontWeight: 'bold' }}>CHARITABLE SALE - IHAM (PARIS)</span>
                                </div>
                                <div className="sub-menu-item" onClick={() => handleNavigation('/somaverse')}>
                                    <span style={{ fontWeight: 'normal' }}>09/2023 :</span> <span style={{ fontWeight: 'bold' }}>SOMAVERSE - NFT FACTORY (PARIS)</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
