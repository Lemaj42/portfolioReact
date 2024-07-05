import React from 'react';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import ExperiencesSection from './components/ExperiencesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CompetencesSection from './components/CompetencesSection';
import InfosSection from './components/infosSection';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  return (
    <>
      <Navbar />
      <WelcomeSection />
      <InfosSection />
      <ExperiencesSection />
      <ProjectsSection />
      <CompetencesSection />
      <ContactSection />
    </>
  );
};

export default App;
