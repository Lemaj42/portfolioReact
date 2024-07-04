import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact-section" className="justify-content-center align-items-center" style={{ backgroundImage: "url('./image/wallpaper/image5.jpg')", height: 'auto', color: 'black' }}>
            <h2 className="mt-3 text-center display-4"><strong>Contact</strong></h2>
            <div className="card-body text-center">
                <h5 className="card-title" style={{ marginTop: '30px' }}>Abdelmadjid Chabane</h5>
                <h6 className="card-subtitle mb-2 text-muted" style={{ color: 'black' }}>Développeur web Junior</h6>
            </div>
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-12 col-sm-4">
                        <div className="card bg-light mb-3">
                            <div className="card-header bg-black text-white text-uppercase"><i className="fa fa-home"></i> Adresse</div>
                            <div className="card-body">
                                <p>42153, Riorges</p>
                                <p>France</p>
                                <p>Email : abdelmadjidchabane89@gmail.com</p>
                                <p>Tel. +33 6 03 94 08 38</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
