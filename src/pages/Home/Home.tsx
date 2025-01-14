import React from 'react';
import './Home.css';
import somalogo from '../../assets/somalogo/logo.svg';
import { useNavigate } from 'react-router-dom';
import SurpriseReset from '../../assets/images/LightonImgs/SurpriseReset.gif'

interface CustomCSSProperties extends React.CSSProperties {
    '--image-url'?: string;
}

const Home = () => {
    const navigate = useNavigate();

    const images = [
        {
            src: require('../../assets/images/OelhanImgs/InnerDemonTrustMe.gif'),
            title: 'Inner Demon Trust Me',
            artist: 'Oelhan',
            route: '/Oelhantv',
        },
        {
            src: require('../../assets/images/LightonImgs/SurpriseReset.gif'),
            title: 'Surprise Reset',
            artist: 'Lighton',
            route: '/Lightonart'

        },
        {
            src: require('../../assets/images/LukasImgs/BigStar.jpg'),
            title: 'Big Star',
            artist: 'Lukas',
            route: '/Lukaswork',
        },
        {
            src: require('../../assets/images/LightonImgs/NothingElseMatter.gif'),
            title: 'At this moment, Nothing else matter',
            artist: 'Lighton',
            route: '/Lightonart',
        },
        {
            src: require('../../assets/images/PolygonImgs/Zaora.jpg'),
            title: 'Zaora',
            artist: 'Polygon1993',
            route: '/Polygon',
        },
        {
            src: require('../../assets/images/OelhanImgs/Sailor.gif'),
            title: 'Sailor',
            artist: 'Oelhan',
            route: '/Oelhantv',
        },
        {
            src: require('../../assets/images/LouisDazyImgs/Blindsided.jpg'),
            title: 'Blindsided',
            artist: 'Louis Dazy',
            route: '/LouisDazy',
        },
        {
            src: require('../../assets/images/LightonImgs/Illumination.gif'),
            title: 'Illumination',
            artist: 'Lighton',
            route: '/Lightonart',
        },
        {
            src: require('../../assets/images/LouisDazyImgs/SicTransitGloriaMundi.gif'),
            title: 'Sic Transit Gloria Mundi',
            artist: 'Louis Dazy',
            route: '/LouisDazy',
        },
    ];
    return (
        <div className="louisDazy-container">
            <div className="louisDazy-container__section section--logo">
                <div className="louisDazy-container__section__item">
                    <img src={somalogo} alt="Logo" />
                </div>
            </div>
            <div className="louisDazy-container__section">
                {images.slice(0, 1).map((image, index) => (
                    <div key={index} className="louisDazy-container__section__item section--animPic">
                        <img src={image.src} alt={image.title} />
                        <div className="card-back" style={{ '--image-url': `url(${image.src})` } as CustomCSSProperties}>
                            <p>{`'${image.title}' by ${image.artist}`}</p>
                        </div>
                    </div>
                ))}
                <div className="louisDazy-container__section__item">
                    <h1 className="title">What's behind Soma?</h1>
                    <p>
                        SOMA Collective stands as a testament to the
                        boundless power of art to transcend borders, unite
                        diverse cultures, and connect people through a
                        shared creative experience.
                        <br />
                        Our collective mission
                        is to bridge the realms of the physical and the
                        digital, weaving together a tapestry of artistic
                        expression that blurs traditional boundaries. Our
                        passion lies in creating exhibitions worldwide that
                        blend physical and digital artworks, crafting truly
                        unique events that resonate across the globe.
                        <br />
                        In a world where the boundaries between the
                        tangible and the virtual continue to blur, SOMA
                        Collective embraces this transformation as an
                        opportunity for exploration. We believe that the
                        fusion of the physical and the digital is not a
                        mere convergence of mediums; it is the birth of a
                        new dimension of artistic expression. Our
                        exhibitions, which showcase a harmonious marriage
                        of diverse mediums, invite audiences to explore the
                        intersections of these worlds.
                        <br />
                        Through each physical artwork, visitors can feel the tangible
                        presence of the artist's hand, while digital
                        creations challenge the limits of the possible.
                        <br />
                        As we embark on this global journey, we aim to
                        offer audiences a unique experience that transcends
                        geographic borders. By presenting our exhibitions
                        worldwide, we enable people from diverse cultures
                        to immerse themselves in the profound beauty and
                        thought-provoking nature of our collective's
                        creations.
                        <br />
                        We believe that art is a universal
                        language, and through our exhibitions, we seek to
                        foster a global dialogue, encouraging the exchange
                        of ideas and perspectives.
                        <br />
                        As SOMA Collective continues to push the boundaries
                        of what is possible in the intersection of physical
                        and digital art, we invite you to join us on this
                        global artistic journey. Together, we can build a
                        world where creativity knows no bounds, and where
                        art serves as a bridge that unites us all.
                        <br />
                        In a world where the boundaries between the tangible and the virtual continue to blur, SOMA Collective embraces this transformation as an opportunity for exploration.
                    </p>
                </div>
                {images.slice(1, 2).map((image, index) => (
                    <div key={index} className="louisDazy-container__section__item section--animPic">
                        <img src={image.src} alt={image.title} />
                        <div className="card-back" style={{ '--image-url': `url(${image.src})` } as CustomCSSProperties}>
                            <p>{`'${image.title}' by ${image.artist}`}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="louisDazy-container__section">
                {images.slice(2).map((image, index) => (
                    <div key={index} className="louisDazy-container__section__item section--animPic">
                        <img src={image.src} alt={image.title} />
                        <div className="card-back" style={{ '--image-url': `url(${image.src})` } as CustomCSSProperties}>
                            <p>{`'${image.title}' by ${image.artist}`}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;