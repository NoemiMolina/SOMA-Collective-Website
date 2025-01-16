import React from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import oelhanImage from '../../assets/images/OelhanImgs/oelhanpic.jpg';
import './Oelhan.css';

const OelhanTab = () => {
    const mail = 'jordan@oelhan.tv';
    const oelhanImages = [
        {
            src: require('../../assets/images/OelhanImgs/InnerDemonGoblin.gif'),
            title: 'Inner Demon Goblin'
        },
        {
            src: require('../../assets/images/OelhanImgs/Veil.gif'),
            title: 'Veil'
        },
        {
            src: require('../../assets/images/OelhanImgs/SelfSeeking.gif'),
            title: 'Self Seeking'
        },
        {
            src: require('../../assets/images/OelhanImgs/Kaeru.gif'),
            title: 'Kaeru'
        },
        {
            src: require('../../assets/images/OelhanImgs/KabukuBipolar.gif'),
            title: 'Kabuku Bipolar'
        },
        {
            src: require('../../assets/images/OelhanImgs/Fire.gif'),
            title: 'Kabuku Bipolar'
        },
        {
            src: require('../../assets/images/OelhanImgs/Anxiety.gif'),
            title: 'Anxiety'
        },

    ]
    return (
        <div className="louisDazy-container">
            <div className="louisDazy-container__section">
                <div className="louisDazy-container__section__item">
                    <h1 className="title">Oelhan</h1>
                    <p className="animator">The Animator</p>
                    <img src={oelhanImage} alt="Oelhan Img" className="oelhan-image" />
                    <div className="socials">
                        <p>socials: @oelhan.tv</p>
                        <a href="https://www.instagram.com/oelhan.tv/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <SlSocialInstagram />
                        </a>
                        <a href="https://x.com/oelhan_tv" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaXTwitter />
                        </a>
                        <a href={`mailto:${mail}`} className="social-icon">
                            <MdMailOutline />
                        </a>
                    </div>
                    <p className="louisDazyPresentation">
                    When emotions and sensationsd merge into an animated whirlwind at the boundaries of the human mind...
                    <br />
                    Oelhan, a established animator based in Paris, embordies this fusion. His creations skillfully blend 3D elements, constrasting color schemes, and striking visual treatments. His work is a profound exploration of the nuances of human emotions. Specifically, Oelhan delves into conflicting feelings and suppressed passions within us. Through his short animations, he manages to capture this captivating complexity with a playful touch.
                    <br />
                    Among his clients are prestigious brands such as Apple, Adobe, and Spotify. His works, some of which are presentend in the form of lenticular printes, have traveled across Europe to renowned animation exhibitions and festivals like Pictoplasma Berli and Motion Motion. Lately, his focus has been on translating his animated concepts into physical mediums.
                    </p>
                </div>
                {oelhanImages.slice(0, 2).map((image, index) => (
                    <div key={index} className="louisDazy-container__section__item animPic">
                        <img src={image.src} alt={image.title} />
                        <p className="art-caption">{image.title}</p>      
                    </div>
                ))}
            </div>
            <div className="louisDazy-container__section">
                {oelhanImages.slice(2).map((image, index) => (
                    <div key={index} className="louisDazy-container__section__item animPic">
                        <img src={image.src} alt={image.title} />
                        <p className="art-caption">{image.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OelhanTab;