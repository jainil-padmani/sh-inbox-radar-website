import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustLogos from './components/TrustLogos';
import Features from './components/Features';
import ProductDemo from './components/ProductDemo';
import ProcessSteps from './components/ProcessSteps';
import Integration from './components/Integration';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Awards from './components/Awards';
import Footer from './components/Footer';
import ResultPage from './components/ResultPage';
import UserTypeSelection from './components/UserTypeSelection';
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import Home3 from './components/Home3';
import ResultPage1 from './components/ResultPage1';
import ResultPage2 from './components/ResultPage2';
import ResultPage3 from './components/ResultPage3';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />
        <Route path="/results1" element={<ResultPage1 />} />
        <Route path="/results2" element={<ResultPage2 />} />
        <Route path="/results3" element={<ResultPage3 />} />
      </Routes>
    </div>
  );
}

export default App;