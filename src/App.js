import  {Fragment, useState, useEffect } from "react";
import Contact from './components/Contact';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import Modal from 'react-modal';
import { parallaxPageHeight } from './helper/parallaxPageHeight';

Modal.setAppElement('#root');

function App() {

  // Set height for Parallax
  const [page, setPage] = useState();
  useEffect(()=>{
    setPage(parallaxPageHeight())
  }, [])

  return (
    <Fragment>
      <main className="App">
        <Parallax pages={page}>
          <ParallaxLayer className="contact-parallax" offset={0} factor={0} speed={-1}>
            <Contact />
          </ParallaxLayer>
          <About />
          <Project />
          <Footer />
        </Parallax>
      </main>
    </Fragment>
  );
}

export default App;
