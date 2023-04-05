import  { useState, useEffect, useRef } from "react";
import Contact from './components/Contact';
import About from './components/About';
import CT from './components/CT'
import TCO from './components/TCO'
import FluidTypo from './components/fluidTypo'
import Visualizer from './components/visualizer'
import Project from './components/Project';
import Masonry from './components/Masonry';
import Footer from './components/Footer';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive'

Modal.setAppElement('#root');

function App() {

  return (
    <main className="app">
      <Parallax className="about-section-parallax" pages={7}>
        <ParallaxLayer className="contact-parallax" offset={0.05} factor={0.1} speed={-1}>
          <Contact />
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} factor={0} speed={0.1}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={1} factor={0} speed={0.1}>
          <CT />
        </ParallaxLayer>
        <ParallaxLayer offset={2} factor={0} speed={0.1}>
          <TCO />
        </ParallaxLayer>    
        <ParallaxLayer offset={2.9} factor={0} speed={0.1}>
          <FluidTypo />
        </ParallaxLayer>
        <ParallaxLayer offset={3.9} factor={0} speed={0.1}>
          <Visualizer />
        </ParallaxLayer>   
        <ParallaxLayer offset={5} factor={0} speed={0.1}>
          <Project />
        </ParallaxLayer>
        <ParallaxLayer offset={6} factor={0} speed={0.1}>
          <Masonry />
        </ParallaxLayer>
        <ParallaxLayer offset={6.7} speed={0.1}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}

export default App;
