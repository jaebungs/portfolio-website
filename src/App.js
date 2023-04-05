import  { useState, useEffect, useRef } from "react";
import Contact from './components/Contact';
import About from './components/About';
import CT from './components/CT'
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
      <Parallax className="about-section-parallax" pages={4}>
        <Contact speed={-1} />
        <About />
        <CT />
        <Project />
        <Masonry />
        <Footer offsect={1} factor={0.1} />
      </Parallax>
    </main>
  );
}

export default App;
