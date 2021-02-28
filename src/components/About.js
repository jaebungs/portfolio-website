import React from 'react';
import Contact from './Contact';
import Image from '../files/pro.jpg';
import {ReactComponent as Arrow} from '../files/arrow.svg';
import Line from '../files/Line';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="introduction flex--vertical-center">
        <Contact />

        <div className="pink-square flex--end">
          <img className="profile-picture" src={Image} alt="Jae's profile" />
        </div>
        <div className="introduction__text">
          <p>Hi,</p>
          <p>
            I'm <span className="name-typography">Jae Park</span>
          </p>
          <p>Front-end Developer</p>
          <p>I like problem solving, making things easier?</p>
        </div>
      </div>
      <div className="flex--column"> 

        <Line />
      </div>

      <Arrow className="arrow" />
    </section>
  );
};

export default About;
