import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Notfound from './landing_page/Notfound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/Signup" element={<Signup/>}/>
  <Route path="/About" element={<AboutPage/>}/>
  <Route path="/Products" element={<ProductPage/>}/>
  <Route path="/Pricing" element={<PricingPage/>}/>
  <Route path="/Support" element={<SupportPage/>}/>
  <Route path="*" element={<Notfound/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>
);


//reportWebVitals();
