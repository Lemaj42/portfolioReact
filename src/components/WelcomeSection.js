import React from 'react';
import './WelcomeSection.css';

const WelcomeSection = () => {
    return (
        <section id="welcome-section">
            <div className="container-fluid">
                <div className="main-container">
                    <div className="first-container share text-center">
                        <h1 className="margin-top: 20px">
                            <span>D</span><span>é</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>p</span><span>e</span><span>u</span><span>r</span>
                            <span> </span>
                            <span>W</span><span>e</span><span>b</span>
                            <span> </span>
                            <span>J</span><span>u</span><span>n</span><span>i</span><span>o</span><span>r</span>
                        </h1>
                    </div>
                    <div className="text-white center mt-5">
                        <h2>Portfolio d'Abdelmadjid</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
