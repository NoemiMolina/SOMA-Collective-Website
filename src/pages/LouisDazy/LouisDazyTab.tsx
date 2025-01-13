import React from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import louisDazyImage from '../../assets/images/LouisDazyImgs/louisdazypic.jpg';
import TechNoir from '../../assets/images/LouisDazyImgs/TechNoir.gif';
import YoungHearts from '../../assets/images/LouisDazyImgs/YoungHearts.gif';
import ParisienneMoonlight from '../../assets/images/LouisDazyImgs/ParisienneMoonlight.jpg';
import Smokescreens from '../../assets/images/LouisDazyImgs/Smokescreens.gif';
import Yearning from '../../assets/images/LouisDazyImgs/Yearning.gif';
import Escapism from '../../assets/images/LouisDazyImgs/Escapism.jpg';
import CollapseWithLight from '../../assets/images/LouisDazyImgs/CollapseWithLight.gif'
import './LouisDazy.css';

const LouisDazyTab = () => {
    const mail = 'louis.dazy@gmail.com';
    return (
        <div className="louisDazy-container">
            <div className="louisDazy-container__section">
                <div className="louisDazy-container__section__item">
                    <h1 className="title">Louis Dazy</h1>
                    <p className="photographer">The Photographer</p>
                    <img src={louisDazyImage} alt="Louis Dazy img" className="louisDazy-image" />
                    <div className="socials">
                        <p>socials: @louisdazy</p>
                        <a href="https://www.instagram.com/louisdazy/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <SlSocialInstagram />
                        </a>
                        <a href="https://x.com/LouisDazy" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaXTwitter />
                        </a>
                        <a href={`mailto:${mail}`} className="social-icon">
                            <MdMailOutline />
                        </a>
                    </div>
                    <p className="louisDazyPresentation">
                        Louis Dazy is a conceptual photographer and visual artist based in Paris, France. His approach combines portraiture, street photography and light work to create highly evocative, cinematic images. Dazy brings layered meaning to this images through the process of double exposure on film and digital collage. His images are created out of velvety darkness, glowing neon and starry sparks of light, carrying all the potency of a dream or a still from a movie. He takes an intuitive approach to convey feelings of nostalgia and melancholy with many of his works capturing outward glamour alongside private contemplation.
                        <br />
                        Each image created a poignant moment that implies deep emotion and ongoing action, as such his work is closely aligned with imagery we are more familiar with music videos and Film Noir. He also incorporates text, often in the form of neon sign writing, addind an additional layer of meaning, creating plot points through the confluence of the imagery, color and words. Overall Dazy's work carries us through a heady timeless flow which epitomizes the glamour of the 1950's, the sexuality of the 1970's and the high pressure of the 1980's, blending French film styling with illuminated Asian super cities and American diner aesthetics.
                    </p>
                </div>
                <div className="louisDazy-container__section__item">
                    <img src={TechNoir} alt="Tech Noir gif" />
                    <p className="art-caption">" Tech Noir "</p>
                </div>
                <div className="louisDazy-container__section__item">
                    <img src={CollapseWithLight} alt="Collapse With Light gif" />
                    <p className="art-caption">" Collapse With Light "</p>
                </div>
            </div>
            <div className="louisDazy-container__section">
                <div className="louisDazy-container__section__item">
                    <img src={YoungHearts} alt="Young Hearts gif" />
                    <p className="art-caption">" Young Hearts "</p>
                </div>
                <div className="louisDazy-container__section__item">
                    <img src={ParisienneMoonlight} alt="Parisienne MoonLight img" />
                    <p className="art-caption">" Parisienne Moonlight "</p>
                </div>
                <div className="louisDazy-container__section__item">
                    <img src={Yearning} alt="Yearning gif" />
                    <p className="art-caption">" Yearning "</p>
                </div>
                <div className="louisDazy-container__section__item">
                    <img src={Smokescreens} alt="Smokescreens gif" />
                    <p className="art-caption">" Smokescreens "</p>
                </div>
                <div className="louisDazy-container__section__item">
                    <img src={Escapism} alt="Escapism img" />
                    <p className="art-caption">" Escapism "</p>
                </div>
            </div>

        </div>
    );
};

export default LouisDazyTab;