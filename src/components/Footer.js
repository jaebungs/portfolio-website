import React from 'react';

const Footer = () => {
  const handleCodeOnClick = () => {
    window.open('https://github.com/jaebungs/portfolio-website', '_blank');
  };
  
  return (
    <section className="footer">
        <p className="footer-typography">
          This site is built with Create-react-app, SCSS, React-spring.
        </p>
        <button className="modal__code-button--blue" onClick={handleCodeOnClick}>
          VIEW CODE
        </button>
    </section>
  );
};

export default Footer;
