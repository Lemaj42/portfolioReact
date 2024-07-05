import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact-section" className="p-5 d-flex justify-content-around align-items-center" style={{ backgroundImage: "url('./image/wallpaper/image5.jpg')", height: 'auto', color: 'black' }}>
            <div >
                <h5 className="card-title fw-bold" style={{ color: '#23abd4', marginTop: '30px' }}>Abdelmadjid Chabane</h5>
                <h6 className="card-subtitle mb-2 text-muted" style={{ color: 'black' }}>Développeur web Junior</h6>
            </div>
            <div>
                <p><i className="fa fa-home"></i> Adresse</p>
                <p>42153, Riorges France</p>
            </div>
            <div>
                <p>Email : abdelmadjidchabane89@gmail.com</p>
                <p>Tel. +33 6 03 94 08 38</p>
            </div>
        </section>
    );
};

export default ContactSection;