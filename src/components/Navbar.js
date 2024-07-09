import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

const Navbar = () => {
    const [navbarTextColor] = useState('light');

    useEffect(() => {
        const handleScroll = () =>

            window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


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
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav >
        </>
    );
};

export default Navbar;