import React from 'react';
import './Exhibitions.css';
import somalogo from '../../assets/somalogo/logo.svg';
import { useNavigate } from 'react-router-dom';
import presentation from '../../assets/images/presentation.jpg';

const ExhibitionTab = () => {
    const exhibitionsImages = [
        {
            src: require('../../assets/images/ExhibitionImgs/shinsekai.gif'),
            title: 'Shin Sekai 2024 - TOKYO',
        },
        {
            src: require('../../assets/images/ExhibitionImgs/echo4.jpg'),
            title: 'Echo 2024 - SEOUL',
        },
        {
            src: require('../../assets/images/ExhibitionImgs/echo2.jpg'),
            title: 'Echo 2024 - SEOUL',
        },
        {
            src: require('../../assets/images/ExhibitionImgs/edc2.gif'),
            title: 'Esprit de Corps 2024 - PARIS',
        },
        {
            src: require('../../assets/images/ExhibitionImgs/echo8.jpg'),
            title: 'Echo 2024 - SEOUL',
        },
        {
            src: require('../../assets/images/ExhibitionImgs/technoircard.gif'),
            title: 'Shin Sekai 2024 - Tokyo',
        },
        {
            src: require('../../assets/images/ExhibitionImgs/echo1.jpg'),
            title: 'Echo 2024 - SEOUL',
        },
        {
            src: require('../../assets/images/ExhibitionImgs/edc3.gif'),
            title: 'Esprit de Corps 2024 - PARIS',
        },
        {
            src: require('../../assets/images/ExhibitionImgs/soma2.jpg'),
            title: 'Somaverse 2023 - PARIS',
        },
    ];

    return (
        <div className="page-container exhibition">
            <div className="page-container__section section--presentation exhibition">
                <div className="page-container__section__item presentation exhibition">
                    <div className='test'>
                        <h1 className='CollabTitleRecentEvent'>Exhibition and recent events</h1>
                    </div>
                    <p className='recentEventText'>
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
                        <br />
                        <a
                            href="/presskit.pdf"
                            download
                            className="download-button"
                        >
                            Download the SOMA's Presskit here !
                        </a>
                    </p>
                </div>
                {exhibitionsImages.slice(1, 2).map((image, index) => (
                    <div key={index} className="page-container__section__item animPic right-slice exhibition">
                        <img src={image.src} alt={image.title} />
                        <p className="art-caption exhibition">{`'${image.title}'`}</p>
                    </div>
                ))}
            </div>
            <div className="page-container__section section--content exhibition">
                {exhibitionsImages.slice(0, 1).map((image, index) => (
                    <div key={index} className="page-container__section__item animPic first-slice exhibition">
                        <img src={image.src} alt={image.title} />
                        <p className="art-caption exhibition">{`'${image.title}'`}</p>
                    </div>
                ))}
                <div className="page-container__section__item exhibition">
                    <h1 className='CollabTitle'>Collaboration Opportunity</h1>
                    <p className='presentationText exhibition'>
                        The SOMA Collective is a dynamic group of talented artists dedicated to promoting contemporary art and creating unique cultural experiences. We believe in the synergy between art and business, offering exclusive collaboration opportunities for brands that share our creative and innovative vision.
                        <br />
                        <br />
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
            </div>

            <div className="page-container__section exhibitionSliderGallery">
                <div className="exhibitionSliderGallery-wrapper">
                    {[...exhibitionsImages.slice(2, 7), ...exhibitionsImages.slice(2, 7)].map((image, index) => (
                        <div key={index} className="page-container__section__item animPic exhibitionSlide">
                            <img src={image.src} alt={image.title} />
                            <p className="art-caption exhibition">{`'${image.title}'`}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="page-container__section section--extra exhibition">
                <div className="page-container__section__item exhibition">
                    <p className='presentationEnd exhibition'>
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
                {exhibitionsImages.slice(8).map((image, index) => (
                    <div
                        key={index}
                        className="page-container__section__item animPic last-slice exhibition"
                    >
                        <img src={image.src} alt={image.title} />
                        <p className="art-caption exhibition lastSlice" style={{ fontSize: '0.5em' }}>{`'${image.title}'`}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExhibitionTab;
