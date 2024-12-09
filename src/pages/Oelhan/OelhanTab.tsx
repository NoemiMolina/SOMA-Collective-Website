import React from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import oelhanImage from '../../assets/images/OelhanImgs/oelhanpic.jpg';
import anxietyGif from '../../assets/images/OelhanImgs/Anxiety.gif';
import './Oelhan.css';

const OelhanTab = () => (
    <>
        <img src={anxietyGif} alt="Broken Glass Animation" className="gif-left-large" />
        <div className="container">
            <h1 className="title">Oelhan</h1>
            <p className="animator">The Animator</p>
            <img src={oelhanImage} alt="Oelhan" className="oelhan-image" />
            <div className="socials">
                <p>socials: @oelhan.tv</p>
                <a href="https://www.instagram.com/oelhan.tv/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <SlSocialInstagram />
                </a>
                <a href="https://x.com/oelhan_tv" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '10px' }}>
                    <FaXTwitter />
                </a>
            </div>
            <div className="content">
                <p className="oelhanpresentation">
                    When emotions and sensationsd merge into an animated whirlwind at the boundaries of the human mind...
                    <br />
                    Oelhan, a established animator based in Paris, embordies this fusion. His creations skillfully blend 3D elements, constrasting color schemes, and striking visual treatments. His work is a profound exploration of the nuances of human emotions. Specifically, Oelhan delves into conflicting feelings and suppressed passions within us. Through his short animations, he manages to capture this captivating complexity with a playful touch.
                    <br />
                    Among his clients are prestigious brands such as Apple, Adobe, and Spotify. His works, some of which are presentend in the form of lenticular printes, have traveled across Europe to renowned animation exhibitions and festivals like Pictoplasma Berli and Motion Motion. Lately, his focus has been on translating his animated concepts into physical mediums.
                </p>
            </div>
        </div>
    </>
);

export default OelhanTab;
