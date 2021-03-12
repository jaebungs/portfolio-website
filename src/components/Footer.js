import React from 'react'
import {ParallaxLayer} from 'react-spring/renderprops-addons';

const Footer = () => {

    const handleCodeOnClick =() => {
        window.open('https://github.com/jaebungs/portfolio-website', '_blank');
    }
    return (
        <div>
            <ParallaxLayer className="footer" offset={0} factor={0} speed={0.12}>
                <p className="footer-typography">This site is built with Create-react-app, SCSS, React-spring.</p>
                <button className="modal__code-button--blue" onClick={handleCodeOnClick}>VIEW CODE</button>
            </ParallaxLayer>
        </div>
    )
}

export default Footer
