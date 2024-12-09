import React from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import lightonImage from '../../assets/images/LightonImgs/lightonpic.jpg';
import sevenGif from '../../assets/images/LightonImgs/7.gif';
import './Lighton.css';

const LightonartTab = () => (
    <>
        <img src={sevenGif} alt="seven Animation" className="gif-left-large" />
        <div className="container">
            <h1 className="title">Lighton</h1>
            <p className="illustrator">The Illustrator</p>
            <img src={lightonImage} alt="Lighton" className="lighton-image" />
            <div className="socials">
                <p>socials: @lightonart</p>
                <a href="https://www.instagram.com/lightonart/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <SlSocialInstagram />
                </a>
                <a href="https://www.threads.net/@lightonart" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '10px' }}>
                    <FaXTwitter />
                </a>
            </div>
            <div className="content">
                <p className="lightonpresentation">
                    Meet Lighton, a Paris-based artist whose creative journey spans across a diverse range of mediums, from illustration and painting to animation and occasional forays into sculpture. With a preofssional background rooted in the world of advertising, his work bears the imprints of this unique experience. Years spent witnessing his work torn and replaced in the advertising frames of the metro led to a profund metaphorical connection between the fragments of torn posters and the passage of time itself. Thease tear marks have since become a recurring motif in his creations.
                    <br />
                    One distinctive hallmark of Lighton's style is the portrayal of characters with a distinct blue skin tone. This choice transcend ethnic origins, allowing him to present humanity in its entirety, uniting people under a common visual language. Drawing inspiration from both pop art and urban art, his creations are an amalgamation of various influences and styles, adapting dynamically to the themes at hand
                </p>
            </div>
        </div>
    </>
);

export default LightonartTab;
