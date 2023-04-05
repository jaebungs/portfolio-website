import React, {useState} from 'react';
import ProjectInfoCard from './projects/ProjectInfoCard';
import CocktailProjectModal from './modals/CocktailProjectModal';
import cocktails from '../files/cocktails.jpg';
import {ParallaxLayer} from 'react-spring/renderprops-addons';

const Cocktail = () => {
  const [isCocktailOpen, setIsCocktailOpen] = useState(false);

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
              className="cocktail-image responsive-image"
              src={cocktails}
              alt="Mymy cocktail page screenshot"
            />
          </ParallaxLayer>

          <ParallaxLayer className="parallaxLayer__project--background" offset={0} speed={0.2}>
            <div className="green-circle"></div>
          </ParallaxLayer>
        </div>
      </article>

      <CocktailProjectModal
        isOpen={isCocktailOpen}
        setIsOpen={setIsCocktailOpen}
        code="https://github.com/jaebungs/MyMy-Cocktails"
      />
    </section>
  );
};

export default Cocktail;
