import React from 'react';
import NFTFactory from '../../assets/images/ExhibitionImgs/NFTFactory.jpg';
import './Exhibitions.css';


const ExhibitionTab = () => {
    return (
        <div className="container">
            <div className="louisDazy-container__section">
                <div className="louisDazy-container__section__item">
                    <h1 className="title">Previous Events</h1>
                    <p className="louisDazyPresentation">
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
                    </p>
                </div>
                {/* {louisDazyImages.slice(0, 2).map((image, index) => (
                    <div key={index} className="louisDazy-container__section__item animPic">
                        <img src={image.src} alt={image.title} />
                        <p className="art-caption">{image.title}</p>
                    </div>
                ))} */}
            </div>
        </div>
    );
};

export default ExhibitionTab;
