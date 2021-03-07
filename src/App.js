import { useState, useEffect } from "react";
import Contact from './components/Contact';
import About from './components/About';
import Project from './components/Project';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
// import useWindowHeight from './hook/useWindowHeight';

const parallaxPage = () => {
  let page = 3;
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  // This is tidious... Parallax hides whatever overflowed. Set Parallax page attribute depends on screen height.
  switch(true) {
     // for mobile page height
     case (windowWidth <= 768 && windowHeight <= 1024):
      page = 2.6
      break;

    // for desktop page height
    case (windowHeight > 400 && windowHeight <= 760):
      page = 2.7;
    break;
    case (windowHeight > 760 && windowHeight <= 900):
      page = 2.6;
    break;
    case (windowHeight > 900 && windowHeight <= 1350):
      page = 2.1
      break;
    case (windowHeight > 1350):
      page = 1.6;
      break;

   
      
    default:
      page = 2;
      break;
  }
  console.log(page, windowHeight)
  return page;
}

function App() {
  const [page, setPage] = useState();

  useEffect(()=>{
    setPage(parallaxPage())
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
