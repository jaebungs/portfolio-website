import React from 'react';
import ProjectInfoCard from './projects/ProjectInfoCard';
import cocktails from '../files/cocktails.jpg';
import masonry from '../files/masonry.JPG';
import {ParallaxLayer} from 'react-spring/renderprops-addons';

const Project = () => {
  return (
    <section className="project-section">
      <ParallaxLayer offset={0.6} speed={0}>
      <article className="project-section__article flex--center responsive-reverse-column">
        <ProjectInfoCard
          title="Mymy cocktails"
          code={'https://github.com/jaebungs/MyMy-Cocktails'}
          techs={['React', 'Redux', 'MongoDB', 'Express', 'MaterialUI']}
          color="dark-green"
          description="Simple and fun cocktail recipe finder that includes the ability to create an account and save favourite recipes."
        />
        <div className="project-section__image">
          {/* relative position wrapper div to responsively keep the green cirlce on the same position. */}
          <img
            className="cocktail-page-image responsive-image"
            src={cocktails}
            alt="Mymy cocktail page screenshot"
          />
          <div className="green-circle"></div>
        </div>
      </article>
      <article className="project-section__article flex--center">
        <div className="project-section__image">
          <div className="peach-square"></div>
          <img
            className="masonry-page-image responsive-image"
            src={masonry}
            alt="masonry generator page screenshot"
          />
        </div>
        <ProjectInfoCard
          title="Masonry generator"
          code={'https://github.com/jaebungs/MyMy-Cocktails'}
          techs={['React', 'Firebase', 'SCSS']}
          color="dark-pink"
          description="Masonry gallery page generator that includes extend modal view, order change with drag and drop and multiple image upload/delete."
        />
      </article>
      </ParallaxLayer>
    </section>
  );
};

export default Project;
