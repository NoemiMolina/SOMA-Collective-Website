import React from 'react';
import './Home.css';
import somalogo from '../../assets/somalogo/logo.jpg';
import presentation from '../../assets/images/presentation.jpg';
import { useNavigate } from 'react-router-dom';

interface CustomCSSProperties extends React.CSSProperties {
    '--image-url'?: string;
}

const Home = () => {
    const navigate = useNavigate();

    const presentationImages = [
        {
            src: require('../../assets/images/LouisDazyImgs/Eva.jpg'),
            title: 'Eva',
            artist: 'Louis Dazy',
            route: '/LouisDazy',
        },
        {
            src: require('../../assets/images/OelhanImgs/Sailor.gif'),
            title: 'Sailor',
            artist: 'Oelhan',
            route: '/Oelhantv',
            
        },
        {
            src: require('../../assets/images/PolygonImgs/Zaora.jpg'),
            title: 'Zaora',
            artist: 'Polygon1993',
            route: '/Polygon',
        }
     
    ];

    return (
        <div className="container">
            <img src={somalogo} alt="Logo" className="logo" />
            <div className="presentation-container">
                <img
                    src={presentation}
                    alt="Presentation pic"
                    className="presentationPic"
                />
                <div className="text-columns">
                    <div className="text-column">
                        <h1 className="title">What's behind Soma ?</h1>
                        <p>
                            SOMA Collective stands as a testament to the
                            boundless power of art to transcend borders, unite
                            diverse cultures, and connect people through a
                            shared creative experience. Our collective mission
                            is to bridge the realms of the physical and the
                            digital, weaving together a tapestry of artistic
                            expression that blurs traditional boundaries. Our
                            passion lies in creating exhibitions worldwide that
                            blend physical and digital artworks, crafting truly
                            unique events that resonate across the globe.
                        </p>
                        <p>
                            In a world where the boundaries between the
                            tangible and the virtual continue to blur, SOMA
                            Collective embraces this transformation as an
                            opportunity for exploration. We believe that the
                            fusion of the physical and the digital is not a
                            mere convergence of mediums; it is the birth of a
                            new dimension of artistic expression. Our
                            exhibitions, which showcase a harmonious marriage
                            of diverse mediums, invite audiences to explore the
                            intersections of these worlds. Through each
                            physical artwork, visitors can feel the tangible
                            presence of the artist's hand, while digital
                            creations challenge the limits of the possible.
                        </p>
                    </div>
                    <div className="text-column">
                        <p>
                            As we embark on this global journey, we aim to
                            offer audiences a unique experience that transcends
                            geographic borders. By presenting our exhibitions
                            worldwide, we enable people from diverse cultures
                            to immerse themselves in the profound beauty and
                            thought-provoking nature of our collective's
                            creations. We believe that art is a universal
                            language, and through our exhibitions, we seek to
                            foster a global dialogue, encouraging the exchange
                            of ideas and perspectives.
                        </p>
                        <p>
                            With every physical and digital artwork, we share,
                            we aim to connect people on a deeper level, to
                            engage in a global conversation about the evolving
                            role of art in the 21st century. Our desire is to
                            break down barriers, to unite people across
                            continents and backgrounds, and to inspire a new
                            generation of artists and art enthusiasts who
                            understand that art has the power to transcend
                            boundaries and create a more interconnected world.
                        </p>
                        <p>
                            As SOMA Collective continues to push the boundaries
                            of what is possible in the intersection of physical
                            and digital art, we invite you to join us on this
                            global artistic journey. Together, we can build a
                            world where creativity knows no bounds, and where
                            art serves as a bridge that unites us all.
                        </p>
                    </div>
                </div>
            </div>
            <div className="image-container">
                {presentationImages.map((img, index) => (
                    <div
                        className="card"
                        key={index}
                        onClick={() => navigate(img.route)}
                        style={{
                            '--image-url': `url(${img.src})`,
                        } as CustomCSSProperties} // Type explicite ici
                    >
                        <img
                            src={img.src}
                            alt={img.title}
                            className="eva-image"
                        />
                        <div className="card-back">
                            <p>{`'${img.title}' by ${img.artist}`}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
