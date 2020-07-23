import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';

const App = () => {
  useEffect(() => {
    scrollToTop();
  }, {});

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className='wrapper'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
