import React, {useState} from 'react';
import ProjectInfoCard from './projects/ProjectInfoCard';
import fluidTypoImage from '../files/fluid-typo.png';
import {ParallaxLayer} from 'react-spring/renderprops-addons';

const FluidTypo = () => {
  return (
    <section className="project-section">
      <article className="project-section__right-article responsive-reverse-column">
        <ProjectInfoCard
          title="Fluid Typography"
          demo={'https://codepen.io/jaebungs/pen/oNqzYba'}
          techs={['Javascript', 'CSS']}
          color="dark-blue"
          description="New Typography that can stretch, expand with the grid system. It was proof of concept(POC). Developed a Figma plugin to generate the POC componet."
        />
        <div className="project-section__right-image">
          <ParallaxLayer className="parallaxLayer__project--image" offset={0} factor={0} speed={0.1}>
            <img
              className="fluid-typo-image responsive-image"
              src={fluidTypoImage}
              alt="Dealership search example screenshot"
            />
          </ParallaxLayer>
          <ParallaxLayer className="parallaxLayer__project--background z-lowest" offset={0} factor={0} speed={0.2}>
            <div className="blue-rectangle"></div>
          </ParallaxLayer>
        </div>
      </article>
    </section>
  );
};

export default FluidTypo;
