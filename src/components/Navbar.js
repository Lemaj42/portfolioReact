import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

const Navbar = () => {
    const [showButton, setShowButton] = useState(false);
    const [navbarTextColor] = useState('light');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${navbarTextColor} fixed-top`}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#infos-section">
                                    À propos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Experiences-section">
                                    Expériences
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Projets-section">
                                    Projets
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#competences-section">
                                    Compétences
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact-section">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="fab fa-linkedin"></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="fab fa-github"></span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav >
            {showButton && (
                <button className="back-to-top" onClick={scrollToTop}>
                    <i className="fa fa-arrow-up"></i>
                </button>
            )
            }
        </>
    );
};

export default Navbar;
