import Contact from './components/Contact';
import About from './components/About';
import Project from './components/Project';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';

function App() {
  return (
    <main className="App">
      <Parallax pages={2}>
        <ParallaxLayer className="contact-parallax" offset={0} speed={-1}>
          <Contact />
        </ParallaxLayer>
        {/* <ParallaxLayer offset={0} speed={0}> */}
        <About />
        {/* </ParallaxLayer> */}
        {/* <ParallaxLayer offset={1} speed={0}> */}
        <Project />
        {/* </ParallaxLayer> */}
      </Parallax>
    </main>
  );
}

export default App;
