import React from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import lightonImage from '../../assets/images/LightonImgs/lightonpic.jpg'
import PopCultureIsOurs from '../../assets/images/LightonImgs/PopCultureIsOurs.gif'
import SurpriseReset from '../../assets/images/LightonImgs/SurpriseReset.gif'
import EmotionalDamages from '../../assets/images/LightonImgs/EmotionalDamages.jpg'
import EyezOnYou from '../../assets/images/LightonImgs/EyezOnYou.jpg'
import Illumination from '../../assets/images/LightonImgs/Illumination.gif'
import UneDernièreCigarette from '../../assets/images/LightonImgs/UneDernièreCigarette.gif'
import Redemption from '../../assets/images/LightonImgs/Redemption.gif'

import './Lighton.css';

const LightonartTab = () => {
    const mail = 'yohanquintar@gmail';
    return (
        <div className="lighton-layout">
            <div className="artist-presentation">
                <div className="left-section">
                    <h1 className="title">Lighton</h1>
                    <p className="illustrator">The Illustrator</p>
                    <img src={lightonImage} alt="Lighton img" className="lighton-image" />
                    <div className="socials">
                        <p>socials: @lightonart</p>
                        <a href="https://www.instagram.com/lightonart/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <SlSocialInstagram />
                        </a>
                        <a href="https://www.threads.net/@lightonart" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaXTwitter />
                        </a>
                        <a href={`mailto:${mail}`} className="social-icon">
                            <MdMailOutline />
                        </a>
                    </div>
                    <p className="lightonPresentation">
                        Meet Lighton, a Paris-based artist whose creative journey spans across a diverse range of mediums, from illustration and painting to animation and occasional forays into sculpture. With a preofssional background rooted in the world of advertising, his work bears the imprints of this unique experience. Years spent witnessing his work torn and replaced in the advertising frames of the metro led to a profund metaphorical connection between the fragments of torn posters and the passage of time itself. Thease tear marks have since become a recurring motif in his creations.
                        <br />
                        One distinctive hallmark of Lighton's style is the portrayal of characters with a distinct blue skin tone. This choice transcend ethnic origins, allowing him to present humanity in its entirety, uniting people under a common visual language. Drawing inspiration from both pop art and urban art, his creations are an amalgamation of various influences and styles, adapting dynamically to the themes at hand
                    </p>
                </div>
                <div className="right-section">
                    <div className="large-image-container">
                        <img src={EmotionalDamages} alt="Emotional Damages gif" className="large-image" />
                        <p className="art-caption">" Emotional Damages "</p>
                    </div>
                    <div className="large-image-container">
                        <img src={PopCultureIsOurs} alt="Pop Culture Is Ours gif" className="large-image" />
                        <p className="art-caption">" Pop Culture Is Ours  "</p>
                    </div>
                </div>
            </div>
            <div className="image-gallery">
                <div className="gallery-item">
                    <img src={UneDernièreCigarette} alt="Une Dernière Cigarette img" />
                    <p className="art-caption">" Une Dernière Cigarette "</p>
                    
                </div>
                <div className="gallery-item">
                    <img src={Illumination} alt="Illumination gif" />
                    <p className="art-caption">" Illumination "</p>
                </div>
                <div className="gallery-item">
                    <img src={Redemption} alt="Redemption gif" />
                    <p className="art-caption">" Redemption "</p>
                </div>
            </div>
        </div>
    );
};

export default LightonartTab;
