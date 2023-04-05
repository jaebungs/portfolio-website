import Contact from './components/Contact';
import About from './components/About';
import CT from './components/CT'
import TCO from './components/TCO'
import FluidTypo from './components/FluidTypo'
import Visualizer from './components/Visualizer'
import Cocktail from './components/Cocktail';
import Masonry from './components/Masonry';
import Footer from './components/Footer';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {

  return (
    <main className="app">
      <Parallax className="about-section-parallax" pages={6.8}>
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
        <ParallaxLayer offset={4.9} factor={0} speed={0.1}>
          <Cocktail />
        </ParallaxLayer>
        <ParallaxLayer offset={6} factor={0} speed={0.1}>
          <Masonry />
        </ParallaxLayer>
        <ParallaxLayer offset={6.6} speed={0.1}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}

export default App;
