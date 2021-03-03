import React, {useState, useEffect} from 'react';
import Image from '../files/profile.jpg';
import Trail from '../hook/Trail';
import TechChips from '../hook/TechChips';

const About = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about flex--vertical-center">
        <div className="blue-square flex--end">
          <img className="profile-picture" src={Image} alt="Jae's profile" />
        </div>
        <div className="about__text">
          <Trail open={open} className="trail-container">
            <p>Hi, I'm</p>
            <h1 className="bold-typography">Jae Park</h1>
            <p className="bold-typography">a front-end developer</p>
            <p className="big-typography">I love solving complex problems and making things easier to use.</p>
            <TechChips techs={['JavaScript', 'React', 'Database', 'Agile Methodology']} color='dark-blue' />

          </Trail>
        </div>
      </div>
      

    </section>
  );
};

export default About;
