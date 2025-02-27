import React from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import polygonImage from '../../assets/images/PolygonImgs/polygonpic.jpg';
import './Polygon.css';

const PolygonTab = () => {
    const mail = 'contact@polygon1993.com'
    const polygonImages = [
        {
            src: require('../../assets/images/PolygonImgs/InnerColour.gif'),
            title: 'Inner Colour'
        },
        {
            src: require('../../assets/images/PolygonImgs/Zaora.jpg'),
            title: 'Zaora'
        },
        {
            src: require('../../assets/images/PolygonImgs/CathodeRayFusion.gif'),
            title: 'Cathode Ray Fusion'
        },
        {
            src: require('../../assets/images/PolygonImgs/Azure.gif'),
            title: 'Azure'
        }
    ]
    return (
        <div className="page-container">
            <div className="page-container__section">
                <div className="page-container__section__item">
                    <h1 className="title">Polygon1993</h1>
                    <p className="glitcher">The Glitcher</p>
                    <img src={polygonImage} alt="Polygon img" className="polygon-image" />
                    <div className="socials">
                        <p>socials: @POLYGON1993</p>
                        <a href="https://www.instagram.com/polygon1993/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <SlSocialInstagram />
                        </a>
                        <a href="https://x.com/Polygon1993?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaXTwitter />
                        </a>
                        <a href={`mailto:${mail}`} className="social-icon">
                            <MdMailOutline />
                        </a>
                    </div>
                    <p className="louisDazyPresentation" style={{ textAlign: "justify"}}>
                        When imperfection acts as a diving force for art and analog technology stands alongside digital evolution, the past, present, and future are one!
                        POLYGON1993 brings us into a glitch universe that represents his daily life: a distorted world where reality and imagination mingle.
                        <br />
                        POLYGON1993 is a visual artist, film director and media scenographer who has made a name for himself in the world of Glitch Art. His distinct style involves using old circuit bent video gear from the 80s and 90s to create glitchy distorted lines that come together to form portraits. His art is both nostalgic and innovative, blending old technology with creative ideas to create something truly original. His clients include prestigious artists and brands such as A$AP Rocky, Tame Impala, Charli XCX, Pantone, Sony Music, Warner Music and more.
                        <br />
                        POLYGON1993's work has been exhibited all around the world in many countries such as the USA, Japan, France, UK, Portugal, Italy, South Korea... and has garnered attention from art enthusiasts and collectors around the world. He continues to explore the possibilities of glitch art and circuit-bending, pushing the boundaries of what's possible with his medium.
                    </p>
                </div>
                {polygonImages.slice(0, 2).map((image, index) => (
                    <div key={index} className="page-container__section__item animPic artist">
                        <img src={image.src} alt={image.title} />
                        <p className="art-caption">{image.title}</p>
                    </div>
                ))}
            </div>
            <div className="page-container__section">
                {polygonImages.slice(2).map((image, index) => (
                    <div key={index} className="page-container__section__item animPic artist">
                        <img src={image.src} alt={image.title} />
                        <p className="art-caption">{image.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PolygonTab;