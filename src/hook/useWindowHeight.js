import { useState, useEffect } from "react";

const useWindowHeight = ()=>{
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(()=>{
        const {innerHeight: windowHeight} = window;
        setWindowHeight(windowHeight)
    }, [])

    return windowHeight;
  }

export default useWindowHeight;