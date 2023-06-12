import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.js'
import BrandName from './components/BrandName.js'
import WTFIBeats from './components/Beats.js';
import Pricing from './components/Pricing.js';
import Services from './components/Services.js';
import Contact from './components/Contact.js';

function App() {
  
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    const slideObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in')
        }
      })
    })
  
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => slideObserver.observe(el));
    const fadeInElements = document.querySelectorAll('.hide-fade-in');
    fadeInElements.forEach((el) => fadeObserver.observe(el));

    return () => {
      hiddenElements.forEach((el) => slideObserver.unobserve(el));
      fadeInElements.forEach((el) => fadeObserver.unobserve(el)); 
    };
  }, []);

  return (
    <div className="App">
      <Header cart={cart} style={{position: 'sticky', top: '0', zIndex: 1000}} />
      <BrandName />
      <WTFIBeats setCart={setCart} clearCart={clearCart} />
      <Pricing />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
