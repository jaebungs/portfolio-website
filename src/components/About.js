import React from 'react';
import Image from '../files/pro.jpg';
// import {ReactComponent as Arrow} from '../files/arrow.svg';
import Line from '../files/Line';

const About = () => {

  return (
    <section className="about-section" id="about">
      <div className="about flex--vertical-center">

        <div className="pink-square flex--end">
          <img className="profile-picture" src={Image} alt="Jae's profile" />
        </div>
        <div className="about__text">
          <p>
            Hello, I'm Jae Park
          </p>
          <p>Front-end Developer</p>
          <p>I like problem solving, making things easier?</p>
        </div>
      </div>
      <div className="flex--column"> 

        <Line />
      </div>
    </section>
  );
};

export default About;
