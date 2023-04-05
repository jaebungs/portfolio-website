import React, {useState} from 'react';
import ProjectInfoCard from './projects/ProjectInfoCard';
import MasonryProjectModal from './modals/MasonryProjectModal';
import masonry from '../files/masonry.JPG';
import {ParallaxLayer} from 'react-spring/renderprops-addons';

const Project = () => {
  const [isMasonrylOpen, setIsMasonryOpen] = useState(false);

  return (
    <section className="project-section">
      <article className="project-section__left-article">
        <div className="project-section__left-image">
          <ParallaxLayer
            className="parallaxLayer__project--background"
            offset={0}
            factor={0}
            speed={0.2}
          >
            <div className="peach-square"></div>
          </ParallaxLayer>

          <ParallaxLayer
            className="parallaxLayer__project--image"
            offset={0}
            factor={0}
            speed={0.1}
          >
            <img
              className="masonry-page-image left-image responsive-image"
              src={masonry}
              alt="masonry generator page screenshot"
            />
          </ParallaxLayer>
        </div>

        <div className="project-description-left">
          <ProjectInfoCard
            setIsOpen={setIsMasonryOpen}
            title="Masonry generator"
            demo={'https://commongooods-1609187154790.web.app/'}
            techs={['React', 'Firebase', 'SCSS']}
            color="dark-pink"
            description="Masonry gallery page generator that includes extend modal view, order change with drag and drop and multiple image upload/delete."
          />
        </div>
      </article>
      <MasonryProjectModal
        isOpen={isMasonrylOpen}
        setIsOpen={setIsMasonryOpen}
        code="https://github.com/jaebungs/gallery-with-admin"
      />
    </section>
  );
};

export default Project;
