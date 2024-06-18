import React from 'react';
import CV from '../image/cvImage.png';
import Image2 from '../image/wallpaper/image2.jpg';
import "./ExperiencesSection.css";

const ExperiencesSection = () => {
    return (
        <section id="Experiences-section" className="text-white text-center" style={{ backgroundImage: `url(${Image2})`, height: 400, }}>
            <div className="row justify-content-center align-items-center text-center">
                <h2 className="mt-3 display-4"><strong>Expériences professionnelles</strong></h2>
            </div>
            <div className="container-fluid h-100">
                <div className="row h-70 justify-content-center align-items-center">
                    <div className="col-md-5 col-12 ms-3">
                        <h3><strong>Garage404</strong></h3>
                        <p>Formation (2023 - 2024)</p>
                        <h3><strong>Handicall - Malakoff</strong></h3>
                        <p>Téléconseiller (2016 - 2021)</p>
                    </div>
                    {/* <div className="col-md-4 col-12 text-center px-0" id="borderEX">
                        <a target="_blank" href="https://drive.google.com/file/d/1UEqW9tqrpNfAsGRt9AxVjbydukrW0xqM/view?usp=sharing" rel="noopener noreferrer" download>
                            <img src={CV} alt="Abdelmadjid" style={{ maxWidth: '30%' }} />
                        </a>
                    </div> */}

                    <a target="_blank" href="https://drive.google.com/file/d/1UEqW9tqrpNfAsGRt9AxVjbydukrW0xqM/view?usp=sharing" rel="noopener noreferrer" download></a>
                    <div class="container1 col-md-4 col-12 text-center px-0" id="borderEX"></div>
                    <div class="wrapper1">
                        <div class="partCV one"></div>
                        <div class="partCV one1"></div>
                        <div class="partCV one2"></div>
                        <div class="partCV one3"></div>
                        <div class="partCV one4"></div>
                        <div class="partCV one5"></div>
                        <div class="partCV one6"></div>
                        <div class="partCV one7"></div>
                        <div class="partCV one8"></div>
                        <div class="partCV one9"></div>
                        <div class="partCV one10"></div>
                        <div class="partCV one11"></div>
                        <div class="partCV one12"></div>
                        <div class="partCV one13"></div>
                        <div class="partCV one14"></div>
                        <div class="partCV one15"></div>
                        <div class="partCV one16"></div>
                        <div class="partCV one17"></div>
                        <div class="partCV one18"></div>
                        <div class="partCV one19"></div>
                        <div class="partCV one20"></div>
                        <div class="partCV one21"></div>
                        <div class="partCV one22"></div>
                        <div class="partCV one23"></div>
                        <div class="partCV one24"></div>
                        <div class="partCV one25"></div>
                        <div class="partCV one26"></div>
                        <div class="partCV one28"></div>
                        <div class="partCV one29"></div>
                        <div class="partCV one30"></div>
                        <div class="partCV one31"></div>
                        <div class="partCV one32"></div>
                        <div class="partCV one33"></div>
                        <div class="partCV one34"></div>
                        <div class="partCV one35"></div>
                        <div class="partCV one36"></div>
                        <div class="partCV one37"></div>
                        <div class="partCV one38"></div>
                        <div class="partCV one39"></div>
                        <div class="partCV one40"></div>
                        <div class="partCV one41"></div>
                        <div class="partCV one42"></div>
                        <div class="partCV one43"></div>
                        <div class="partCV one44"></div>
                        <div class="partCV one45"></div>
                        <div class="partCV one46"></div>
                        <div class="partCV one47"></div>
                        <div class="partCV one48"></div>
                        <div class="partCV one49"></div>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default ExperiencesSection;

