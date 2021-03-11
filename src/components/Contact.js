import React from 'react';

const Contact = () => {
  return (
    <section className="contact flex--column">
      <a href="https://github.com/jaebungs" target="_blank" rel="noopener noreferrer" className="contact__anchor">
        <i className="fab fa-github-square contact__icon"></i>
      </a>
      <a href="https://www.linkedin.com/in/jae-park-robotics" target="_blank" rel="noopener noreferrer" className="contact__anchor">
        <i className="fab fa-linkedin contact__icon"></i>
      </a>
      <a className="contact__anchor" href="mailto:jaebungs@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-at contact__icon"></i></a>
    </section>
  );
};

export default Contact;
