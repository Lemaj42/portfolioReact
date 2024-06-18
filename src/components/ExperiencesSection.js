import React from 'react';
import CV from '../image/cvImage.png';
import Image2 from '../image/wallpaper/image2.jpg';
import "./ExperiencesSection.css";

const ExperiencesSection = () => {
    return (
        <section id="Experiences-section" className="text-white text-center" style={{ backgroundImage: `url(${Image2})`, height: 400, }}>
            <div className="row justify-content-center align-items-center text-center">
                <h2 className="mt-3 display-4"><strong>Expériences professionnelles</strong></h2>
            </div>
            <div className="container-fluid h-100">
                <div className="row h-70 justify-content-center align-items-center">
                    <div className="col-md-5 col-12 ms-3">
                        <h3><strong>Garage404</strong></h3>
                        <p>Formation (2023 - 2024)</p>
                        <h3><strong>Handicall - Malakoff</strong></h3>
                        <p>Téléconseiller (2016 - 2021)</p>
                    </div>
                    <div className="col-md-4 col-12 text-center px-0" id="borderEX">
                        <a target="_blank" href="https://drive.google.com/file/d/1UEqW9tqrpNfAsGRt9AxVjbydukrW0xqM/view?usp=sharing" rel="noopener noreferrer" download>
                            <img src={CV} alt="Abdelmadjid" style={{ maxWidth: '30%' }} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperiencesSection;


