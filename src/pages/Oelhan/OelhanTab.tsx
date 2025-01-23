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
        <div className="page-container artist">
            <div className="content-wrapper">
                <div className="presentation">
                    <h1 className="animator">The Animator</h1>
                    <h2 className="title artist"><strong>Oelhan</strong></h2>
                    <img
                        src={oelhanImage}
                        alt="Oelhan img"
                        style={{ maxWidth: '40%', borderRadius: '2%', marginTop: '2%' }}
                        className="oelhan-image"
                    />
                    <p
                        className="oelhanPresentation"
                        style={{ textAlign: "justify", fontSize: "1em", maxWidth: '50%', marginLeft: '30%', marginRight: '30%', fontFamily: 'Futura Condensed, sans-serif' }}
                    >
                        Oelhan, a Paris-based animator, expertly melds 3D elements and striking visuals to explore intricat ehumate emotions, particulary the interplay of conflicting feelings and suppressed passions.
                        <br />
                        His work has been featured at renowned animation exhibitions and festivals, with recent emphasis on translating his animated concepts into physical forms, drawing clients from prestigious brands like Apple, Adobe and Spotifiy.

                    </p>
                    <div className="socials" style={{ fontSize: '1em' }}>
                        <p><strong>socials: @oelhan.tv</strong></p>
                        <a href="https://www.instagram.com/oelhan.tv/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ fontSize: '1.5em', margin: '0 20px' }}>
                            <SlSocialInstagram />
                        </a>
                        <a href="https://x.com/oelhan_tv" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ fontSize: '1.5em', margin: '0 20px' }}>
                            <FaXTwitter />
                        </a>
                        <a href={`mailto:${mail}`} className="social-icon" style={{ fontSize: '1.5em', margin: '0 20px' }}>
                            <MdMailOutline />
                        </a>
                    </div>
                </div>
                <div className="page-container__section artistSliderGallery">
                    <div className="artistSliderGallery-wrapper">
                        {[...oelhanImages.slice(0), ...oelhanImages.slice(0)].map((image, index) => (
                            <div key={index} className="page-container__section__item animPic artistSlide">
                                <img src={image.src} alt={image.title} />
                                <p className="art-caption artist" style={{bottom:'25%'}}>{`'${image.title}' `}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OelhanTab;
