import React from 'react';
import ProjectInfoCard from './projects/ProjectInfoCard';
import visualizerImage from '../files/visualizer-img.png';
import {ParallaxLayer} from 'react-spring/renderprops-addons';

const Visualizer = () => {
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
                    className="visualizer-image left-image responsive-image"
                    src={visualizerImage}
                    alt="Visualizer component screenshot"
                    />
            </ParallaxLayer>
            <ParallaxLayer
                className="parallaxLayer__project--background z-lowest"
                offset={0}
                factor={0}
                speed={0.2}
            >
                <div className="light-pink-square rotated"></div>
            </ParallaxLayer>
        </div>

        <div className="project-description-left">
          <ProjectInfoCard
            title="Visualizer"
            demo={'https://www.bmwusa.com/vehicles/m-models/xm-plug-in-hybrid/overview.html'}
            techs={['JavaScript', 'AEM', 'CSS']}
            color="dark-pink"
            description="Real-time vehicle customization feature that allows users to visualize vehicle style changes in real-time and a 360-degree view, utilizing re-architectured components."
          />
        </div>
      </article>
    </section>
  );
};

export default Visualizer;
