import React from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
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
        <div className="louisDazy-container">
            <div className="louisDazy-container__section">
                <div className="louisDazy-container__section__item">
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
                    <p className="louisDazyPresentation">
                        Meet Lighton, a Paris-based artist whose creative journey spans across a diverse range of mediums, from illustration and painting to animation and occasional forays into sculpture. With a preofssional background rooted in the world of advertising, his work bears the imprints of this unique experience. Years spent witnessing his work torn and replaced in the advertising frames of the metro led to a profund metaphorical connection between the fragments of torn posters and the passage of time itself. Thease tear marks have since become a recurring motif in his creations.
                        <br />
                        One distinctive hallmark of Lighton's style is the portrayal of characters with a distinct blue skin tone. This choice transcend ethnic origins, allowing him to present humanity in its entirety, uniting people under a common visual language. Drawing inspiration from both pop art and urban art, his creations are an amalgamation of various influences and styles, adapting dynamically to the themes at hand.
                    </p>
                </div>
                {lightonImages.slice(0, 2).map((image, index) => (
                    <div key={index} className="louisDazy-container__section__item animPic">
                        <img src={image.src} alt={image.title} />
                        <p className="art-caption">{image.title}</p>    
                    </div>
                ))}
            </div>
            <div className="louisDazy-container__section">
                {lightonImages.slice(2).map((image, index) => (
                    <div key={index} className="louisDazy-container__section__item animPic">
                        <img src={image.src} alt={image.title} />
                        <p className="art-caption">{image.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LightonartTab;