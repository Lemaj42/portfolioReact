import React from 'react';
import './infosSection.css';
import FotoPerso1 from '../image/photoperso1.png';

const InfosSection = () => {
    return (
        <section id="infos-section" className="text-white text-center">
            <div className="container-fluid h-500">
                <div className="row justify-content-center align-items-center text-center">
                    <h2 className=" h2bis mt-3 display-4"><strong>À propos de moi</strong></h2>
                </div>
                <div className="row h-70 justify-content-center align-items-center">
                    <div className="col-md-4" id="borderIN">
                        <img
                            className="img-fluid rounded-circle custom-margin"
                            src={FotoPerso1}
                            alt="Abdelmadjid"
                        />
                    </div>
                    <div className="col-md-7 col-12 text-black text-left">
                        <h2 className="h2Bis fw-bold">Mon histoire</h2>
                        <p className="projects">Je suis Abdelmadjid, marié et père de trois enfants. Passionné par le monde de la technologie. Actuellement, je me lance dans une reconversion professionnelle vers le développement web pour poursuivre ma passion et acquérir de nouvelles compétences dans un domaine en constante évolution.</p>
                        <h2 className="h2Bis fw-bold">Mes centres d'intérêts</h2>
                        <p className="projects">Découvrirez une variété de mes centres d'intérêts, incluant ma participation en tant que membre de l'association AFM, mon enthousiasme pour le sport, ma passion pour les voyages et mon intérêt pour la technologie.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfosSection;

