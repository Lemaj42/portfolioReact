import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactSection = () => {
    return (
        <section
            id="contact-section"
            className="p-5 d-flex flex-column flex-md-row justify-content-around align-items-center text-center text-md-left"
            style={{
                backgroundImage: "url('./image/wallpaper/image5.jpg')",
                backgroundSize: 'cover',
                height: 'auto',
                color: 'black'
            }}
        >
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <h2 className="h2bis mt-3 display-4"><strong>Contact</strong></h2>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 className="card-title fw-bold" style={{ color: '#23abd4' }}>Abdelmadjid Chabane</h5>
                        <h6 className="card-subtitle mb-2 text-muted" style={{ color: 'black' }}>Développeur web Junior</h6>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                        <p><i className="fa fa-home"></i> Adresse</p>
                        <p>42153, Riorges France</p>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                        <p>Email : abdelmadjidchabane89@gmail.com</p>
                        <p>Tel. +33 6 03 94 08 38</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
