import { useState, useEffect } from "react";
import Contact from './components/Contact';
import About from './components/About';
import Project from './components/Project';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
// import useWindowHeight from './hook/useWindowHeight';

const parallaxPage = () => {
  let page;
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  // Set Parallax page attribute depends on screen height.
  // Parallax hides whatever overflowed. This is tidious...  
  switch(true) {
     // for mobile
     case ((windowWidth > 768 && windowWidth <= 1024) && (windowHeight > 1024 && windowHeight <= 1366)):
      // ipad Pro
      page = 1.6
      break;
     case ((windowWidth > 768 && windowWidth <= 1366) && (windowHeight >= 800 && windowHeight <= 1024)):
      // ipad Pro landScape
      page = 2
      break;
     case ((windowWidth >= 768 && windowWidth <= 1024) && (windowHeight >= 800 && windowHeight <= 1024)):
      // ipad
      page = 2.6
      break;
      case ((windowWidth > 768 && windowWidth <= 1024) && (windowHeight >= 600 && windowHeight <= 768)):
        // ipad landscape
        page = 2.6
        break;
    case (windowWidth < 768 && (windowHeight >= 800 && windowHeight < 1024)):
      // other devices
      page = 2.8
      break;
    case ((windowWidth > 280 && windowWidth <= 768) && (windowHeight >= 500 && windowHeight < 800)):
      // other devices smaller height
      page = 3.4
      break;
    case (windowWidth <= 813 && windowHeight < 420):
      // other devices landscape
      page = 5.8
      break;
    case (windowWidth <= 280 && windowHeight <= 653):
      // other devices landscape
      page = 4
      break;
    // for desktop
    case (windowWidth > 1366 && windowHeight > 400 && windowHeight <= 768):
      page = 2.7;
    break;
    case (windowWidth > 1366 && windowHeight > 768 && windowHeight <= 900):
      page = 2.6;
    break;
    case (windowWidth > 1366 && windowHeight > 900 && windowHeight <= 1350):
      page = 2.1
      break;
    case (windowWidth > 1366 && windowHeight > 1350):
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
