import React, {useState, useEffect} from 'react';
import Image from '../files/profile.jpg';
import Trail from '../hook/Trail';
import TechChips from '../hook/TechChips';
import {ParallaxLayer} from 'react-spring/renderprops-addons';

const About = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  // className on ParallaxLayer determines elements' position.
  return (
    <section className="about-section" id="about">
      <div className="about flex--vertical-center">
        <ParallaxLayer className="about-parallax" offset={0} factor={0.1} speed={1}>
          <div className="blue-square"></div>
        </ParallaxLayer>
        <ParallaxLayer className="about-parallax__profile-pic" offset={0} factor={0.2} speed={0.4}>
          <img className="profile-picture" src={Image} alt="Jae's profile" />
        </ParallaxLayer>

        <div className="about__text">
          <Trail open={open} className="trail-container">
            <p>Hi, I'm</p>
            <h1 className="bold-typography">Jae Park,</h1>
            <p className="bold-typography">a front-end developer</p>
            <p className="description-typography">
              I love solving complex problems and making things easier to use.
            </p>
            <TechChips
              techs={['JavaScript', 'React', 'Database', 'Agile Methodology']}
              color="dark-blue"
            />
          </Trail>
        </div>
      </div>
    </section>
  );
};

export default About;
