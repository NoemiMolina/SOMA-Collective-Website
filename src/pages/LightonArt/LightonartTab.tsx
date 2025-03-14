import React from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { MdMailOutline } from "react-icons/md";
import { FaThreads } from "react-icons/fa6";
import lightonImage from '../../assets/images/LightonImgs/lightonpic.jpg'
import './Lighton.css';

const LightonartTab = () => {
    const mail = 'yohanquintar@gmail';
    const lightonImages = [
        {
            src: require('../../assets/images/LightonImgs/PopCultureIsOurs.gif'),
            title: 'Pop Culture is Ours'
        },
        {
            src: require('../../assets/images/LightonImgs/EmotionalDamages.jpg'),
            title: 'Emotional Damages'
        },
        {
            src: require('../../assets/images/LightonImgs/SurpriseReset.gif'),
            title: 'Surprise Reset'
        },
        {
            src: require('../../assets/images/LightonImgs/UneDernièreCigarette.gif'),
            title: 'Une Dernière Cigarette'
        },
        {
            src: require('../../assets/images/LightonImgs/Redemption.gif'),
            title: 'Redemption'
        },

    ]

    return (
        <div className="page-container artist">
            <div className="content-wrapper">
                <div className="presentation">
                    <h1 className="illustrator">The Illustrator</h1>
                    <h2 className="title artist"><strong>Lighton</strong></h2>
                    <img
                        src={lightonImage}
                        alt="Lighton img"
                  
                        className="lighton-image"
                    />
                    <p
                        className="lightonPresentation"
      
                    >
                        Meet Lighton, a versatile Paris-based artist with a background in advertising who draws inspiration from torn posters in the metro.
                        <br />
                        His distinctive style features characters with blue skin tones, transcending ethnic origins and uniting humanity under a unique visual language that blends influences from pop art and urban art.
                    </p>
                    <div className="socials" style={{ fontSize: '1em' }}>
                        <p><strong>socials: @lightonart</strong></p>
                        <a href="https://www.instagram.com/lightonart/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ fontSize: '1.5em', margin: '0 20px', color:'black'}}>
                            <SlSocialInstagram />
                        </a>
                        <a href="https://www.threads.net/@lightonart" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ fontSize: '1.5em', margin: '0 20px', color:'black'}}>
                            <FaThreads />
                        </a>
                        <a href={`mailto:${mail}`} className="social-icon" style={{ fontSize: '1.5em', margin: '0 20px', color:'black'}}>
                            <MdMailOutline />
                        </a>
                    </div>
                </div>
                <div className="page-container__section artistSliderGallery">
                    <div className="artistSliderGallery-wrapper">
                        {[...lightonImages.slice(0), ...lightonImages.slice(0)].map((image, index) => (
                            <div key={index} className="page-container__section__item animPic artistSlide">
                                <img src={image.src} alt={image.title} />
                                <p className="art-caption lighton" style={{bottom:'25%', fontSize:'0.5em'}}>{`'${image.title}' `}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LightonartTab;
