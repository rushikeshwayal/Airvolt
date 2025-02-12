import React from 'react';
import "./components/About.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MembershipForm from './components/MembershipForm';
import AboutUs from './components/AboutUs';
import Leadership from './components/Leadership';
import ProductServices from './components/Product&Services';
import Board from './components/Board';
import Technology from './components/Technology';
import LandingHome from './components/LandingHome';
import IndustryFocus from './components/IndustryFocus';
import Rules from './components/Rules';
// import PrivacyPolicy  from './components/PrivacyPolicy';
import './App.css';
import TermsAndConditions from './components/TermCondition';
import CareerForm from './components/CareerForm';
// Rename the function to avoid conflict with imported App
function MainApp() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingHome />} />
          <Route path="/contact-us" element={<MembershipForm />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/board" element={<Board/>} />
          <Route path="/product" element={<ProductServices/>} />
          <Route path="/tech" element={<Technology/>} />
          <Route path="/industry-focus" element={<IndustryFocus/>} />
          <Route path="/policy" element={<Rules/>} />
          <Route path="/terms-conditionn" element={<TermsAndConditions/>} />
          <Route path="/Careers" element={<CareerForm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default MainApp;
