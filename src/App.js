import { useState, useEffect } from "react";
import Contact from './components/Contact';
import About from './components/About';
import Project from './components/Project';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import Modal from 'react-modal';
import { parallaxPageHeight } from './helper/parallaxPageHeight';

Modal.setAppElement('#root');

function App() {
  const [page, setPage] = useState();
  useEffect(()=>{
    setPage(parallaxPageHeight())
  }, [])

  return (
    <main className="App">
      <Parallax pages={page}>
        <ParallaxLayer className="contact-parallax" offset={0} factor={0} speed={-1}>
          <Contact />
        </ParallaxLayer>

        <About />

        <Project />
      </Parallax>
    </main>
  );
}

export default App;
