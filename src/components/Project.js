import React from 'react';
import ProjectInfoCard from './projects/ProjectInfoCard';
import cocktails from '../files/cocktails.jpg';
import masonry from '../files/masonry.JPG';
import {ParallaxLayer} from 'react-spring/renderprops-addons';

const Project = () => {
  return (
    <section className="project-section">
      <article className="project-section__right-article responsive-reverse-column">
        <ProjectInfoCard
          title="Mymy cocktails"
          code={'https://github.com/jaebungs/MyMy-Cocktails'}
          techs={['React', 'Redux', 'MongoDB', 'Express', 'MaterialUI']}
          color="dark-green"
          description="Simple and fun cocktail recipe finder that includes the ability to create an account and save favourite recipes."
        />
        <div className="project-section__right-image">
          {/* relative position wrapper div to responsively keep the green cirlce on the same position. */}
          <ParallaxLayer className="parallaxLayer__project--image" offset={0} speed={0.1}>
            <img
              className="cocktail-page-image responsive-image"
              src={cocktails}
              alt="Mymy cocktail page screenshot"
            />
          </ParallaxLayer>

          <ParallaxLayer className="parallaxLayer__project--background" offset={0} speed={0.2}>
            <div className="green-circle"></div>
          </ParallaxLayer>
        </div>
      </article>

      <article className="project-section__left-article">
        <div className="project-section__left-image">
          <ParallaxLayer className="parallaxLayer__project--background" offset={0} factor={0} speed={0.2}>
            <div className="peach-square"></div>
          </ParallaxLayer>

          <ParallaxLayer className="parallaxLayer__project--image" offset={0} factor={0} speed={0.1}>
            <img
              className="masonry-page-image left-image responsive-image"
              src={masonry}
              alt="masonry generator page screenshot"
            />
          </ParallaxLayer>
        </div>

        <div className="project-description-left">
          <ProjectInfoCard
            title="Masonry generator"
            code={'https://github.com/jaebungs/MyMy-Cocktails'}
            techs={['React', 'Firebase', 'SCSS']}
            color="dark-pink"
            description="Masonry gallery page generator that includes extend modal view, order change with drag and drop and multiple image upload/delete."
          />
        </div>
      </article>
    </section>
  );
};

export default Project;
