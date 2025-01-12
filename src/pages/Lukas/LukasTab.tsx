import React from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import lukasImage from '../../assets/images/LukasImgs/lukaspic.jpg';
import Combo from '../../assets/images/LukasImgs/Combo.jpg';
import Opty from '../../assets/images/LukasImgs/Opty.jpg';
import UtopicCity from '../../assets/images/LukasImgs/UtopicCity.jpg';
// import Vanite from '../../assets/images/LukasImgs/Vanite.mp4';
import Hypnoz from '../../assets/images/LukasImgs/Hypnoz.gif';
import RonArad from '../../assets/images/LukasImgs/RonArad.jpg';
import './Lukas.css';

const OelhanTab = () => {
    const mail = 'jordan@oelhan.tv'; // demander l'adresse mail de Lukas car pas trouvée
    return (
        <div className="lukas-layout">
            <div className="artist-presentation">
                <div className="left-section">
                    <h1 className="title">Lukas</h1>
                    <p className="painter">The Painter</p>
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
                    <p className="lukasPresentation">
                        Lukas was born in 1989 in Abidjan, Ivory Coast where he spend his childhood. He then followed his parents to Indonesia where he grew up, finishing high school in Jakarta before moving to France.
                        <br />
                        After graduating from a film school and then from a sound design school in Nantes and Montepllier, he discovered painting at the of his studies, in parallel with his first passion, music. The two mediums allowed him to externalize and share, in his own way, his history, his sensitivity and his visions. Discovering himself as a synesthete, Lukas uses colors as a language, allowing him to spread his energy. Established in Paris since 2013, Lukas does not stop painting and presentes his works during numerous exhibitions and fairs in Paris and internationally. Thanks to a community of buyers and collectors, he improves, seeks, discovers, asserts and learns.
                        <br />
                        In 2016, he joined the prestigious Emaux de Longwy factory as an artist designer. A studio artist but still driven by the desire to deconstruct certain preconceived notions about art, he has been discreetly intervening since 2017 every summer on the Pont des Arts where he exhibits his works. It is also here that he met a curator of one of the largest platforms of NFT sales, and it is in 2021 that he joins the international salection of artists on SuperRare.com .
                        <br />
                        Currently working on new projects and collaborations, notably in Paris and Jaoan, 2023 will mark the end of a cycle and, like the stages of his various tips around the world, Paris becomes a "stopover" before a new great journer to Reunion Island.
                    </p>
                </div>
                <div className="right-section">
                    <div className="large-image-container">
                    <video controls width="950" margin-top="100px">
                            <img src={Hypnoz} alt="Hypnoz gif" className="large-image" />
                        </video>
                        <p className="art-caption">" Hypnoz "</p>
                    </div>
                    {/* <div className="large-image-container">
                        <video controls width="950">
                            <source src={Vanite} type="video/mp4" className="large-image" />
                        </video>
                        <p className="art-caption">" Vanité "</p>
                    </div> */}
                </div>
            </div>
            <div className="image-gallery">
                <div className="gallery-item">
                    <img src={UtopicCity} alt="Utopic City img" />
                    <p className="art-caption">" Utopic City "</p>
                </div>
                <div className="gallery-item">
                    <img src={Opty} alt="Opty img" />
                    <p className="art-caption">" Opty "</p>
                </div>
                <div className="gallery-item">
                    <img src={Combo} alt="Combo img" />
                    <p className="art-caption">" Combo "</p>
                </div>

                <div className="gallery-item">
                    <img src={RonArad} alt="Ron Arad img" />
                    <p className="art-caption">" Ron Arad "</p>
                </div>

            </div>
        </div>
    );
};

export default OelhanTab;
