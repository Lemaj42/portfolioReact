import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Carousel.css';


const Carousel = () => {
    return (
        <main class="page-content">
            <div class="card1">
                <div class="content">
                    <h2 class="title">HOPITAL CHABAN</h2>
                    <p class="copy">Création d'un registre client pour un hôpital</p>
                    <a href="https://abdelmadjid-hopitalchabane.projets.p8.garage404.com" target="_blank">
                        <button class="btn">Voir plus</button>
                    </a>
                </div>
            </div>
            <div class="card1">
                <div class="content">
                    <h2 class="title">THE TCHAT</h2>
                    <p class="copy">Mise en place d'un chat privé.</p>
                    <a href="https://abdel-minichat.projets.p8.garage404.com/" target="_blank">
                        <button class="btn">Voir plus</button>
                    </a>
                </div>
            </div>
            <div class="card1">
                <div class="content">
                    <h2 class="title">LOW COST TRAVEL</h2>
                    <p class="copy">Création d'une plateforme de recrutement.</p>
                    <a href="https://madjid-luxury.projets.p8.garage404.com/" target="_blank">
                        <button class="btn">Voir plus</button>
                    </a>
                </div>
            </div>
            <div class="card1">
                <div class="content">
                    <h2 class="title">LUXURY SERVICES</h2>
                    <p class="copy">Développement d'un comparateur de vols.</p>
                    <a href="https://abdelrabehcomparator.projets.p8.garage404.com//" target="_blank" class="">
                        <button class="btn">Voir plus</button>
                    </a>
                </div>
            </div>
        </main>
    );
};

export default Carousel;
