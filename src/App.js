import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css"
import Home from './page/Home';
import Navbar from './components/Navbar';
import ServicePage from './page/ServicePage';
import AboutPage from './page/AboutPage';
import ProjectPage from './page/ProjectPage';
import ContactPage from './page/ContactPage';
import Footer from './components/Footer';
import TeamPage from './page/TeamPage';
import TestimonialPage from './page/TestimonialPage';
import NotFoundPage from './page/NotFoundPage';
import CareerPage from './page/CareerPage';
import ApplyPage from './page/ApplyPage';

const App = () => {


  const handleNavbarScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 45) {
        navbar.classList.add('sticky-top', 'shadow-sm');
      } else {
        navbar.classList.remove('sticky-top', 'shadow-sm');
      }
    }
  };
  window.addEventListener('scroll', handleNavbarScroll);



  return (

    <div class="container-xxl bg-white p-0">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/Testimonial" element={<TestimonialPage />} />
        <Route path="/notfound" element={<NotFoundPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path='/apply' element={<ApplyPage />} />
      </Routes>
      <Footer />
    </div>

  );
};

export default App;
