import React, {useState} from 'react';
import ProjectInfoCard from './projects/ProjectInfoCard';
import CocktailProjectModal from './modals/CocktailProjectModal';
import MasonryProjectModal from './modals/MasonryProjectModal';
import cocktails from '../files/cocktails.jpg';
import masonry from '../files/masonry.JPG';
import {ParallaxLayer} from 'react-spring/renderprops-addons';

const Project = () => {
  const [isCocktailOpen, setIsCocktailOpen] = useState(false);
  const [isMasonrylOpen, setIsMasonryOpen] = useState(false);

  return (
    <section className="project-section">
      <article className="project-section__right-article responsive-reverse-column">
        <ProjectInfoCard
          setIsOpen={setIsCocktailOpen}
          title="Mymy cocktails"
          demo={'https://mymycocktails.netlify.app/'}
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
      <CocktailProjectModal
        isOpen={isCocktailOpen}
        setIsOpen={setIsCocktailOpen}
        code="https://github.com/jaebungs/MyMy-Cocktails"
      />
      <MasonryProjectModal
        isOpen={isMasonrylOpen}
        setIsOpen={setIsMasonryOpen}
        code="https://github.com/jaebungs/gallery-with-admin"
      />
    </section>
  );
};

export default Project;
