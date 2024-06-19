import React from 'react';
import Carousel from './Carousel';
import Image5 from '../image/wallpaper/image5.jpg';

const ProjectsSection = () => {
    return (
        <section id="Projets-section" className="text-black text-center" style={{ backgroundImage: `url(${Image5})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="row justify-content-center align-items-center">
                <h2 className="mt-3 display-4"><strong>Mes Projets</strong></h2>
            </div>
            <div className="container-fluid1 carousel-header px-500">
                <Carousel />
            </div>
        </section>
    );
};

export default ProjectsSection;
