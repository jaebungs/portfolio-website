import React from 'react';

const Contact = () => {
  return (
    <section className="contact flex--column">
      <a href="https://github.com/jaebungs" className="contact__anchor">
        <i className="fab fa-github-square contact__icon"></i>
      </a>
      <a href="https://www.linkedin.com/in/jae-park-robotics" className="contact__anchor">
        <i className="fab fa-linkedin contact__icon"></i>
      </a>
      <a className="contact__anchor" href="mailto:jaebungs@gmail.com"><i class="fas fa-at contact__icon"></i></a>
    </section>
  );
};

export default Contact;
