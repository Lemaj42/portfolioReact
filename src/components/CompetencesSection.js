import React from 'react';
import Image3 from '../image/wallpaper/image3.jpg';
import Symfony from '../image/logo/symfony_logo.png';
import Figma from '../image/logo/figma_logo.png';
import Trello from '../image/logo/trello_logo.png';
import Canva from '../image/logo/canva_logo.png';
import Bootstrap from '../image/logo/bootstrap_logo.png';
import WordPress from '../image/logo/wordpress_logo.png';

const CompetencesSection = () => {
    return (
        <section id="competences-section" className="text-white text-center" style={{ backgroundImage: `url(${Image3})`, height: '300px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container-fluid h-250">
                <div className="row justify-content-center align-items-center">
                    <h2 className="mt-3 display-4"><strong>Technologies maîtrisées</strong></h2>
                </div>
                <div className="d-flex justify-content-center align-items-center container">
                    <ul className="row text-white d-flex justify-content-evenly w-100">
                        <li className="d-flex flex-column align-items-center justify-content-center col-12 col-lg-2 col-md-4 col-sm-6" style={{ fontSize: 'larger', listStyle: 'none' }}>
                            <img src={Symfony} width="150px" className="my-2 img-fluid" alt="Logo Symfony" />
                            <p>Symfony</p>
                        </li>
                        <li className="d-flex flex-column align-items-center justify-content-center col-12 col-lg-2 col-md-4 col-sm-6" style={{ fontSize: 'larger', listStyle: 'none' }}>
                            <img src={Figma} width="150px" className="my-2 img-fluid" alt="Logo Figma" />
                            <p>Figma</p>
                        </li>
                        <li className="d-flex flex-column align-items-center justify-content-center col-12 col-lg-2 col-md-4 col-sm-6" style={{ fontSize: 'larger', listStyle: 'none' }}>
                            <img src={Trello} width="150px" className="my-2 img-fluid" alt="Logo Trello" />
                            <p>Trello</p>
                        </li>
                        <li className="d-flex flex-column align-items-center justify-content-center col-12 col-lg-2 col-md-4 col-sm-6" style={{ fontSize: 'larger', listStyle: 'none' }}>
                            <img src={Canva} width="150px" className="my-2 img-fluid" alt="Logo Canva" />
                            <p>Canva</p>
                        </li>
                        <li className="d-flex flex-column align-items-center justify-content-center col-12 col-lg-2 col-md-4 col-sm-6" style={{ fontSize: 'larger', listStyle: 'none' }}>
                            <img src={Bootstrap} width="150px" className="my-2 img-fluid" alt="Logo Bootstrap" />
                            <p>Bootstrap</p>
                        </li>
                        <li className="d-flex flex-column align-items-center justify-content-center col-12 col-lg-2 col-md-4 col-sm-6" style={{ fontSize: 'larger', listStyle: 'none' }}>
                            <img src={WordPress} width="150px" className="my-2 img-fluid" alt="Logo WordPress" />
                            <p>WordPress</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default CompetencesSection;
