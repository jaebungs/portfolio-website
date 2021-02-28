import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section flex--column">
      <a href="https://github.com/jaebungs" className="anchor">
        <i className="fab fa-github-square"></i>
      </a>
      <a href="https://www.linkedin.com/in/jae-park-robotics" className="anchor">
        <i className="fab fa-linkedin"></i>
      </a>
      <a className="email--vertical" href="mailto:jaebungs@gmail.com">jaebungs@gmail.com</a>
    </section>
  );
};

export default Contact;
