import React, { useEffect } from 'react';
import Hero from './Hero';
import LogoTicker from './LogoTicker';
import Features from './Features';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
        window.scrollTo(0,0);
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <LogoTicker />
      <Features />
    </>
  );
};

export default Home;