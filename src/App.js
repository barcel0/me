import React from 'react';
import Header from './components/Header'
import RibbonLeft from './components/RibbonLeft';
import RibbonRight from './components/RibbonRight';
import About from './components/About';
import Stack from './components/Stack';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <RibbonLeft />
        <div className="w-10/12 main-container">
          <About />
          <Stack />
          <Portfolio />
          <Education />
          <Contact />
        </div>
        <RibbonRight />
      </div>
      <Footer />
    </>
  );
}

export default App;
