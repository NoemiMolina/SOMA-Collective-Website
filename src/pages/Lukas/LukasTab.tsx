import React from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import lukasImage from '../../assets/images/LukasImgs/lukaspic.jpg';
import './Lukas.css';
interface CustomCSSProperties extends React.CSSProperties {
    '--image-url'?: string;
}

const LukasTab = () => {
    const mail = 'contact@polygon1993.com' // demander mail de Lukas
    const lukasImages = [
        {
            src: require('../../assets/images/LukasImgs/UtopicCity.jpg'),
            title: 'Utopic City'
        },
        {
            src: require('../../assets/images/LukasImgs/Combo.jpg'),
            title: 'Combo'
        },
        {
            src: require('../../assets/images/LukasImgs/Opty.jpg'),
            title: 'Opty'
        },
        {
            src: require('../../assets/images/LukasImgs/RonArad.jpg'),
            title: 'Ron Arad'
        }
    ]
    return (
        <div className="louisDazy-container">
            <div className="louisDazy-container__section">
                <div className="louisDazy-container__section__item">
                    <h1 className="title">Lukas</h1>
                    <p className="glitcher">The Painter</p>
                    <img src={lukasImage} alt="Lukas img" className="lukas-image" />
                    <div className="socials">
                        <p>socials: @lukas.works</p>
                        <a href="https://www.instagram.com/lukas.works/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <SlSocialInstagram />
                        </a>
                        <a href="https://x.com/LUKASWORKS01" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaXTwitter />
                        </a>
                        <a href={`mailto:${mail}`} className="social-icon">
                            <MdMailOutline />
                        </a>
                    </div>
                    <p className="louisDazyPresentation">
                        Lukas was born in 1989 in Abidjan, Ivory Coast where he spend his childhood. He then followed his parents to Indonesia where he grew up, finishing high school in Jakarta before moving to France.
                        <br />
                        After graduating from a film school and then from a sound design school in Nantes and Montepllier, he discovered painting at the of his studies, in parallel with his first passion, music. The two mediums allowed him to externalize and share, in his own way, his history, his sensitivity and his visions. Discovering himself as a synesthete, Lukas uses colors as a language, allowing him to spread his energy. Established in Paris since 2013, Lukas does not stop painting and presentes his works during numerous exhibitions and fairs in Paris and internationally. Thanks to a community of buyers and collectors, he improves, seeks, discovers, asserts and learns.
                        <br />
                        In 2016, he joined the prestigious Emaux de Longwy factory as an artist designer. A studio artist but still driven by the desire to deconstruct certain preconceived notions about art, he has been discreetly intervening since 2017 every summer on the Pont des Arts where he exhibits his works. It is also here that he met a curator of one of the largest platforms of NFT sales, and it is in 2021 that he joins the international salection of artists on SuperRare.com .
                        <br />
                        Currently working on new projects and collaborations, notably in Paris and Jaoan, 2023 will mark the end of a cycle and, like the stages of his various tips around the world, Paris becomes a "stopover" before a new great journer to Reunion Island.
                    </p>
                </div>
                {lukasImages.slice(0, 1).map((image, index) => (
                    <div key={index} className="louisDazy-container__section__item section--animPic">
                        <img src={image.src} alt={image.title} />
                        <div className="card-back" style={{ '--image-url': `url(${image.src})` } as CustomCSSProperties}>
                            <p>{`'${image.title}' `}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="louisDazy-container__section">
                {lukasImages.slice(2).map((image, index) => (
                    <div key={index} className="louisDazy-container__section__item section--animPic">
                        <img src={image.src} alt={image.title} />
                        <div className="card-back" style={{ '--image-url': `url(${image.src})` } as CustomCSSProperties}>
                            <p>{`'${image.title}' `}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LukasTab;