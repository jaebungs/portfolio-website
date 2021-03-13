import  { useState, useEffect } from "react";
import Contact from './components/Contact';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive'

Modal.setAppElement('#root');

function App() {
  // Responsive library for setting Parallax pages.
  // Due to how React-Spring Parallax works, defining total height of the app and start point of each sections are necessary.
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  const isTablet = useMediaQuery({ query: '(max-width: 1023px)' })
  const isMediumMobile = useMediaQuery({ query: '(max-width: 700px)' })
  const isSmallMobile = useMediaQuery({ query: '(max-width: 400px)' })
  const isTinyMobile = useMediaQuery({ query: '(max-width: 280px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  const isLandscapeTablet = useMediaQuery({ query: '(min-width: 1024px)' })
  const isLandscapeSmallMobile = useMediaQuery({ query: '(min-width: 700px)' });
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)'})
  const [pageHeight, setPageHeight] = useState({ pageHeight: 2.15, projectStartPoint: 0.8, footerStartPoint:2});

  useEffect(()=>{
    setPageHeight(calculateBodyHeight())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const calculateBodyHeight = () => {
    const desktop = 2050;
    const tablet = 2800;
    const mediumMobile = 2000;
    const tinyMobile = 2200;
    let pageHeight;
    let projectStartPoint;
    let footerStartPoint;

    const windowHeight = window.innerHeight;
    // Mobile landscape page height settings
    if (isLandscapeTablet && isLandscape) {
      pageHeight = mediumMobile/windowHeight;
      projectStartPoint = (mediumMobile - 1300) / windowHeight;
      footerStartPoint = (mediumMobile - 145) / windowHeight;
    }

    if (isLandscapeSmallMobile && isLandscape) {
      pageHeight = mediumMobile/windowHeight;
      projectStartPoint = (mediumMobile - 1400) / windowHeight;
      footerStartPoint = (mediumMobile - 165) / windowHeight;
    }

    if (isMediumMobile && isLandscape) {
      pageHeight = mediumMobile/windowHeight;
      projectStartPoint = (mediumMobile - 1200) / windowHeight;
      footerStartPoint = (mediumMobile - 165) / windowHeight;
    }

    // Mobile portrait page height settings
    if (isDesktopOrLaptop) {
      pageHeight = desktop/windowHeight;
      projectStartPoint = (desktop - 1275) / windowHeight
      footerStartPoint = (desktop - 125) / windowHeight;
    }
    if (isTablet && isPortrait) {
      pageHeight = tablet/windowHeight;
      projectStartPoint = (tablet - 1975) / windowHeight
      footerStartPoint = (tablet - 125) / windowHeight;
    }

    if (isMediumMobile && isPortrait) {
      pageHeight = mediumMobile/windowHeight;
      projectStartPoint = (mediumMobile - 1250) / windowHeight
      footerStartPoint = (mediumMobile - 125) / windowHeight;
    }

    if (isSmallMobile && isPortrait) {
      pageHeight = desktop/windowHeight;
      projectStartPoint = (desktop - 1250) / windowHeight
      footerStartPoint = (desktop - 125) / windowHeight;
    }

    if (isTinyMobile && isPortrait) {
      pageHeight = tinyMobile/windowHeight;
      projectStartPoint = (tinyMobile - 1350) / windowHeight
      footerStartPoint = (tinyMobile - 125) / windowHeight;
    }

    return { pageHeight, projectStartPoint, footerStartPoint}
  }

  return (
    <main className="app">
      <Parallax className="about-section-parallax" pages={pageHeight.pageHeight}>
        <ParallaxLayer className="contact-parallax" offset={0} factor={0.1} speed={-1}>
          <Contact />
        </ParallaxLayer>
        <ParallaxLayer  offset={0} factor={0.4} speed={0}>
        <About />
        </ParallaxLayer>
        <ParallaxLayer offset={pageHeight.projectStartPoint} speed={0}>
        <Project />
        </ParallaxLayer>
        <ParallaxLayer offset={pageHeight.footerStartPoint} factor={0.1} speed={0.1}>
        <Footer />
        </ParallaxLayer>
        
      </Parallax>
    </main>
  );
}

export default App;
