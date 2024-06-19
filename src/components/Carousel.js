import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Carousel.css';
import Hopitale from '../image/photos/image_hopital.png';
import Luxury from '../image/photos/image_luxury.png';
import Chat from '../image/photos/image_chat.png';
import LowCost from '../image/photos/image_lowcost.png';

const Carousel = () => {
    return (
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselId" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Hopitale} className="d-block w-100" alt="Hopital" />
                    <div className="carousel-caption d-none d-md-block caption-container">
                        <div className="caption-content">
                            <h4 className="text-uppercase fw-bold mb-4">Création d'un registre client pour un hôpital.</h4>
                            <h1 className="tittreP display-1 text-capitalize mb-4">HOPITAL CHABANE</h1>
                            <p className="mb-5 fs-5">
                                J'ai conçu un site web pour un établissement de santé, incorporant un système de gestion de patients.
                                Cette plateforme a été conçue pour permettre la création, la modification et la suppression des fiches
                                patients de manière intuitive.
                            </p>
                            <div className="d-flex align-items-center justify-content-center pb-3">
                                <a className="btn-hover-bg btn btn-dark text-white py-3 px-5" href="https://abdelmadjid-hopitalchabane.projets.p8.garage404.com" target="_blank" rel="noopener noreferrer">
                                    Voir plus
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Chat} className="d-block w-100" alt="Chat" />
                    <div className="carousel-caption d-none d-md-block caption-container">
                        <div className="caption-content">
                            <h4 className="text-uppercase fw-bold mb-4">MISE EN PLACE D'UN CHAT PRIVÉ.</h4>
                            <h1 className="tittreP display-1 text-capitalize mb-4">THE TCHAT</h1>
                            <p className="mb-5 fs-5">
                                J'ai créé un mini-chat avec une fenêtre principale affichant les messages de tous les utilisateurs, une barre horizontale pour envoyer de nouveaux messages, et une fenêtre latérale affichant la liste des utilisateurs.
                            </p>
                            <div className="d-flex align-items-center justify-content-center pb-3">
                                <a className="btn-hover-bg btn btn-dark text-white py-3 px-5" href="https://abdel-minichat.projets.p8.garage404.com" target="_blank" rel="noopener noreferrer">
                                    Voir plus
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Luxury} className="d-block w-100" alt="Luxury" />
                    <div className="carousel-caption d-none d-md-block caption-container">
                        <div className="caption-content">
                            <h4 className="text-uppercase fw-bold mb-4">Création d'une plateforme de recrutement.</h4>
                            <h1 className="tittreP display-1 text-capitalize mb-4">LUXURY SERVICES</h1>
                            <p className="mb-5 fs-5">
                                J'ai développé un site de recrutement intégrant une base de données
                                clients, une CV-thèque pour les candidats, ainsi que la gestion des candidatures
                                pour les offres d'emploi publiées. Le site inclut également un tableau de bord
                                administrateur et un cahier des charges rigoureusement respecté.
                            </p>
                            <div className="d-flex align-items-center justify-content-center pb-3">
                                <a className="btn-hover-bg btn btn-dark text-white py-3 px-5" href="https://madjid-luxury.projets.p8.garage404.com" target="_blank" rel="noopener noreferrer">
                                    Voir plus
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={LowCost} className="d-block w-100" alt="ILowCost" />
                    <div className="carousel-caption d-none d-md-block caption-container">
                        <div className="caption-content">
                            <h4 className="text-uppercase fw-bold mb-4">DÉVELOPPEMENT D'UN COMPARATEUR DE VOLS.</h4>
                            <h1 className="tittreP display-1 text-capitalize mb-4">LOW COST TRAVEL</h1>
                            <p className="mb-5 fs-5">
                                En binôme, nous avons créé une plateforme d'agence de voyage. Nous avons également ajouté la possibilité pour les entreprises de proposer leurs séjours. Pour que ces séjours soient disponibles, nous avons mis en place un tableau de bord permettant de valider et de mettre en ligne les séjours en attente.
                            </p>
                            <div className="d-flex align-items-center justify-content-center pb-3">
                                <a className="btn-hover-bg btn btn-dark text-white py-3 px-5" href="https://abdelrabehcomparator.projets.p8.garage404.com" target="_blank" rel="noopener noreferrer">
                                    Voir plus
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
