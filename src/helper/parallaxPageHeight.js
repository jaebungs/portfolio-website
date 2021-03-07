export const parallaxPageHeight = () => {
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
        case ((windowWidth > 413 && windowWidth <= 768) && (windowHeight > 667 && windowHeight <= 736)):
        // iphone 6/7/8
        page = 3.1
        break;
      case ((windowWidth > 410 && windowWidth <= 768) && (windowHeight >= 568 && windowHeight < 667)):
        // other devices smaller height
        page = 3.5
        break;
        case ((windowWidth > 320 && windowWidth <= 410) && (windowHeight >= 640 && windowHeight < 800)):
          // iphone 5
          page = 3.6
        break;
        case ((windowWidth > 280 && windowWidth <= 320) && (windowHeight >= 560 && windowHeight < 667)):
          // iphone 5
          page = 4.3
        break;
        case ((windowWidth > 280 && windowWidth <= 320) && (windowHeight >= 500 && windowHeight <= 731)):
        page = 3.0
        break;
  
        case ((windowWidth >=813 && windowWidth < 1024) && windowHeight < 420):
        // other devices landscape
        page = 5.2
        break;
      case ((windowWidth >=731 && windowWidth < 813) && windowHeight < 420):
        // other devices landscape
        page = 6.1
        break;
        
        case ((windowWidth >=568 && windowWidth < 667) &&  (windowHeight > 280 && windowHeight <= 320)):
        // other devices landscape
        page = 6.5
        break;
        case ((windowWidth >=667 && windowWidth < 731) && (windowHeight > 320 && windowHeight <= 375)):
        // other devices landscape
        page = 5.5
        break;
        case ((windowWidth >=667 && windowWidth < 731) && (windowHeight > 375 && windowHeight <= 540)):
        // other devices landscape
        page = 4.8
        break;
        case ((windowWidth >=620 && windowWidth < 650) &&(windowHeight > 325 && windowHeight <= 360)):
        // other devices landscape
        page = 5.7
        break;
        case ((windowWidth >=650 && windowWidth < 667) && windowHeight <= 280):
        // other devices landscape
        page = 7.5
        break;
      case (windowWidth <= 280 && windowHeight <= 653):
        // other devices landscape
        page = 3.8 
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
    console.log(page)
  
    return page;
  }