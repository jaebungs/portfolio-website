import React from 'react';
import Image from '../files/profile.jpg';
import TechChips from '../helper/TechChips';
import {ParallaxLayer} from 'react-spring/renderprops-addons';

const About = () => {
  // className on ParallaxLayer determines elements' position.
  return (
    <section className="about-section" id="about">
      <div className="about flex--vertical-center">
        <ParallaxLayer className="about-parallax" offset={0} speed={0.2}>
          <div className="blue-square"></div>
        </ParallaxLayer>
        <ParallaxLayer className="about-parallax__profile-pic" offset={0} speed={0.1}>
          <img className="profile-picture" src={Image} alt="Jae's profile" />
        </ParallaxLayer>

        <div className="about__text">
          <p>Hi, I'm</p>
          <h1 className="bold-typography">Jae Park,</h1>
          <p className="bold-typography">a Software developer</p>
          <p className="description-typography">
            I love solving complex problems and making things easier to use.
          </p>
          <TechChips
            techs={[
              'JavaScript',
              'Vue',
              'React',
              'Node.js',
              'Express',
              'PostgreSQL',
              'MongoDB',
              'Firebase',
              'VueX',
              'Redux',
              'AEM',
              'CSS',
              'HTML',
              'Webpack',
              'Git'
            ]}
            color="dark-blue"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
