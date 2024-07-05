import React from 'react';
import './CompetencesSection.css';
import Image3 from '../image/wallpaper/image3.jpg';
import php1 from '../image/logo/logo/php.png';
import Symfony1 from '../image/logo/logo/symfony.png';
import Figma1 from '../image/logo/figma_logo.png';
import Trello1 from '../image/logo/trello_logo.png';
import Bootstrap1 from '../image/logo/logo/bs.png';
import Wordpress from '../image/logo/wordpress_logo.png';
import Css from '../image/logo/logo/css.png';
import Js from '../image/logo/logo/js.png';
import Html from '../image/logo/logo/html5.png';
import React1 from '../image/logo/logo/react.png';
import Sql from '../image/logo/logo/mysql.png';
import Nodejs from '../image/logo/logo/node.webp';
import Sass from '../image/logo/logo/sass.png';
import Tailwind from '../image/logo/logo/tailwind.png';
import Rgpd from '../image/logo/logo/rgpd.png';
import Equipe from '../image/logo/logo/equipe.jpg';
import Temps from '../image/logo/logo/gestion-du-temps.png';
import Esprit from '../image/logo/logo/espritAnalyse.png';
import Zen from '../image/logo/logo/zen.jpg';

const CompetencesSection = () => {
    return (
        <section id="competences-section" className="text-white text-center" style={{ backgroundImage: `url(${Image3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <h2 className="mt-3 display-4"><strong>Technologies maîtrisées</strong></h2>
                </div>
                <div className='skills'>
                    <div className='hard-skills'>
                        <h3>Hard skills</h3>
                        <div id="technos">
                            <img src={php1} alt="Logo php" />
                            <img src={Symfony1} alt="Logo Symfony" />
                            <img src={Figma1} alt="Logo Figma" />
                            <img src={Trello1} alt="Logo Trello" />
                            <img src={Bootstrap1} alt="Logo Bootstrap" />
                            <img src={Wordpress} alt="Logo WordPress" />
                            <img src={Css} alt="Logo Css" />
                            <img src={Js} alt="Logo Js" />
                            <img src={Html} alt="Logo Html" />
                            <img src={React1} alt="Logo React" />
                            <img src={Sql} alt="Logo Sql" />
                            <img src={Nodejs} alt="Logo Nodejs" />
                            <img src={Sass} alt="Logo Sass" />
                            <img src={Tailwind} alt="Logo Tailwind" />
                            <img src={Rgpd} alt="Logo Rgpd" />
                        </div>
                    </div>
                    <div className='soft-skills'>
                        <h3>Soft skills</h3>
                        <div id="technos1">
                            <img class="filter" src={Equipe} title="Esprit d'équipe" alt="Logo Rgpd" />
                            <img class="filter" src={Temps} title="Gestion du temps" alt="Logo Rgpd" />
                            <img class="filter" src={Esprit} title="L’esprit d’analyse" alt="Logo Rgpd" />
                            <img class="filter" src={Zen} title="Patience" alt="Logo Rgpd" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompetencesSection;
