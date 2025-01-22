import React from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import louisDazyImage from '../../assets/images/LouisDazyImgs/louisdazypic.jpg';
import './LouisDazy.css';

const LouisDazyTab = () => {
    const mail = 'louis.dazy@gmail.com';
    const louisDazyImages = [
        {
            src: require('../../assets/images/LouisDazyImgs/TechNoir.gif'),
            title: 'Tech Noir'
        },
        {
            src: require('../../assets/images/LouisDazyImgs/YoungHearts.gif'),
            title: 'Young Hearts'
        },
        {
            src: require('../../assets/images/LouisDazyImgs/ParisienneMoonlight.jpg'),
            title: 'Parisienne Moon light'
        },
        {
            src: require('../../assets/images/LouisDazyImgs/Smokescreens.gif'),
            title: 'Smokescreens'
        },
        {
            src: require('../../assets/images/LouisDazyImgs/Yearning.gif'),
            title: 'Yearning'
        },
        {
            src: require('../../assets/images/LouisDazyImgs/Escapism.jpg'),
            title: 'Escapism'
        },
        {
            src: require('../../assets/images/LouisDazyImgs/CollapseWithLight.gif'),
            title: 'Collapse With Light'
        },
    ]

    return (
        <div className="page-container artist">
            <div className="content-wrapper">
                <div className="presentation">
                    <h1 className="photographer">The Photographer</h1>
                    <h2 className="title-artist" ><strong>Louis Dazy</strong></h2>
                    <img
                        src={louisDazyImage}
                        alt="Louis Dazy img"
                        style={{ maxWidth: '40%', borderRadius: '2%', marginTop: '2%' }}
                        className="louisDazy-image"
                    />
                    <p
                        className="louisDazyPresentation"
                        style={{ textAlign: "justify", fontSize: "1em", maxWidth: '50%', marginLeft: '30%', marginRight: '30%', fontFamily: 'Futura Condensed, sans-serif' }}
                    >
                        Louis Dazy, a Paris-based conceptual photographer and visual artist, skillfully blends portraiture, street photography, and light manipulation to craft evocative, cinematic images.
                        <br />
                        Through techniques like double exposure and digital collage, he conjures images imbued with nostalgia and melancholy.
                        <br />
                        Dazy's fusing elements from various eras and cultures, creating a visual narrative that's captivating and thought-provoking.
                    </p>
                    <div className="socials" style={{fontSize: '1em'}}>
                        <p><strong>socials: @louisdazy</strong></p>
                        <a href="https://www.instagram.com/louisdazy/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{fontSize: '1em', margin: '0 20px'}}>
                            <SlSocialInstagram />
                        </a>
                        <a href="https://x.com/LouisDazy" target="_blank" rel="noopener noreferrer" className="social-icon" style={{fontSize: '1em', margin: '0 20px'}}>
                            <FaXTwitter />
                        </a>
                        <a href={`mailto:${mail}`} className="social-icon" style={{fontSize: '1em', margin: '0 20px'}}>
                            <MdMailOutline />
                        </a>
                    </div>
                </div>
                <div className="page-container__section artistSliderGallery">
                    <div className="artistSliderGallery-wrapper">
                        {[...louisDazyImages.slice(0), ...louisDazyImages.slice(0)].map((image, index) => (
                            <div key={index} className="page-container__section__item animPic artistSlide" style={{maxWidth:'400px', maxHeight:'550px', marginTop:'1%'}}>
                                <img src={image.src} alt={image.title} />
                                <p className="art-caption artist" style={{ fontSize: '0.5em' }}>{`'${image.title}' `}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LouisDazyTab;
