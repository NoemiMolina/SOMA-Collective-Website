import React from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import oelhanImage from '../../assets/images/OelhanImgs/oelhanpic.jpg';
import InnerDemonGoblin from '../../assets/images/OelhanImgs/InnerDemonGoblin.gif'
import Veil from '../../assets//images/OelhanImgs/Veil.gif'
import SelfSeeking from '../../assets//images/OelhanImgs/SelfSeeking.gif'
import Kaeru from '../../assets//images/OelhanImgs/Kaeru.gif'
import KabukuBipolar from '../../assets//images/OelhanImgs/KabukuBipolar.gif'
import Fire from '../../assets//images/OelhanImgs/Fire.gif'
import Anxiety from '../../assets//images/OelhanImgs/Anxiety.gif'
import './Oelhan.css';

const OelhanTab = () => {
    const mail = 'jordan@oelhan.tv';
    return (
        <div className="oelhan-layout">
            <div className="artist-presentation">
                <div className="left-section">
                    <h1 className="title">Oelhan</h1>
                    <p className="animator">The Animator</p>
                    <img src={oelhanImage} alt="Oelhan img" className="oelhan-image" />
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
                    <p className="oelhanPresentation">
                    When emotions and sensationsd merge into an animated whirlwind at the boundaries of the human mind...
                    <br />
                    Oelhan, a established animator based in Paris, embordies this fusion. His creations skillfully blend 3D elements, constrasting color schemes, and striking visual treatments. His work is a profound exploration of the nuances of human emotions. Specifically, Oelhan delves into conflicting feelings and suppressed passions within us. Through his short animations, he manages to capture this captivating complexity with a playful touch.
                    <br />
                    Among his clients are prestigious brands such as Apple, Adobe, and Spotify. His works, some of which are presentend in the form of lenticular printes, have traveled across Europe to renowned animation exhibitions and festivals like Pictoplasma Berli and Motion Motion. Lately, his focus has been on translating his animated concepts into physical mediums.
                    </p>
                </div>
                <div className="right-section">
                    <div className="large-image-container">
                        <img src={InnerDemonGoblin} alt="Inner Demon Goblin gif" className="large-image" />
                        <p className="art-caption">" Inner Demon Goblin "</p>
                    </div>
                    <div className="large-image-container">
                        <img src={Veil} alt="Veil gif" className="large-image" />
                        <p className="art-caption">" Veil "</p>
                    </div>
                </div>
            </div>
            <div className="image-gallery">
                <div className="gallery-item">
                    <img src={SelfSeeking} alt="Self Seeking gif" />
                    <p className="art-caption">" Self Seeking "</p>
                </div>
                <div className="gallery-item">
                    <img src={Fire} alt="Fire" />
                    <p className="art-caption">" Fire "</p>
                </div>
                <div className="gallery-item">
                    <img src={Anxiety} alt="Anxiety gif" />
                    <p className="art-caption">" Anxiety "</p>
                </div>
                <div className="gallery-item">
                    <img src={Kaeru} alt="Kaeru gif" />
                    <p className="art-caption">" Kaeru "</p>
                </div>
                <div className="gallery-item">
                    <img src={KabukuBipolar} alt="Kabuku Bipolar img" />
                    <p className="art-caption">" Kabuku Bipolar "</p>
                </div>
            </div>
        </div>
    );
};

export default OelhanTab;
