import React from 'react';
import images from '../../../assets/mail-carrier-in-the-snow-medium.gif'

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={images} className="lg:w-1/2 rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-4xl font-bold">BEST ONLINE LEARNING SYSTEM</h1>
                    <p className="py-6">GET STARTED WITH ONLINE EDUCATION</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;