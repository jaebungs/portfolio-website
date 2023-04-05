import React from 'react';
import ProjectInfoCard from './projects/ProjectInfoCard';
import TCOMain from '../files/tco-main.png';
import TCOModal from '../files/tco-modal.png';
import {ParallaxLayer} from 'react-spring/renderprops-addons';

const TCO = () => {
    // total cost of ownership calculator

  return (
    <section className="project-section">
      <article className="project-section__left-article">
        <div className="project-section__left-image">
            <ParallaxLayer
                    className="parallaxLayer__project--image"
                    offset={0}
                    factor={0}
                    speed={0.15}
                >
                    <img
                    className="tco-modal-image left-image responsive-image"
                    src={TCOModal}
                    alt="saving calculator modal screenshot"
                    />
            </ParallaxLayer>
            <ParallaxLayer
                className="parallaxLayer__project--image"
                offset={0}
                factor={0}
                speed={0.1}
            >
                <img
                className="tco-main-image left-image responsive-image"
                src={TCOMain}
                alt="saving calculator page screenshot"
                />
          </ParallaxLayer>
          <ParallaxLayer
            className="parallaxLayer__project--background z-lowest"
            offset={0}
            factor={0}
            speed={0.2}
          >
            <div className="tilt-triangle"></div>
          </ParallaxLayer>
        </div>

        <div className="project-description-left">
          <ProjectInfoCard
            title="Saving Calculator"
            demo={'https://www.bmwusa.com/vehicles/all-electric/ix/sports-activity-vehicle/overview.html#savings-calculatorm'}
            techs={['JavaScript', 'AEM', 'CSS']}
            color="dark-tilt"
            description="EV ownership calculator that calculates potential savings based on fuel and electricity price in the user’s region with their mileage and fuel efficiency."
          />
        </div>
      </article>
    </section>
  );
};

export default TCO;
