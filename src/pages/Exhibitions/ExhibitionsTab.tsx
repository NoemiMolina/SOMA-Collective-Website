import React from 'react';
import NFTFactory from '../../assets/images/ExhibitionImgs/NFTFactory.jpg';
import './Exhibitions.css';


const ExhibitionTab = () => {
    return (
        <div className="container">
            <div className="white-container">
                <div className="presentation-container">
                    <div className="text-columns">
                        <div className="text-column">
                            <h1 className="title">PREVIOUS EVENTS</h1>
                            <p>

                                07/2024 : <strong>NFCC ROME - DIGITAL FESTIVAL (ROMA)
                                </strong>                       <br />
                                06/2024 : <strong>NFC - DIGITAL FESTIVAL (LISBON)
                                </strong>                         <br />
                                05/2024 : <strong>SHIN SEKAI - NOX GALLERY (TOKYO)
                                </strong>                        <br />
                                05/2024 : <strong>SHIN SEKAI - COURTYARD HIRO (TOKYO)
                                </strong>                        <br />
                                05/2024 : <strong>SHIN SEKAI - SOMSOC GALLERY (TOKYO)
                                </strong>                        <br />
                                05/2024 : <strong>SHIN SEKAI - ULTRA SUPER NEW (TOKYO)
                                </strong>                        <br />
                                04/2024 : <strong>ECHO - UNCOMMON GALLERY (SEOUL)
                                </strong>                        <br />
                                03/2024 : <strong>CHROMA - COR GALLERY (PARIS)
                                </strong>                        <br />
                                02/2024 : <strong>ESPRIT DE CORPS - NFT FACTORY (PARIS)
                                </strong>                        <br />
                                10/2023 : <strong>CHARITABLE SALE (IHAM, PARIS)</strong>
                                <br />
                                09/2023 : <strong>SOMAVERSE - NFT FACTORY (PARIS)
                                </strong>                        <br />
                            </p>
                            <div className="inline-cards-right">
                                <div className="card">
                                    <div className="img-item">
                                        <img src={NFTFactory} alt="NFTFactory event img" className="art-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-column">
                            <h1 className="title">COLLABORATION OPPORTUNITY</h1>
                            <p>

                                coming soon
                            </p>
                            {/* <div className="inline-cards-right">
                            <div className="card">
                                <div className="img-item">
                                    <img src={NFTFactory} alt="NFTFactory event img" className="art-image" />
                                </div>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
                {/* <div className="image-container">
                {presentationImages.slice(2).map((img, index) => (
                    <div
                        className="card"
                        key={index}
                        onClick={() => navigate(img.route)}
                        style={{ '--image-url': `url(${img.src})` } as CustomCSSProperties}
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
            </div> */}
            </div>
        </div>
    );
};

export default ExhibitionTab;
