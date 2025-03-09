import React from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import lukasImage from '../../assets/images/LukasImgs/lukaspic.jpg';
import './Lukas.css';


const LukasTab = () => {
    const mail = 'lukas.univers@gmail.com'
    const lukasImages = [
        {
            src: require('../../assets/images/LukasImgs/UtopicCity.jpg'),
            title: 'Utopic City'
        },
        {
            src: require('../../assets/images/LukasImgs/Vanite.gif'),
            title: 'Vanité'
        },
        {
            src: require('../../assets/images/LukasImgs/Opty.jpg'),
            title: 'Opty'
        },
        {
            src: require('../../assets/images/LukasImgs/Hypnoz.gif'),
            title: 'Hypnoz'
        },
        {
            src: require('../../assets/images/LukasImgs/DuckFiesta.jpg'),
            title: 'Duck Fiesta'
        }
    ]

    return (
        <div className="page-container artist">
            <div className="content-wrapper">
                <div className="presentation">
                    <h1 className="painter">The Painter</h1>
                    <h2 className="title artist"><strong>Lukas</strong></h2>
                    <img
                        src={lukasImage}
                        alt="Lukas img"
                    
                        className="lukas-image"
                    />
                    <p
                        className="lukasPresentation"
                     
                    >
                        Lukas, born in Ivoary Coast and raised in Indonesia and France, discovered his passion for painting and music alongside his academic journey. As a synesthete, he employs colors as his language to externalize his history, sensitivity and visions.
                        <br />
                        His art has been exhibited internationally, and in 2021, he joined the ranks of artists on SuperRare.com, while his creative journey continues with upcoming projects and collaborations in Paris and Japan.

                    </p>
                    <div className="socials" style={{ fontSize: '1em' }}>
                        <p><strong>socials: @lukas.works</strong></p>
                        <a href="https://www.instagram.com/lukas.works/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ fontSize: '1.5em', margin: '0 20px', color:'black'}}>
                            <SlSocialInstagram />
                        </a>
                        <a href="https://x.com/LUKASWORKS01" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ fontSize: '1.5em', margin: '0 20px', color:'black'}}>
                            <FaXTwitter />
                        </a>
                        <a href={`mailto:${mail}`} className="social-icon" style={{ fontSize: '1.5em', margin: '0 20px', color:'black'}}>
                            <MdMailOutline />
                        </a>
                    </div>
                </div>
                <div className="page-container__section artistSliderGallery">
                    <div className="artistSliderGallery-wrapper">
                        {[...lukasImages.slice(0), ...lukasImages.slice(0)].map((image, index) => (
                            <div key={index} className="page-container__section__item animPic artistSlide">
                                <img src={image.src} alt={image.title} />
                                <p className="art-caption lukas" style={{bottom:'25%', fontSize: '0.5em'}}>{`'${image.title}' `}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LukasTab;
