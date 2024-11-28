import React from 'react';
import './Home.css'
import somalogo from '../../assets/somalogo/logo.jpg';
import presentation from '../../assets/images/presentation.png'


const Home = () => (
    <div className="container">
        <img src={somalogo} alt='Logo' className="logo" />
        <img src={presentation} alt='Presentation pic' className='presentationPic' />
        
    </div>
);

export default Home;
