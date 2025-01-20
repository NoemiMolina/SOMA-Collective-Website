import React from 'react';
import { MdMailOutline } from "react-icons/md";
import './Exhibitions.css';

const ExhibitionTab = () => {
    const mail = 'somacollective75@gmail.com';
    const exhibitionsImages = [
        {
            src: require('../../assets/images/ExhibitionImgs/ShinSekaiSomsoc.jpg'),
            title: 'Shin Sekai Somsoc',
        },
        {
            src: require('../../assets/images/ExhibitionImgs/NFTFactory2.jpg'),
            title: 'NFT Factory',
        },
        {
            src: require('../../assets/images/ExhibitionImgs/SomaverseNFT.jpg'),
            title: 'Somaverse NFT',
        },
        {
            src: require('../../assets/images/ExhibitionImgs/NFTFactory.jpg'),
            title: 'NFT Factory',
        },
        {
            src: require('../../assets/images/ExhibitionImgs/lighton.jpg'),
            title: 'lighton pic',
        },
        {
            src: require('../../assets/images/ExhibitionImgs/lighton2.jpg'),
            title: 'lighton2 pic',
        },
        {
            src: require('../../assets/images/ExhibitionImgs/lukasvanite.jpg'),
            title: 'Vanité pic',
        },
        {
            src: require('../../assets/images/ExhibitionImgs/dazy.jpg'),
            title: 'expo pic',
        },
        {
            src: require('../../assets/images/ExhibitionImgs/lighton3.jpg'),
            title: 'lighton3 pic',
        },
    ];

    return (
        <div className="container">
            <div className="page-container__section">
                {exhibitionsImages.slice(0, 1).map((image, index) => (
                    <div key={index} className="page-container__section__item animPic">
                        <img src={image.src} alt={image.title} />
                    </div>
                ))}
                <div className="page-container__section__item">
                    <div className="text-container">
                        <h1 className="title">Previous Events</h1>
                        <p className="louisDazyPresentation exhibitionPresentation">
                            07/2024 : <strong>NFCC ROME - DIGITAL FESTIVAL (ROMA)</strong><br />
                            06/2024 : <strong>NFC - DIGITAL FESTIVAL (LISBON)</strong><br />
                            05/2024 : <strong>SHIN SEKAI - NOX GALLERY (TOKYO)</strong><br />
                            05/2024 : <strong>SHIN SEKAI - COURTYARD HIRO (TOKYO)</strong><br />
                            05/2024 : <strong>SHIN SEKAI - SOMSOC GALLERY (TOKYO)</strong><br />
                            05/2024 : <strong>SHIN SEKAI - ULTRA SUPER NEW (TOKYO)</strong><br />
                            04/2024 : <strong>ECHO - UNCOMMON GALLERY (SEOUL)</strong><br />
                            03/2024 : <strong>CHROMA - COR GALLERY (PARIS)</strong><br />
                            02/2024 : <strong>ESPRIT DE CORPS - NFT FACTORY (PARIS)</strong><br />
                            10/2023 : <strong>CHARITABLE SALE (IHAM, PARIS)</strong><br />
                            09/2023 : <strong>SOMAVERSE - NFT FACTORY (PARIS)</strong><br />
                        </p>
                    </div>
                </div>
                {exhibitionsImages.slice(1, 2).map((image, index) => (
                    <div key={index} className="page-container__section__item animPic">
                        <img src={image.src} alt={image.title} />
                    </div>
                ))}
                <div className="page-container__section__item">
                    <div className="text-container two-columns">
                        <div className="column">
                            <h1 className="title">Collaboration Opportunity</h1>
                            <p className="louisDazyPresentation exhibitionPresentation">
                                {/* The SOMA Collective is a dynamic group of talented artists dedicated to promoting contemporary art and creating unique cultural experiences. We believe in the synergy between art and business, offering exclusive collaboration opportunities for brands that share our creative and innovative vision.
                                <br />
                                <br /> */}
                                <strong>WHY COLLABORATE WITH SOMA?</strong>
                                <br />
                                <br />
                                <strong>ENHANCED SOCIAL MEDIA PRESENCE:</strong>
                                <br />
                                <ul>
                                    <li>Your brand will be highlighted on our social media platforms, benefiting from our engaged artistic community.</li>
                                    <li>Dedicated posts, interactive stories, and co-branded ad campaigns will boost your online presence (520k followers).</li>
                                </ul>
                                <br />
                                <strong>ARTISTS AS BRAND AMBASSADORS:</strong>
                                <br />
                                <ul>
                                    <li>Feature our artists in your brand communication as ambassadors or spokespersons</li>
                                    <li>Utilize their unique artistic appeal to create impactful and memorable campaigns</li>
                                </ul>
                                <strong>CREATIVE WORKSHOP:</strong>
                                <br />
                                <ul>
                                    <li>During our exhibitions and events, we offer creative workshops linked to your brand.</li>
                                    <li>These immersive experiences associate your brand with innovation and culture</li>
                                </ul>
                            </p>
                        </div>
                        <div className="column">
                            <p className="louisDazyPresentation exhibitionPresentation">
                                <strong>CO-HOSTED EVENTS:</strong>
                                <br />
                                <ul>
                                    <li>Organize unique and engaging artistic events in partnership with SOMA.</li>
                                    <li>Enhance your brand image by supporting culture and creativity</li>
                                </ul>
                                <br />
                                <strong>MEDIA EXPOSURE:</strong>
                                <br />
                                <ul>
                                    <li>Benefit from increased media coverage through our network in the art and media world.</li>
                                    <li>Your partnership with SOMA will be featured in articles, interviews, and reports, boosting your visibility.</li>
                                </ul>
                                <br />
                                <strong>NETWORKING AND PR:</strong>
                                <br />
                                <ul>
                                    <li>Access a network of art professionals, creatives, and influencers.</li>
                                    <li>Strengthen your public relations and expand future collaboration opportunities.</li>
                                </ul>
                                <strong>EXCLUSIVE MASTERCLASSES:</strong>
                                <br />
                                <ul>
                                    <li>Offer your employees and clients exclusive masterclasses led by our artists.</li>
                                    <li>These sessions will inspire and foster creativity within your organization.</li>
                                </ul>
                                <br />
                            </p>
                        </div>
                        <a href={`mailto:${mail}`} className="social-icon">
                            <MdMailOutline /> <strong>contact us</strong>
                        </a>
                    </div>

                </div>
                <div className="page-container__section">
                    {exhibitionsImages.slice(4).map((image, index) => (
                        <div key={index} className="page-container__section__item animPic">
                            <img src={image.src} alt={image.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default ExhibitionTab;
